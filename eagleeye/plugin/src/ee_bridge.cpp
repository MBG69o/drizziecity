// EagleEYE - ponte plugin <-> include (modo COMPLETO, com o SDK do SA-MP).
//
// ARQUITETURA DE SEGURANCA
//   O PLUGIN e o cerebro: guarda a API (host, caminho secreto, chave) e o
//   token do servidor OFUSCADOS/CIFRADOS, faz TODA a rede com o bot (licenca,
//   config, relatorios) numa thread propria e nunca expoe esses segredos.
//   A INCLUDE e o corpo: so LE a configuracao pelo plugin (natives), reporta
//   deteccoes pelo plugin e executa os comandos que o plugin entrega. A include
//   NAO conhece o endereco da API, nem a chave, nem o token -- tudo isso vive
//   somente dentro deste binario.
//
// Compilado com o SDK (amxplugin.cpp) -> expoe natives sem precisar da sampgdk,
// porque quem fala com o jogo (ler estado, kickar, etc.) e a propria include.
#include "../sdk/plugin.h"

#include <atomic>
#include <chrono>
#include <cstdarg>
#include <cstdio>
#include <cstring>
#include <ctime>
#include <deque>
#include <mutex>
#include <random>
#include <string>
#include <thread>
#include <vector>

#include "ee_crypto.h"
#include "ee_http.h"
#include "ee_license.h"
#include "ee_store.h"
#include "ee_detect.h"
#include "ee_secrets.h"

extern void* pAMXFunctions;

namespace {

typedef void (*logprintf_t)(const char* fmt, ...);
logprintf_t logprintf = nullptr;

const char* STORE_FILE   = "scriptfiles/eagleeye_servidor.bin";
const char* LICENSE_FILE = "scriptfiles/eagleeye_licenca.txt";

// ---- estado compartilhado (protegido por g_mtx) --------------------------
std::mutex g_mtx;
std::string g_apiHost, g_apiPath, g_apiKey, g_pepper, g_sign, g_storeHmac, g_licenseKey;
uint32_t g_storeKey[4] = { 0, 0, 0, 0 };
ee::Identity g_identity;

ee::Detector g_cfg;                 // configuracao viva (parseada da resposta do bot)
std::atomic<int> g_cfgSeq{ 0 };     // muda a cada config nova (a include re-le)
std::atomic<int> g_licensed{ -1 };  // 1 ok, 0 graca/offline, -1 sem licenca
std::atomic<bool> g_online{ false };
std::atomic<bool> g_run{ false };
std::thread g_worker;
ee::Grant g_grant;

// heartbeat que a include atualiza (usado na proxima consulta de config)
struct HB { int players = 0, maxPlayers = 0, port = 0, rconWeak = 0; std::string host; } g_hb;

std::deque<ee::Report> g_reports;   // relatorios a enviar
std::deque<std::string> g_players;  // listas de jogadores a enviar (corpo pronto)
std::deque<ee::Command> g_commands; // comandos do bot a serem puxados pela include
int g_ackCmd = 0;                   // maior id de comando ja entregue/consumido
std::string g_pendingNewToken;      // token novo que o bot mandou (rotacao)

// ---- util ----------------------------------------------------------------
std::string urlenc(const std::string& s) {
    static const char* hex = "0123456789ABCDEF";
    std::string o;
    for (unsigned char c : s) {
        if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9') ||
            c == '-' || c == '_' || c == '.' || c == '~') o += (char)c;
        else { o += '%'; o += hex[c >> 4]; o += hex[c & 15]; }
    }
    return o;
}

std::string genToken() {
    static const char* AL = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    std::random_device rd;
    std::mt19937 rng(rd() ^ (unsigned)time(nullptr));
    std::uniform_int_distribution<int> d(0, 35);
    std::string b; for (int i = 0; i < 22; i++) b += AL[d(rng)];
    std::string t = "EE-";
    t += b.substr(0, 6); t += '-'; t += b.substr(6, 4); t += '-';
    t += b.substr(10, 4); t += '-'; t += b.substr(14, 4); t += '-'; t += b.substr(18, 4);
    return t;
}

std::string makeNonce() {
    static const char* hx = "0123456789abcdef";
    std::random_device rd; std::mt19937 rng(rd());
    std::uniform_int_distribution<int> d(0, 15);
    std::string s; for (int i = 0; i < 16; i++) s += hx[d(rng)];
    return s;
}

std::string loadLicenseKey() {
    FILE* f = std::fopen(LICENSE_FILE, "rb");
    if (!f) return "";
    char buf[64] = { 0 };
    size_t n = std::fread(buf, 1, sizeof(buf) - 1, f);
    std::fclose(f);
    std::string s(buf, n);
    while (!s.empty() && (s.back() == '\n' || s.back() == '\r' || s.back() == ' ' || s.back() == '\t')) s.pop_back();
    return s;
}

// ---- rede (so na thread do worker) ---------------------------------------
void doCheckLicense() {
    std::string key, id, sign, path;
    { std::lock_guard<std::mutex> lk(g_mtx);
      key = g_licenseKey; id = g_identity.serverId; sign = g_sign;
      path = g_apiPath; }
    std::string nonce = makeNonce();
    std::string url = path + "/plugin/license?key=" + urlenc(key) + "&id=" + urlenc(id) +
                      "&nonce=" + nonce + "&k=" + urlenc(g_apiKey);
    ee::HttpResult r = ee::httpGet(g_apiHost, url);
    if (r.status != 200) return;
    ee::Grant g = ee::verifyBotResponse(r.body, key, id, sign, nonce);
    if (g.state != ee::LicenseState::Unknown) {
        g.checkedAt = (int64_t)time(nullptr);
        std::lock_guard<std::mutex> lk(g_mtx);
        g_grant = g;
    }
}

void doFetchConfig() {
    HB hb; std::string id, token;
    { std::lock_guard<std::mutex> lk(g_mtx); hb = g_hb; id = g_identity.serverId; token = g_identity.token; }
    char q[512];
    std::snprintf(q, sizeof q,
        "%s/ac/config?id=%s&token=%s&v=%d&players=%d&ack=%d&max=%d&port=%d&ver=plugin&rcw=%d&k=%s&host=%s",
        g_apiPath.c_str(), urlenc(id).c_str(), urlenc(token).c_str(), g_cfg.version,
        hb.players, g_ackCmd, hb.maxPlayers, hb.port, hb.rconWeak, urlenc(g_apiKey).c_str(),
        urlenc(hb.host).c_str());
    ee::HttpResult r = ee::httpGet(g_apiHost, q);
    g_online.store(r.status == 200);
    if (r.status != 200) return;

    std::vector<ee::Command> cmds;
    int rc = g_cfg.applyConfig(r.body, cmds);
    if (rc == 1) g_cfgSeq.fetch_add(1);     // config nova: a include re-le
    {
        std::lock_guard<std::mutex> lk(g_mtx);
        for (auto& c : cmds) if (c.id > g_ackCmd) g_commands.push_back(c);
        if (!g_cfg.newToken.empty() && g_cfg.newToken != g_identity.token) {
            g_pendingNewToken = g_cfg.newToken;
            g_identity.token = g_cfg.newToken;
            g_identity.serverId = g_cfg.newToken.substr(0, 9);
            ee::Store store(g_storeKey, g_storeHmac);
            store.save(STORE_FILE, g_identity);
            g_cfg.newToken.clear();
        }
    }
}

void doFlush() {
    for (;;) {
        ee::Report rep; bool has = false;
        { std::lock_guard<std::mutex> lk(g_mtx);
          if (!g_reports.empty()) { rep = g_reports.front(); g_reports.pop_front(); has = true; } }
        if (!has) break;
        std::string id, token;
        { std::lock_guard<std::mutex> lk(g_mtx); id = g_identity.serverId; token = g_identity.token; }
        std::string url = g_apiPath + "/ac/report?id=" + urlenc(id) + "&token=" + urlenc(token) + "&k=" + urlenc(g_apiKey);
        char body[640];
        std::snprintf(body, sizeof body, "cod=%d&id=%d&nome=%s&ip=%s&acao=%d&hits=%d&tol=%d&det=%s",
            rep.code, rep.playerId, urlenc(rep.name).c_str(), urlenc(rep.ip).c_str(),
            rep.action, rep.hits, rep.tolerance, urlenc(rep.detail).c_str());
        ee::httpPost(g_apiHost, url, body, "application/x-www-form-urlencoded");
    }
    for (;;) {
        std::string pl; bool has = false;
        { std::lock_guard<std::mutex> lk(g_mtx);
          if (!g_players.empty()) { pl = g_players.front(); g_players.pop_front(); has = true; } }
        if (!has) break;
        std::string id, token;
        { std::lock_guard<std::mutex> lk(g_mtx); id = g_identity.serverId; token = g_identity.token; }
        std::string url = g_apiPath + "/ac/players?id=" + urlenc(id) + "&token=" + urlenc(token) + "&k=" + urlenc(g_apiKey);
        ee::httpPost(g_apiHost, url, "p=" + pl, "application/x-www-form-urlencoded");
    }
}

void workerLoop() {
    int tick = 0;
    while (g_run.load()) {
        doCheckLicense();
        bool allowed;
        { std::lock_guard<std::mutex> lk(g_mtx); allowed = ee::grantAllows(g_grant, (int64_t)time(nullptr)); }
        g_licensed.store(g_licenseKey.empty() ? -1 : (allowed ? 1 : 0));
        if (allowed) {
            doFetchConfig();
            doFlush();
        }
        tick++;
        int poll = g_cfg.pollSeconds > 0 ? g_cfg.pollSeconds : 10;
        for (int i = 0; i < poll * 10 && g_run.load(); i++)
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
    }
}

// ---- helpers de native ---------------------------------------------------
std::string amxGetStr(AMX* amx, cell param) {
    cell* addr = nullptr;
    if (amx_GetAddr(amx, param, &addr) != AMX_ERR_NONE || !addr) return "";
    int len = 0; amx_StrLen(addr, &len);
    if (len <= 0 || len > 1024) return "";
    std::string s(len + 1, '\0');
    amx_GetString(&s[0], addr, 0, len + 1);
    s.resize(std::strlen(s.c_str()));
    return s;
}

void amxSetStr(AMX* amx, cell param, cell maxlen, const std::string& src) {
    cell* addr = nullptr;
    if (amx_GetAddr(amx, param, &addr) != AMX_ERR_NONE || !addr) return;
    std::string s = src;
    if (maxlen > 0 && (int)s.size() > maxlen - 1) s.resize(maxlen - 1);
    amx_SetString(addr, s.c_str(), 0, 0, maxlen > 0 ? maxlen : (cell)s.size() + 1);
}

// ---- natives -------------------------------------------------------------
cell AMX_NATIVE_CALL n_Ready(AMX*, cell*) { return 1; }

cell AMX_NATIVE_CALL n_Token(AMX* amx, cell* p) {
    std::lock_guard<std::mutex> lk(g_mtx); amxSetStr(amx, p[1], p[2], g_identity.token); return 1;
}
cell AMX_NATIVE_CALL n_ServerId(AMX* amx, cell* p) {
    std::lock_guard<std::mutex> lk(g_mtx); amxSetStr(amx, p[1], p[2], g_identity.serverId); return 1;
}
cell AMX_NATIVE_CALL n_Licensed(AMX*, cell*) { return g_licensed.load(); }
cell AMX_NATIVE_CALL n_Online(AMX*, cell*)   { return g_online.load() ? 1 : 0; }
cell AMX_NATIVE_CALL n_Global(AMX*, cell*)   { return g_cfg.global ? 1 : 0; }
cell AMX_NATIVE_CALL n_ConfigSeq(AMX*, cell*){ return g_cfgSeq.load(); }
cell AMX_NATIVE_CALL n_PollSeconds(AMX*, cell*){ return g_cfg.pollSeconds; }

cell AMX_NATIVE_CALL n_Enabled(AMX*, cell* p) {
    int c = (int)p[1]; return (c >= 0 && c < ee::PROT_COUNT && g_cfg.prot[c].enabled) ? 1 : 0;
}
cell AMX_NATIVE_CALL n_Action(AMX*, cell* p) {
    int c = (int)p[1]; return (c >= 0 && c < ee::PROT_COUNT) ? g_cfg.prot[c].action : 1;
}
cell AMX_NATIVE_CALL n_Tolerance(AMX*, cell* p) {
    int c = (int)p[1]; return (c >= 0 && c < ee::PROT_COUNT) ? g_cfg.prot[c].tolerance : 1;
}
cell AMX_NATIVE_CALL n_Value(AMX*, cell* p) {
    int c = (int)p[1]; return (c >= 0 && c < ee::PROT_COUNT) ? g_cfg.prot[c].value : 0;
}

cell AMX_NATIVE_CALL n_WhitelistCount(AMX*, cell*) {
    std::lock_guard<std::mutex> lk(g_mtx); return (cell)g_cfg.whitelist.size();
}
cell AMX_NATIVE_CALL n_WhitelistGet(AMX* amx, cell* p) {
    std::lock_guard<std::mutex> lk(g_mtx);
    int i = (int)p[1];
    if (i < 0 || i >= (int)g_cfg.whitelist.size()) { amxSetStr(amx, p[2], p[3], ""); return 0; }
    amxSetStr(amx, p[2], p[3], g_cfg.whitelist[i]); return 1;
}

// EE_Plugin_Report(playerid, const name[], const ip[], code, action, hits, tol, const detail[])
cell AMX_NATIVE_CALL n_Report(AMX* amx, cell* p) {
    ee::Report r;
    r.playerId = (int)p[1];
    r.name = amxGetStr(amx, p[2]);
    r.ip = amxGetStr(amx, p[3]);
    r.code = (int)p[4]; r.action = (int)p[5]; r.hits = (int)p[6]; r.tolerance = (int)p[7];
    r.detail = amxGetStr(amx, p[8]);
    std::lock_guard<std::mutex> lk(g_mtx);
    if (g_reports.size() < 500) g_reports.push_back(r);
    return 1;
}

// EE_Plugin_Heartbeat(players, maxPlayers, port, const host[], rconWeak)
cell AMX_NATIVE_CALL n_Heartbeat(AMX* amx, cell* p) {
    std::lock_guard<std::mutex> lk(g_mtx);
    g_hb.players = (int)p[1]; g_hb.maxPlayers = (int)p[2]; g_hb.port = (int)p[3];
    g_hb.host = amxGetStr(amx, p[4]); g_hb.rconWeak = (int)p[5] ? 1 : 0;
    return 1;
}

// EE_Plugin_Players(const data[])  (formato "id,nome,ping,score;...")
cell AMX_NATIVE_CALL n_Players(AMX* amx, cell* p) {
    std::string data = amxGetStr(amx, p[1]);
    std::lock_guard<std::mutex> lk(g_mtx);
    if (g_players.size() < 10) g_players.push_back(data);
    return 1;
}

// EE_Plugin_PullCommand(&id, type[], tlen, arg[], alen) -> 1 se tem comando
cell AMX_NATIVE_CALL n_PullCommand(AMX* amx, cell* p) {
    ee::Command c; bool has = false;
    { std::lock_guard<std::mutex> lk(g_mtx);
      if (!g_commands.empty()) { c = g_commands.front(); g_commands.pop_front(); has = true;
        if (c.id > g_ackCmd) g_ackCmd = c.id; } }
    if (!has) return 0;
    cell* addr = nullptr;
    if (amx_GetAddr(amx, p[1], &addr) == AMX_ERR_NONE && addr) *addr = c.id;
    amxSetStr(amx, p[2], p[3], c.type);
    amxSetStr(amx, p[4], p[5], c.arg);
    return 1;
}

// EE_Plugin_NewToken(dest[], len) -> 1 se o token foi trocado desde a ultima chamada
cell AMX_NATIVE_CALL n_NewToken(AMX* amx, cell* p) {
    std::lock_guard<std::mutex> lk(g_mtx);
    if (g_pendingNewToken.empty()) return 0;
    amxSetStr(amx, p[1], p[2], g_pendingNewToken);
    g_pendingNewToken.clear();
    return 1;
}

AMX_NATIVE_INFO g_natives[] = {
    { "EE_Plugin_Ready",          n_Ready },
    { "EE_Plugin_Token",          n_Token },
    { "EE_Plugin_ServerId",       n_ServerId },
    { "EE_Plugin_Licensed",       n_Licensed },
    { "EE_Plugin_Online",         n_Online },
    { "EE_Plugin_Global",         n_Global },
    { "EE_Plugin_ConfigSeq",      n_ConfigSeq },
    { "EE_Plugin_PollSeconds",    n_PollSeconds },
    { "EE_Plugin_Enabled",        n_Enabled },
    { "EE_Plugin_Action",         n_Action },
    { "EE_Plugin_Tolerance",      n_Tolerance },
    { "EE_Plugin_Value",          n_Value },
    { "EE_Plugin_WhitelistCount", n_WhitelistCount },
    { "EE_Plugin_WhitelistGet",   n_WhitelistGet },
    { "EE_Plugin_Report",         n_Report },
    { "EE_Plugin_Heartbeat",      n_Heartbeat },
    { "EE_Plugin_Players",        n_Players },
    { "EE_Plugin_PullCommand",    n_PullCommand },
    { "EE_Plugin_NewToken",       n_NewToken },
    { 0, 0 },
};

} // namespace

// ===========================================================================
//  Pontos de entrada do plugin
// ===========================================================================
PLUGIN_EXPORT unsigned int PLUGIN_CALL Supports() {
    return SUPPORTS_VERSION | SUPPORTS_AMX_NATIVES;
}

PLUGIN_EXPORT bool PLUGIN_CALL Load(void** ppData) {
    pAMXFunctions = ppData[PLUGIN_DATA_AMX_EXPORTS];
    logprintf = (logprintf_t)ppData[PLUGIN_DATA_LOGPRINTF];

    g_apiHost = ee::secrets::apiHost();
    g_apiPath = ee::secrets::apiPath();
    g_apiKey = ee::secrets::apiKey();
    g_pepper = ee::secrets::pepper();
    g_sign = ee::secrets::signSecret();
    g_storeHmac = ee::secrets::storeHmac();
    ee::secrets::storeKey(g_storeKey);
    ee::httpInit();

    g_licenseKey = loadLicenseKey();
    if (g_licenseKey.empty())
        logprintf("[EagleEYE] Cole a sua chave de licenca em %s", LICENSE_FILE);
    else if (!ee::licenseFormatOk(g_licenseKey, g_pepper)) {
        logprintf("[EagleEYE] A chave de licenca e invalida.");
        g_licenseKey.clear();
    }

    ee::Store store(g_storeKey, g_storeHmac);
    g_identity = store.load(STORE_FILE);
    if (!g_identity.valid) {
        g_identity.token = genToken();
        g_identity.serverId = g_identity.token.substr(0, 9);
        g_identity.valid = true;
        store.save(STORE_FILE, g_identity);
        logprintf("[EagleEYE] Primeira inicializacao: token de acesso gerado.");
    }
    logprintf("[EagleEYE] Plugin carregado. Servidor %s", g_identity.serverId.c_str());
    logprintf("[EagleEYE] No Discord use: /ac login token:%s", g_identity.token.c_str());

    g_run.store(true);
    g_worker = std::thread(workerLoop);
    return true;
}

PLUGIN_EXPORT void PLUGIN_CALL Unload() {
    g_run.store(false);
    if (g_worker.joinable()) g_worker.join();
    if (logprintf) logprintf("[EagleEYE] Plugin descarregado.");
}

PLUGIN_EXPORT int PLUGIN_CALL AmxLoad(AMX* amx) {
    return amx_Register(amx, g_natives, -1);
}

PLUGIN_EXPORT int PLUGIN_CALL AmxUnload(AMX*) {
    return AMX_ERR_NONE;
}

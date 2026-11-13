// EagleEYE - entry-point MINIMO e autossuficiente do plugin (sem sampgdk).
//
// Compila sozinho com o nucleo seguro (ee_crypto/ee_store/ee_license/ee_http).
// O plugin CARREGA no SA-MP/open.mp, gera/le o token cifrado, mostra no console
// e roda o loop que valida a licenca e busca a configuracao com o bot.
//
// O que ESTE arquivo NAO faz: enganchar os natives/callbacks para detectar
// cheats. Isso exige a sampgdk + a cola ee_detections.cpp (veja BUILD.md). Este
// alvo serve para empacotar e validar o build .dll/.so do nucleo.
#include "../sdk/plugincommon.h"

#include <atomic>
#include <chrono>
#include <cstdio>
#include <ctime>
#include <mutex>
#include <random>
#include <string>
#include <thread>

#include "ee_crypto.h"
#include "ee_http.h"
#include "ee_license.h"
#include "ee_store.h"
#include "ee_secrets.h"

namespace {

typedef void (*logprintf_t)(const char* fmt, ...);
logprintf_t logprintf = nullptr;

std::string g_apiHost, g_apiPath, g_apiKey, g_pepper, g_sign, g_storeHmac, g_licenseKey;
uint32_t g_storeKey[4] = { 0, 0, 0, 0 };
ee::Identity g_identity;

std::atomic<bool> g_run{ false };
std::atomic<bool> g_enabled{ false };
std::thread g_worker;
std::mutex g_mtx;
ee::Grant g_grant;

const char* STORE_FILE = "scriptfiles/eagleeye_servidor.bin";
const char* LICENSE_FILE = "scriptfiles/eagleeye_licenca.txt";

// Gera um token "EE-XXXXXX-XXXX-XXXX-XXXX-XXXX" (22 chars A-Z0-9 apos "EE").
std::string genToken() {
    static const char* AL = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    std::random_device rd;
    std::mt19937 rng(rd() ^ (unsigned)time(nullptr));
    std::uniform_int_distribution<int> d(0, 35);
    std::string body;
    for (int i = 0; i < 22; i++) body += AL[d(rng)];
    std::string t = "EE-";
    t += body.substr(0, 6); t += '-';
    t += body.substr(6, 4); t += '-';
    t += body.substr(10, 4); t += '-';
    t += body.substr(14, 4); t += '-';
    t += body.substr(18, 4);
    return t;
}

std::string loadLicenseKey() {
    FILE* f = std::fopen(LICENSE_FILE, "rb");
    if (!f) return "";
    char buf[64] = { 0 };
    size_t n = std::fread(buf, 1, sizeof(buf) - 1, f);
    std::fclose(f);
    std::string s(buf, n);
    while (!s.empty() && (s.back() == '\n' || s.back() == '\r' || s.back() == ' ')) s.pop_back();
    return s;
}

std::string makeNonce() {
    static const char* hx = "0123456789abcdef";
    std::random_device rd; std::mt19937 rng(rd());
    std::uniform_int_distribution<int> d(0, 15);
    std::string s; for (int i = 0; i < 16; i++) s += hx[d(rng)];
    return s;
}

void checkLicense() {
    std::string nonce = makeNonce();
    std::string path = g_apiPath + "/plugin/license?key=" + g_licenseKey +
                       "&id=" + g_identity.serverId + "&nonce=" + nonce + "&k=" + g_apiKey;
    ee::HttpResult r = ee::httpGet(g_apiHost, path);
    if (r.status != 200) return;
    ee::Grant g = ee::verifyBotResponse(r.body, g_licenseKey, g_identity.serverId, g_sign, nonce);
    if (g.state != ee::LicenseState::Unknown) {
        g.checkedAt = (int64_t)time(nullptr);
        std::lock_guard<std::mutex> lk(g_mtx);
        g_grant = g;
    }
}

void fetchConfig() {
    std::string path = g_apiPath + "/ac/config?id=" + g_identity.serverId +
                       "&token=" + g_identity.token + "&ver=plugin-win&rcw=0&k=" + g_apiKey;
    ee::httpGet(g_apiHost, path);  // a aplicacao da config vem com ee_detections.cpp
}

void workerLoop() {
    int tick = 0;
    while (g_run.load()) {
        checkLicense();
        bool allowed;
        { std::lock_guard<std::mutex> lk(g_mtx); allowed = ee::grantAllows(g_grant, (int64_t)time(nullptr)); }
        g_enabled.store(allowed);
        if (allowed && (tick % 10) == 0) fetchConfig();
        tick++;
        for (int i = 0; i < 100 && g_run.load(); i++)
            std::this_thread::sleep_for(std::chrono::milliseconds(100));
    }
}

} // namespace

PLUGIN_EXPORT unsigned int PLUGIN_CALL Supports() {
    return SUPPORTS_VERSION;
}

PLUGIN_EXPORT bool PLUGIN_CALL Load(void** ppData) {
    logprintf = (logprintf_t)ppData[PLUGIN_DATA_LOGPRINTF];

    g_apiHost   = ee::secrets::apiHost();
    g_apiPath   = ee::secrets::apiPath();
    g_apiKey    = ee::secrets::apiKey();
    g_pepper    = ee::secrets::pepper();
    g_sign      = ee::secrets::signSecret();
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

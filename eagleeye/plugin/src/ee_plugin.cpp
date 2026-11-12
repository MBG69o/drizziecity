// EagleEYE - entrada do plugin SA-MP / open.mp.
//
// Depende do SDK de plugin do SA-MP (amx/, plugincommon.h) e da sampgdk,
// que voce adiciona ao compilar (veja BUILD.md). Este arquivo NAO compila
// sozinho sem o SDK; os modulos de seguranca (ee_crypto/ee_store/ee_license/
// ee_http) sao autossuficientes e ja vem testados.
//
// Fluxo:
//   Load       -> inicia sockets, carrega/gera o token, sobe a thread de rede
//   thread     -> valida a licenca com o bot (revogacao em tempo real),
//                 busca a configuracao e envia as deteccoes
//   AmxLoad    -> registra os natives que o include "casca" chama
//   ProcessTick-> troca dados com a thread (nunca faz rede aqui)
//
// A LOGICA DE DETECCAO fica neste binario (em ee_detections.*), compilada,
// fora do alcance do cliente. O include distribuido e so uma casca sem regras.

#include <atomic>
#include <chrono>
#include <cstdio>
#include <ctime>
#include <mutex>
#include <string>
#include <thread>
#include <vector>

#include "ee_crypto.h"
#include "ee_http.h"
#include "ee_license.h"
#include "ee_store.h"
#include "ee_secrets.h"

#ifdef EE_HAVE_SDK
  #include "sdk/amx/amx.h"
  #include "sdk/plugincommon.h"
  #include "sampgdk.h"
#endif

namespace {

std::string g_apiHost;
std::string g_apiPath;   // caminho secreto (AC_PATH_SECRET), ex.: "/x7f3k9q2"
std::string g_apiKey;    // chave de aplicacao (AC_APP_KEY), enviada em &k=
std::string g_licenseKey;      // vem do config do servidor (ver loadLicenseKey)
ee::Identity g_identity;
ee::Grant g_grant;
std::atomic<bool> g_run{false};
std::atomic<bool> g_enabled{false};   // licenca ok E anti-cheat ligado
std::thread g_worker;
std::mutex g_mtx;

uint32_t g_storeKey[4];
std::string g_storeHmac, g_pepper, g_sign;

// Le a chave de licenca de scriptfiles/eagleeye_licenca.txt (o cliente cola
// a chave que voce vendeu). So a chave; sem ela o plugin fica em modo inativo.
std::string loadLicenseKey() {
    FILE* f = fopen("scriptfiles/eagleeye_licenca.txt", "rb");
    if (!f) return "";
    char buf[64] = {0};
    size_t n = fread(buf, 1, sizeof buf - 1, f);
    fclose(f);
    std::string s(buf, n);
    std::string out;
    for (char c : s) if (c != '\n' && c != '\r' && c != ' ' && c != '\t') out += c;
    return out;
}

std::string makeNonce() {
    static const char* hx = "0123456789abcdef";
    std::string s;
    for (int i = 0; i < 16; i++) s += hx[(int)(ee::deobf((const uint8_t*)&i, 1, (uint8_t)(time(nullptr) + i))[0]) & 15];
    return s;
}

// --- comunicacao com o bot -------------------------------------------------
void checkLicense() {
    std::string nonce = makeNonce();
    std::string path = g_apiPath + "/plugin/license?key=" + g_licenseKey + "&id=" + g_identity.serverId + "&nonce=" + nonce + "&k=" + g_apiKey;
    ee::HttpResult r = ee::httpGet(g_apiHost, path);
    if (r.status != 200) return;  // sem resposta: mantem o grant anterior ate a graca vencer
    ee::Grant g = ee::verifyBotResponse(r.body, g_licenseKey, g_identity.serverId, g_sign, nonce);
    if (g.state != ee::LicenseState::Unknown) {
        g.checkedAt = (int64_t)time(nullptr);
        std::lock_guard<std::mutex> lk(g_mtx);
        g_grant = g;
    }
}

void fetchConfig() {
    // monta /ac/config?id=&token=&... igual ao include; aplica a configuracao.
    // (parsing identico ao do include v2.2.0 - ver ee_detections.cpp)
    std::string path = g_apiPath + "/ac/config?id=" + g_identity.serverId + "&token=" + g_identity.token
        + "&ver=plugin-2.5.0&rcw=0&k=" + g_apiKey;
    ee::HttpResult r = ee::httpGet(g_apiHost, path);
    if (r.status == 200) {
        // ee::detections::applyConfig(r.body);  // definido em ee_detections.cpp
    }
}

void workerLoop() {
    int tick = 0;
    while (g_run.load()) {
        checkLicense();
        bool allowed;
        {
            std::lock_guard<std::mutex> lk(g_mtx);
            allowed = ee::grantAllows(g_grant, (int64_t)time(nullptr));
        }
        g_enabled.store(allowed);
        if (allowed && (tick % 10) == 0) fetchConfig();
        tick++;
        for (int i = 0; i < 100 && g_run.load(); i++)
            std::this_thread::sleep_for(std::chrono::milliseconds(100));  // ~10s
    }
}

} // anon

// ===========================================================================
//  Pontos de entrada do SDK (ativos so quando compilado com EE_HAVE_SDK)
// ===========================================================================
#ifdef EE_HAVE_SDK

extern void* pAMXFunctions;
typedef void (*logprintf_t)(const char* fmt, ...);
logprintf_t logprintf;

PLUGIN_EXPORT unsigned int PLUGIN_CALL Supports() {
    return SUPPORTS_VERSION | SUPPORTS_AMX_NATIVES | SUPPORTS_PROCESS_TICK;
}

PLUGIN_EXPORT bool PLUGIN_CALL Load(void** ppData) {
    pAMXFunctions = ppData[PLUGIN_DATA_AMX_EXPORTS];
    logprintf = (logprintf_t)ppData[PLUGIN_DATA_LOGPRINTF];
    sampgdk_init(ppData);

    g_apiHost = ee::secrets::apiHost();
    g_apiPath = ee::secrets::apiPath();
    g_apiKey = ee::secrets::apiKey();
    g_pepper = ee::secrets::pepper();
    g_sign = ee::secrets::signSecret();
    g_storeHmac = ee::secrets::storeHmac();
    ee::secrets::storeKey(g_storeKey);
    ee::httpInit();

    g_licenseKey = loadLicenseKey();
    if (g_licenseKey.empty()) {
        logprintf("[EagleEYE] ERRO: scriptfiles/eagleeye_licenca.txt nao encontrado. Cole a sua chave de licenca.");
    } else if (!ee::licenseFormatOk(g_licenseKey, g_pepper)) {
        logprintf("[EagleEYE] ERRO: a chave de licenca e invalida.");
        g_licenseKey.clear();
    }

    ee::Store store(g_storeKey, g_storeHmac);
    g_identity = store.load("scriptfiles/eagleeye_servidor.bin");
    if (!g_identity.valid) {
        // primeira vez: gera o token (mesmo formato do include) e salva cifrado
        // g_identity = ee::detections::generateIdentity();
        // store.save("scriptfiles/eagleeye_servidor.bin", g_identity);
        logprintf("[EagleEYE] Primeira inicializacao: token de acesso gerado.");
    }
    logprintf("[EagleEYE] Plugin v2.2.0 carregado. Servidor %s", g_identity.serverId.c_str());
    logprintf("[EagleEYE] No Discord use: /ac login token:%s", g_identity.token.c_str());

    g_run.store(true);
    g_worker = std::thread(workerLoop);
    return true;
}

PLUGIN_EXPORT void PLUGIN_CALL Unload() {
    g_run.store(false);
    if (g_worker.joinable()) g_worker.join();
    ee::httpShutdown();
    sampgdk_fini();
}

PLUGIN_EXPORT void PLUGIN_CALL ProcessTick() {
    sampgdk_process_tick();
    // ee::detections::tick(g_enabled.load());  // verificacoes periodicas
}

PLUGIN_EXPORT int PLUGIN_CALL AmxLoad(AMX* amx) {
    // ee::detections::registerNatives(amx);   // natives que a casca chama
    return AMX_ERR_NONE;
}

PLUGIN_EXPORT int PLUGIN_CALL AmxUnload(AMX* amx) {
    (void)amx;
    return AMX_ERR_NONE;
}

#endif // EE_HAVE_SDK

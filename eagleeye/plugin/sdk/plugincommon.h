// Cabecalho minimo do SDK de plugin do SA-MP (compativel com o oficial).
// So o necessario para o entry-point do EagleEYE. Para usar os natives/callbacks
// (deteccao via sampgdk), use o SDK completo do SA-MP (veja BUILD.md).
#ifndef SAMP_PLUGIN_COMMON_H
#define SAMP_PLUGIN_COMMON_H

#define SAMP_PLUGIN_VERSION 0x0200

enum SUPPORTS_FLAGS {
    SUPPORTS_VERSION      = SAMP_PLUGIN_VERSION,
    SUPPORTS_VERSION_MASK = 0xffff,
    SUPPORTS_AMX_NATIVES  = 0x10000,
    SUPPORTS_PROCESS_TICK = 0x20000,
};

enum PLUGIN_DATA_TYPE {
    PLUGIN_DATA_LOGPRINTF     = 0x00,
    PLUGIN_DATA_AMX_EXPORTS   = 0x10,
    PLUGIN_DATA_CALLPUBLIC_FS = 0x11,
    PLUGIN_DATA_CALLPUBLIC_GM = 0x12,
};

#if defined __cplusplus
    #define PLUGIN_EXTERN_C extern "C"
#else
    #define PLUGIN_EXTERN_C
#endif

#if defined _WIN32 || defined WIN32 || defined __WIN32__
    // SA-MP (servidor compilado com MSVC) chama os pontos de entrada em __stdcall.
    // Com mingw use -Wl,--kill-at para exportar os nomes sem a decoracao @N.
    #define PLUGIN_CALL   __stdcall
    #define PLUGIN_EXPORT PLUGIN_EXTERN_C __declspec(dllexport)
#else
    #define PLUGIN_CALL
    #define PLUGIN_EXPORT PLUGIN_EXTERN_C
#endif

#endif // SAMP_PLUGIN_COMMON_H

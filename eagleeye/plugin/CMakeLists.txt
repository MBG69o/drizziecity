cmake_minimum_required(VERSION 3.10)
project(eagleeye CXX)

# Plugins SA-MP/open.mp sao 32-bit. Veja tambem build.sh (mingw p/ Windows).
set(CMAKE_CXX_STANDARD 14)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_POSITION_INDEPENDENT_CODE ON)

# Plugin COMPLETO: ponte (natives) + nucleo + Detector + SDK (amxplugin).
# Quem fala com o jogo e a include; o plugin so expoe natives (sem sampgdk).
set(EE_SOURCES
    src/ee_bridge.cpp        # ponte: estado + worker de rede + natives + ciclo de vida
    src/ee_crypto.cpp
    src/ee_store.cpp
    src/ee_license.cpp
    src/ee_http.cpp
    src/ee_detect.cpp        # motor: parse da config do bot + tolerancia
    sdk/amxplugin.cpp        # cola do SDK: amx_Register/amx_GetString/... via pAMXFunctions
)

add_library(eagleeye SHARED ${EE_SOURCES})
set_target_properties(eagleeye PROPERTIES PREFIX "" OUTPUT_NAME "eagleeye")

target_include_directories(eagleeye PRIVATE
    ${CMAKE_SOURCE_DIR}/src
    ${CMAKE_SOURCE_DIR}/sdk
    ${CMAKE_SOURCE_DIR}/sdk/amx
)

# 32-bit
target_compile_options(eagleeye PRIVATE -m32)
target_link_options(eagleeye PRIVATE -m32)

if(WIN32)
    target_compile_definitions(eagleeye PRIVATE HAVE_STDINT_H)
    target_link_libraries(eagleeye PRIVATE ws2_32)
    # exporta Supports/Load/Unload/AmxLoad sem a decoracao @N do __stdcall
    target_link_options(eagleeye PRIVATE -Wl,--kill-at)
else()
    target_compile_definitions(eagleeye PRIVATE LINUX)
    target_link_libraries(eagleeye PRIVATE pthread)
endif()

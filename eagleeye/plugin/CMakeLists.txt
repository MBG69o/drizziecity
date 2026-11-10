cmake_minimum_required(VERSION 3.10)
project(eagleeye CXX)

# Plugins SA-MP/open.mp sao 32-bit.
set(CMAKE_CXX_STANDARD 14)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_POSITION_INDEPENDENT_CODE ON)

option(EE_HAVE_SDK "Compilar com o SDK de plugin do SA-MP + sampgdk" ON)

set(EE_SOURCES
    src/ee_crypto.cpp
    src/ee_store.cpp
    src/ee_license.cpp
    src/ee_http.cpp
    src/ee_detect.cpp        # motor: config + tolerancia + relatorios
    src/ee_cat_player.cpp    # categoria JOGADOR
    src/ee_cat_weapons.cpp   # categoria ARMAS E COMBATE
    src/ee_cat_movement.cpp  # categoria MOVIMENTO (+ vel. veiculo, crasher pos.)
    src/ee_cat_vehicles.cpp  # categoria VEICULOS
    src/ee_cat_network.cpp   # categoria REDE, CHAT E SERVIDOR
    src/ee_plugin.cpp
    # src/ee_detections.cpp   # cola sampgdk (hooks de natives + callbacks)
)

add_library(eagleeye SHARED ${EE_SOURCES})
set_target_properties(eagleeye PROPERTIES PREFIX "" OUTPUT_NAME "eagleeye")

# 32-bit
target_compile_options(eagleeye PRIVATE -m32)
target_link_options(eagleeye PRIVATE -m32)

if(EE_HAVE_SDK)
    target_compile_definitions(eagleeye PRIVATE EE_HAVE_SDK)
    # ajuste os caminhos do SDK e da sampgdk:
    target_include_directories(eagleeye PRIVATE
        ${CMAKE_SOURCE_DIR}/sdk          # amx/ e plugincommon.h
        ${CMAKE_SOURCE_DIR}/sampgdk      # sampgdk.h
    )
    # a amalgamation da sampgdk entra como fonte:
    # target_sources(eagleeye PRIVATE ${CMAKE_SOURCE_DIR}/sampgdk/sampgdk.c)
endif()

if(WIN32)
    target_link_libraries(eagleeye PRIVATE ws2_32)
else()
    target_link_libraries(eagleeye PRIVATE pthread)
endif()

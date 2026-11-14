/*
 *  EagleEYE - MODO PLUGIN.
 *  ---------------------------------------------------------------------------
 *  Use este include quando o servidor roda com o PLUGIN (eagleeye.dll/.so).
 *  Nesse modo a include NAO fala com a API: ela so LE do plugin (natives). O
 *  plugin (binario) guarda o host/caminho/chave da API e o TOKEN ocultos e faz
 *  toda a rede com o bot. A deteccao continua na include (le o estado do jogo),
 *  mas a conexao e os segredos vivem apenas dentro do plugin compilado.
 *
 *  No gamemode:
 *      #include <open.mp>            // ou <a_samp>
 *      #include <eagleeye_plugin>    // em vez de <eagleeye>
 *
 *  E instale:
 *      - plugins/eagleeye.dll (Windows) ou plugins/eagleeye.so (Linux)
 *        no server.cfg:  plugins eagleeye      (open.mp: legacy_plugins eagleeye)
 *      - scriptfiles/eagleeye_licenca.txt   com a chave que voce vendeu
 *
 *  O eagleeye.inc (pasta pawn/include) precisa estar no seu include path.
 */
#if !defined EE_USE_PLUGIN
    #define EE_USE_PLUGIN
#endif
#include <eagleeye>

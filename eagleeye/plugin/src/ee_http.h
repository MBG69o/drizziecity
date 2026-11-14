// EagleEYE plugin - cliente HTTP simples (sem TLS, como o HTTP() do SA-MP).
// Bloqueante: deve ser chamado numa thread de trabalho, nunca no ProcessTick.
#ifndef EE_HTTP_H
#define EE_HTTP_H

#include <string>

namespace ee {

struct HttpResult {
    int status = 0;        // 0 = falha de conexao
    std::string body;
};

// host pode ser "dominio" ou "dominio:porta" (padrao 80). Nunca https://.
HttpResult httpGet(const std::string& hostPort, const std::string& path, int timeoutMs = 8000);
HttpResult httpPost(const std::string& hostPort, const std::string& path,
                    const std::string& body, const std::string& contentType, int timeoutMs = 8000);

// Inicializa a pilha de sockets (Winsock no Windows). Chame uma vez no Load.
void httpInit();
void httpShutdown();

} // namespace ee

#endif // EE_HTTP_H

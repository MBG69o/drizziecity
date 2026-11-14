#include "ee_http.h"
#include <cstring>
#include <cstdio>
#include <cstdlib>

#ifdef _WIN32
  #include <winsock2.h>
  #include <ws2tcpip.h>
  typedef SOCKET sock_t;
  #define EE_INVALID INVALID_SOCKET
  #define EE_CLOSE closesocket
#else
  #include <sys/socket.h>
  #include <sys/types.h>
  #include <netdb.h>
  #include <unistd.h>
  #include <netinet/in.h>
  #include <netinet/tcp.h>
  #include <fcntl.h>
  #include <errno.h>
  typedef int sock_t;
  #define EE_INVALID (-1)
  #define EE_CLOSE ::close
#endif

namespace ee {

void httpInit() {
#ifdef _WIN32
    WSADATA wsa; WSAStartup(MAKEWORD(2, 2), &wsa);
#endif
}
void httpShutdown() {
#ifdef _WIN32
    WSACleanup();
#endif
}

static void splitHostPort(const std::string& hp, std::string& host, std::string& port) {
    std::string s = hp;
    // remove esquema se alguem passou http://
    size_t sch = s.find("://");
    if (sch != std::string::npos) s = s.substr(sch + 3);
    size_t slash = s.find('/');
    if (slash != std::string::npos) s = s.substr(0, slash);
    size_t colon = s.find(':');
    if (colon != std::string::npos) { host = s.substr(0, colon); port = s.substr(colon + 1); }
    else { host = s; port = "80"; }
}

static bool connectTimeout(sock_t fd, struct addrinfo* ai, int timeoutMs) {
#ifdef _WIN32
    u_long nb = 1; ioctlsocket(fd, FIONBIO, &nb);
#else
    int fl = fcntl(fd, F_GETFL, 0); fcntl(fd, F_SETFL, fl | O_NONBLOCK);
#endif
    int r = connect(fd, ai->ai_addr, (int)ai->ai_addrlen);
    if (r == 0) return true;
    fd_set wset; FD_ZERO(&wset); FD_SET(fd, &wset);
    struct timeval tv; tv.tv_sec = timeoutMs / 1000; tv.tv_usec = (timeoutMs % 1000) * 1000;
    if (select((int)fd + 1, nullptr, &wset, nullptr, &tv) <= 0) return false;
    int err = 0; socklen_t len = sizeof err;
    getsockopt(fd, SOL_SOCKET, SO_ERROR, (char*)&err, &len);
    return err == 0;
}

static HttpResult request(const std::string& hostPort, const std::string& method,
                          const std::string& path, const std::string& body,
                          const std::string& contentType, int timeoutMs) {
    HttpResult res;
    std::string host, port;
    splitHostPort(hostPort, host, port);

    struct addrinfo hints; memset(&hints, 0, sizeof hints);
    hints.ai_family = AF_INET; hints.ai_socktype = SOCK_STREAM;
    struct addrinfo* ai = nullptr;
    if (getaddrinfo(host.c_str(), port.c_str(), &hints, &ai) != 0 || !ai) return res;

    sock_t fd = socket(ai->ai_family, ai->ai_socktype, ai->ai_protocol);
    if (fd == EE_INVALID) { freeaddrinfo(ai); return res; }

    if (!connectTimeout(fd, ai, timeoutMs)) { EE_CLOSE(fd); freeaddrinfo(ai); return res; }
    freeaddrinfo(ai);

#ifndef _WIN32
    int one = 1; setsockopt(fd, IPPROTO_TCP, TCP_NODELAY, &one, sizeof one);
#endif

    char head[1024];
    int n = snprintf(head, sizeof head,
        "%s %s HTTP/1.1\r\nHost: %s\r\nUser-Agent: EagleEYE\r\nConnection: close\r\n",
        method.c_str(), path.c_str(), host.c_str());
    std::string req(head, n);
    if (method == "POST") {
        req += "Content-Type: " + contentType + "\r\n";
        req += "Content-Length: " + std::to_string(body.size()) + "\r\n";
    }
    req += "\r\n";
    if (method == "POST") req += body;

    size_t sent = 0;
    while (sent < req.size()) {
        int w = (int)send(fd, req.data() + sent, (int)(req.size() - sent), 0);
        if (w <= 0) { EE_CLOSE(fd); return res; }
        sent += w;
    }

    std::string raw;
    char buf[2048];
    for (;;) {
        fd_set rset; FD_ZERO(&rset); FD_SET(fd, &rset);
        struct timeval tv; tv.tv_sec = timeoutMs / 1000; tv.tv_usec = (timeoutMs % 1000) * 1000;
        if (select((int)fd + 1, &rset, nullptr, nullptr, &tv) <= 0) break;
        int r = (int)recv(fd, buf, sizeof buf, 0);
        if (r <= 0) break;
        raw.append(buf, r);
        if (raw.size() > 65536) break;
    }
    EE_CLOSE(fd);

    // parse "HTTP/1.1 200 OK" + corpo apos a linha em branco
    if (raw.compare(0, 5, "HTTP/") == 0) {
        size_t sp = raw.find(' ');
        if (sp != std::string::npos) res.status = atoi(raw.c_str() + sp + 1);
    }
    size_t hdrEnd = raw.find("\r\n\r\n");
    if (hdrEnd != std::string::npos) res.body = raw.substr(hdrEnd + 4);
    return res;
}

HttpResult httpGet(const std::string& hostPort, const std::string& path, int timeoutMs) {
    return request(hostPort, "GET", path, "", "", timeoutMs);
}
HttpResult httpPost(const std::string& hostPort, const std::string& path,
                    const std::string& body, const std::string& contentType, int timeoutMs) {
    return request(hostPort, "POST", path, body, contentType, timeoutMs);
}

} // namespace ee

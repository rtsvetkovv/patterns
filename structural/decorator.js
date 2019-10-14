class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${this.ip}:${this.port}`;
  }
}

function aws(server) {
  server.isAWS = true;
  server.awsInfo = function() {
    return server.url;
  };

  return server;
}

function azure(server) {
  server.isAzure = true;
  server.port += 500;
  return server;
}

const firstServer = aws(new Server('73.91.83.61', 3000));
console.log(firstServer.awsInfo());

const secondServer = azure(new Server('89.38.12.34', 8080));
console.log(secondServer);

const http = require("http");

function onRequest(request, response) {
  const data = {
    name: "Faris Fahmi",
    age: 24,
  };

  response.writeHead(200, { "Content-Type": "application/json" });
  response.write(JSON.stringify(data));

  response.end();
}

http.createServer(onRequest).listen(8000);

const http = require("http");
const fs = require("fs");

function onRequest(request, response) {
  console.log(request);
  function callback(error, data) {
    if (error) {
      response.writeHead(404);
      response.write("file not found");
    } else {
      response.writeHead(200);
      response.write(data);
    }

    response.end();
  }

  fs.readFile("./index.html", null, callback);
}

http.createServer(onRequest).listen(8000);

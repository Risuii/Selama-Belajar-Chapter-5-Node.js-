const express = require("express");
const app = express();

const port = 3000;

function helloWorld(req, res) {
  return res.send("Hello World");
}

function onRun() {
  console.log("Server is running on http://localhost:${port}");
}

app.get("/", helloWorld);

app.listen(port, onRun);

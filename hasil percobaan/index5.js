const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.status(200).send("Hello World");
});

app.get("/users", function (req, res) {
  const dataUser = [{ nama: "Faris", umur: 24 }];

  res.status(200).send(dataUser);
});

app.listen(3000);

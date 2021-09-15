const express = require("express");
const app = express();

const port = 3000;

const user = [];

// middleWare

app.use(express.static("statics"));
app.use(express.json());

// handler

function getUser(req, res) {
  res.json({
    user,
  });
}

function getRegister(req, res) {
  user.push({
    name: req.body.name,
    password: req.body.password,
  });
}

function postRegistration(req, res) {
  user.push({
    name: req.body.name,
    password: req.body.password,
  });

  res.status(200).json("status: success");
}

// route

app.post("/registration", postRegistration);
app.get("/users", getUser);
app.listen(port);

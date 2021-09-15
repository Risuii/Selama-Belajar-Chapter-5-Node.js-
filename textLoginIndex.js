const express = require("express");
const app = express();
const users = [];

// app.use(express.static("assets"));

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/greet", (req, res) => {
  const name = req.query.name || "Void";
  res.render("greet", {
    name,
  });
});

app.get("/register", (req, res) => {
  res.render("register");
});

// function homePage(req, res) {
//   return res.render("index.ejs");
// }

// function gamesPage(req, res) {
//   return res.render("games.ejs");
// }

function getUser(req, res) {
  res.json({
    users,
  });
}

function getRegister(req, res) {
  users.push({
    email: req.body.email,
    password: req.body.password,
  });
}

function postRegister(req, res) {
  users.push({
    email: req.body.email,
    password: req.body.password,
  });

  res.redirect("/");
}

app.get("/user", getUser);

app.post("/register", postRegister);

app.listen(3000);

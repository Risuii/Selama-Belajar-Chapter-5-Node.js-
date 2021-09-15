const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

app.use(express.static("assets"));

function homePage(req, res) {
  return res.render("index.ejs");
}

function gamesPage(req, res) {
  return res.render("games.ejs");
}

app.get("/games", gamesPage);
app.get("/", homePage);

app.listen(port);

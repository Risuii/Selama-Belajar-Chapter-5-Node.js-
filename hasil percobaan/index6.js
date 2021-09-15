const express = require("express");
const app = express();

app.use(express.static("public"));
// app.get("/", function (req, res) {
//   res.send("./index2.html", "utf-8");
// });

app.listen(3000);

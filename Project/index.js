const express = require("express");
const app = express();
let posts = require("./db/posts.json");

// middleware

app.use(express.json());

// handler atau route

app.get("/api/v1/posts", (req, res) => {
  res.status(200).json(posts);
});

app.get("/api/v1/posts/:id", (req, res) => {
  const post = posts.find((item) => {
    return item.id == req.params.id;
  });
  res.status(200).json(post);
});

app.post("/api/v1/posts", (req, res) => {
  const title = req.body.title;
  const body = req.body.body;

  const lastItem = posts[posts.length - 1];
  const id = lastItem.id + 1;

  const post = {
    id: id,
    title: title,
    body: body,
  };

  posts.push(post);

  res.status(201).json(post);
});

app.put("/api/v1/posts/:id", (req, res) => {
  const index = posts.findIndex((item) => {
    return item.id == req.params.id;
  });

  posts[index].title = req.body.title;
  posts[index].body = req.body.body;

  res.status(201).json(posts[index]);
});

app.delete("/api/v1/posts/:id", (req, res) => {
  posts = posts.filter((item) => {
    return item.id != req.params.id;
  });

  res.status(200).json({
    message: `Post dengan id ${req.params.id} sudah berhasil dihapus!`,
  });
});

// port

app.listen(3000, () => {
  console.log("Server nyala di port 3000!");
});

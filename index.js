const express = require("express");

const app = express();

app.get("/mean", (req, res, next) => {
  return res.send("mean");
});

app.get("/median", (req, res, next) => {
  return res.send("median");
});

app.get("/mode", (req, res, next) => {
  return res.send("mode");
});

app.listen(3000, () => {
  console.log("app started at port:3000");
});

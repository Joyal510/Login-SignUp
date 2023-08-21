const express = require("express");
const mongoose = require("mongoose");
const collection = require("./mongodb");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.post("/login", async (req, res) => {
  try {
    const info = await collection.findOne({ username: req.body.username });
    if (info.password === req.body.password) {
      res.render("home");
    } else {
      res.send("wrong password");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/signup", async (req, res) => {
  try {
    const data = await collection.create(req.body);
    res.render("login");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3030);

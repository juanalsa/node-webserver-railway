require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.APP_PORT;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home", {
    titulo: "Home",
  });
});

app.get("/generic", function (req, res) {
  res.render("generic", {
    titulo: "Generic",
  });
});

app.get("/elements", function (req, res) {
  res.render("elements", {
    titulo: "Elements",
  });
});

app.get("/test", function (req, res) {
  res.send("Testing...");
});

app.get("*", function (req, res) {
  res.render("404", {
    titulo: "404 | Page not found",
  });
});

app.listen(port, () => {
  console.log(`Aplicación corriendo en http://localhost:${port}`);
});

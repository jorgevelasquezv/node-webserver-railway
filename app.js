require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Midleware servir contenido estatico
app.use(express.static("public"));

app.get("/hola-mundo", (req, res) => {
  res.send("Hello World!");
});

app.get("/", (req, res) => {
  res.render("home", { name: "Jorge Velásquez", title: "Curso Node" });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/generic", (req, res) => {
  res.render("generic", { name: "Jorge Velásquez", title: "Curso Node" });
});

app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
  res.render("elements", { name: "Jorge Velásquez", title: "Curso Node" });
});

app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

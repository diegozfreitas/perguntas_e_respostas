const express = require("express");
const app = express();

//estou dizendo para o express usar o 'ejs' como renderizador de html
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index/index", {});
});

app.get("/ask", (req, res) => {
  res.render("ask/ask", {});
});

app.post("/save-ask", (req, res) => {
  res.send("form recebido");
});

app.listen(8000, () => {
  console.log("App rodando!");
});

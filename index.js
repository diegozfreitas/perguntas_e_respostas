const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

connection
  .authenticate()
  .then(() => {
    console.log("Conectado no banco mysql");
  })
  .catch(() => {
    console.log("Deu ruim na conexão");
  });

//Estou dizendo para o express usar o 'ejs' como renderizador de html
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get("/", (req, res) => {
  res.render("index/index", {});
});

app.get("/ask", (req, res) => {
  res.render("ask/ask", {});
});

app.post("/save-ask", (req, res) => {
  var title = req.body.title;
  var description = req.body.description;

  res.send(title + description);
});

app.listen(8000, () => {
  console.log("App rodando!");
});

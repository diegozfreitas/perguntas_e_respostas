const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const TableQuestions = require("./database/ModelQuestions");

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
  TableQuestions.findAll({ raw: true, order: [["id", "DESC"]] }).then(
    (perguntas) => {
      res.render("index/index", { perguntas: perguntas });
    }
  );
});

app.get("/ask", (req, res) => {
  res.render("ask/ask", {});
});

app.post("/save-ask", (req, res) => {
  var title = req.body.title;
  var description = req.body.description;

  TableQuestions.create({
    title: title,
    description: description,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch(() => {
      console.log("deu erro ao salvar pergunta");
    });
});

app.listen(8000, () => {
  console.log("App rodando!");
});

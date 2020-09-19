const Sequelize = require("sequelize");
const connection = require("./database");

const ModelQuestions = connection.define("questions", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

ModelQuestions.sync({ force: false })
  .then(() => {
    console.log("tabela questions criada");
  })
  .catch(() => {
    console.log("erro na criação da tabela questions");
  });

module.exports = ModelQuestions;

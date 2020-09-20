const { STRING } = require("sequelize");
const Sequelize = require("sequelize");
const connection = require("./database");

const ModelAnswers = connection.define("answers", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  response: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  questionId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

ModelAnswers.sync({ force: false })
  .then(() => {
    console.log("tabela answers criada");
  })
  .catch(() => {
    console.log("erro na criação da tabela answers");
  });

module.exports = ModelAnswers;

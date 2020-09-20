const Sequelize = require("sequelize");

const connection = new Sequelize(
  "questions_answers",
  "diegozf",
  "Ln,}l49xW_Q",
  {
    host: "mysql669.umbler.com",
    dialect: "mysql",
  }
);

module.exports = connection;

const Sequelize = require("sequelize");

const connection = new Sequelize(
  "questions_answers",
  "diegozf",
  "g2-rHt*6f?V9",
  {
    host: "mysql669.umbler.com",
    dialect: "mysql",
  }
);

module.exports = connection;

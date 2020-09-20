const Sequelize = require("sequelize");

const connection = new Sequelize(
  "questions_answer",
  "diegozf",
  "?E8[H2UalZ+mV",
  //"root",
  //"",
  {
    host: "mysql669.umbler.com",
    //host: "localhost",
    dialect: "mysql",
  }
);

module.exports = connection;

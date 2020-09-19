const Sequelize = require("sequelize");

const connection = new Sequelize("questions_answers", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;

const Sequelize = require("sequelize");

const connection = new Sequelize("questions_answers", "diegozf", "5NgN3fD_[l", {
  host: "mysql669.umbler.com",
  dialect: "mysql",
});

module.exports = connection;

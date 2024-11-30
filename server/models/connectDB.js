const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("react1124", "root", "phi171102", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = sequelize;

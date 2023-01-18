const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('postgres', 'postgres', 'pk@prathamesh',{
    host: "localhost",
    dialect: "postgres",
    schema: "University"
});

module.exports = sequelize;


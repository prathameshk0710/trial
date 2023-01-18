const Sequelize = require("sequelize");
const sequelize = require("./database");

const Department = sequelize.define("department", {
    Did: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    Dname: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Department;


const Sequelize = require("sequelize");
const sequelize = require("./database.js");

const Employee = sequelize.define("employee", {
    Eid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    Ename: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Eemail: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Employee;
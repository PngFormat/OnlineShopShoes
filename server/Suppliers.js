const Sequelize = require('sequelize');
const sequelize = require('./database');

const Suppliers = sequelize.define('suppliers', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

module.exports = Suppliers;
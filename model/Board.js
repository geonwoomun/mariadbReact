const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
    'board',
    {
        boardNo : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        boardTitle: {
            type: Sequelize.STRING,
        },
        boardContent : {
            type: Sequelize.STRING,
        },
        boardWriter : {
            type: Sequelize.STRING,   
        },
        boardDate: {
            type : Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
)
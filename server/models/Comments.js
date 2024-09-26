const { Sequelize, DataTypes } = require('sequelize');


const {sequelize, Posts} = require('./Posts')


const Comments = sequelize.define('Comment', {
  commentBody: {
    type: DataTypes.STRING,
    allowNull: false
  }
});


module.exports = {Comments};
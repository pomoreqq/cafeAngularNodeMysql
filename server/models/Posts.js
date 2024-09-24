const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('tutorialNodeReact', 'pomoreq', 'Hania135!', {
  host: 'localhost',
  dialect: 'mysql'
});

const Posts = sequelize.define('Posts', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  postText: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  }
});


module.exports = { sequelize, Posts };
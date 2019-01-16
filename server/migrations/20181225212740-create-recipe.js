/* eslint-disable indent */
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ingredient: {
        type: Sequelize.STRING,
        allowNull : false
      },
      about: {
        type: Sequelize.STRING,
        allowNull : false
      },
      imageurl : {
        type : Sequelize.STRING,
        allowNull : false,
        validate : {
          isUrl : true
        }
      },
      upvote : {
        type : Sequelize.INTEGER,
        defaultValue : 0
      },
      downvote : {
        type : Sequelize.INTEGER,
        defaultValue: 0
      },
      views : {
        type : Sequelize.INTEGER,
        defaultValue : 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Recipes');
  }
};
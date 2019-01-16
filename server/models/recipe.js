/* eslint-disable indent */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    ingredient: {
      type: DataTypes.STRING,
      allowNull: false
    },
    about: {
      type: DataTypes.STRING,
      allowNull : false
    },
    imageurl : {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        isUrl : true
      }
    },
    upvote : {
      type : DataTypes.INTEGER,
      defaultValue : 0
    },
    downvote : {
      type : DataTypes.INTEGER,
      defaultValue: 0
    },
    views : {
      type : DataTypes.INTEGER,
      defaultValue : 0
    },
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
    Recipe.belongsTo(models.Users,{
      foreignkey : 'recipeid'
    });
    Recipe.hasMany(models.Reviews,{
      foreignkey : 'reviewid'
    });
  };
  return Recipe;
};
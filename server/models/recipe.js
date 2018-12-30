/* eslint-disable indent */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    ingredient: DataTypes.STRING,
    imageurl: {
      type: DataTypes.STRING,
    },
    about: DataTypes.STRING
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
    Recipe.belongsTo(models.Users,{
      foreignkey : 'recipeid'
    });
    // Recipe.hasMany(models.Reviews,{
    //   foreignkey : 'reviewid'
    // });
  };
  return Recipe;
};
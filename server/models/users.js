/* eslint-disable linebreak-style */
/* eslint-disable indent */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    username: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true
    },
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true,
      validate : {
        isEmail : true
      }
    },
    phoneno: {
      type : DataTypes.STRING,
      allowNull : false
    },
    password: {
      allowNull : false,
      type : DataTypes.STRING(20)
    },
    avatarurl: {
      type: DataTypes.STRING,
      allowNull : false,
      validate : {
        isUrl : true
      }
    }
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
    Users.hasMany(models.Reviews,{
      foreignkey : 'userid'
    });
  };
  return Users;
};
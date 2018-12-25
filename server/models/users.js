/* eslint-disable linebreak-style */
/* eslint-disable indent */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneno: DataTypes.STRING,
    password: DataTypes.STRING,
    avatarurl: {
      type: DataTypes.STRING
    }
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};
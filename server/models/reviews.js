'use strict';
module.exports = (sequelize, DataTypes) => {
	const Reviews = sequelize.define('Reviews', {
		review:{
			type : DataTypes.STRING,
			allowNull : false
		}
	}, {});
	Reviews.associate = function(models) {
		// associations can be defined here
		Reviews.belongsTo(models.Users,{
			foreignkey : 'userid'
		});
	};
	return Reviews;
};
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
	development: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DATABASE_DB_NAME,
		host: process.env.DB_HOST,
		dialect: 'postgres'
	},
	test: {
		use_env_variable: 'DB_TEST_URL',
		dialect: 'postgres',
		database: process.env.DATABASE_DB_NAME
	},
	testdev: {
		username: process.env.USERNAME_DB_TEST,
		password: process.env.PASSWORD_DB_TEST,
		database: process.env.DATABASE_DB_TEST,
		host: process.env.HOST_TEST,
		dialect: 'postgres'
	},
	production: {
		use_env_variable: 'DATABASE_URL',
		dialect: 'postgres',
	}
};
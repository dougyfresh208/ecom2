const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  // Use JawsDB URL for production environment
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Use local database configuration for development environment
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306, // Use the default MySQL port (3306)
    dialectOptions: {
      decimalNumbers: true,
    },
  });
}

module.exports = sequelize;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const Product = require('./Product'); // Import the Product model

class Category extends Model {}

Category.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'category',
});

// Define association with Product model
Category.hasMany(Product, {
  foreignKey: 'category_id', // Define the foreign key column in the Product model
  onDelete: 'CASCADE' // Optional: Define the deletion behavior
});

module.exports = Category;

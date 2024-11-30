const { Model, DataTypes } = require('sequelize');
const sequelize = require('./connectDB');

class Category extends Model {}

Category.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
}, { 
    sequelize, 
    modelName: 'Category',
    timestamps: false 
});

module.exports = Category;

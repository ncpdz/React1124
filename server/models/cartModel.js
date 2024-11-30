const { Model, DataTypes } = require('sequelize');
const sequelize = require('./connectDB');
const User = require('./userModel');
const Product = require('./productModel');

class Cart extends Model {}

Cart.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Products',
      key: 'id',
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
}, {
  sequelize,
  modelName: 'Cart',
  timestamps: true,
});

Cart.belongsTo(User, { foreignKey: 'userId' });
Cart.belongsTo(Product, { foreignKey: 'productId' });

module.exports = Cart;

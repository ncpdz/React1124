const sequelize = require('./connectDB');
const Product = require('./productModel');
const Category = require('./categoryModel');
const User = require('./userModel');
const Cart = require('./cartModel');
const Order = require('./orderModel');

Category.hasMany(Product, { foreignKey: "CategoryId" });
Product.belongsTo(Category, { foreignKey: "CategoryId" });

User.hasMany(Cart, { foreignKey: 'userId' });
Cart.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(Cart, { foreignKey: 'productId' });
Cart.belongsTo(Product, { foreignKey: 'productId' });

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

sequelize.sync();

module.exports = { sequelize, Product, Category, User, Cart, Order };

const sequelize = require('./connectDB');
const Product = require('./productModel');
const Category = require('./categoryModel');
const User = require('./userModel');
const Cart = require('./cartModel');

// Định nghĩa các mối quan hệ
Category.hasMany(Product, { foreignKey: "CategoryId" });
Product.belongsTo(Category, { foreignKey: "CategoryId" });

User.hasMany(Cart, { foreignKey: 'userId' });
Cart.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(Cart, { foreignKey: 'productId' });
Cart.belongsTo(Product, { foreignKey: 'productId' });

// Đồng bộ hóa cơ sở dữ liệu
sequelize.sync();

module.exports = { sequelize, Product, Category, User, Cart };

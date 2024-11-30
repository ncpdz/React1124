const { Model, DataTypes } = require("sequelize");
const sequelize = require("./connectDB");
const Category = require("./categoryModel");

class Product extends Model {}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Categories",
        key: "id",
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Product",
    timestamps: true,
  }
);

Product.belongsTo(Category, { foreignKey: "CategoryId" });
module.exports = Product;

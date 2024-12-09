const { Model, DataTypes } = require("sequelize");
const sequelize = require("./connectDB");
const User = require("./userModel"); // Ensure this path is correct

class Order extends Model {}

Order.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    items: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    customerInfo: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1, 
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Order",
    timestamps: true,
  }
);

Order.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Order, { foreignKey: "userId" });

module.exports = Order;

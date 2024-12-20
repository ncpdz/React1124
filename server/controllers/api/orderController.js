const { Order, Cart } = require("../../models");
const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: "Internal Server Error" });
};

class ApiOrderController {
  static async create(req, res) {
    try {
      const { items, totalAmount, customerInfo } = req.body;
      const userId = req.userId;
      const newOrder = await Order.create({
        userId,
        items,
        totalAmount,
        customerInfo,
        status: 1,
      });
      await Cart.destroy({ where: { userId } });
      res.status(201).json(newOrder);
    } catch (error) {
      handleError(res, error);
    }
  }

  static async index(req, res) {
    try {
      const orders = await Order.findAll();
      res.status(200).json(orders);
    } catch (error) {
      handleError(res, error);
    }
  }

  static async show(req, res) {
    try {
      const order = await Order.findByPk(req.params.id);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.status(200).json(order);
    } catch (error) {
      handleError(res, error);
    }
  }

  static async update(req, res) {
    try {
      const { status } = req.body;
      const order = await Order.findByPk(req.params.id);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      await order.update({ status });
      res.status(200).json(order);
    } catch (error) {
      handleError(res, error);
    }
  }

  static async getUserOrders(req, res) {
    try {
      const userId = req.userId;
      const orders = await Order.findAll({ where: { userId } });
      if (!orders || orders.length === 0) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.status(200).json(orders);
    } catch (error) {
      handleError(res, error);
    }
  }
}

module.exports = ApiOrderController;

const { Cart, Product } = require("../../models");
const jwt = require("jsonwebtoken");

const handleError = (res, error) => {
  console.error("Detailed Error:", error);
  res
    .status(500)
    .json({ error: "Internal Server Error", message: error.message });
};

class ApiCartController {
  static async addToCart(req, res) {
    try {
      const { userId } = req;
      const { productId, quantity } = req.body;
      if (!productId || !quantity) {
        return res
          .status(400)
          .json({ error: "Product ID and quantity are required" });
      }
      let cart = await Cart.findOne({ where: { userId, productId } });
      if (cart) {
        cart.quantity += quantity;
        await cart.save();
      } else {
        await Cart.create({ userId, productId, quantity });
      }
      res.status(201).json({ message: "Item added to cart" });
    } catch (error) {
      handleError(res, error);
    }
  }
  static async getCart(req, res) {
    try {
      const { userId } = req;
      const cart = await Cart.findAll({
        where: { userId },
        include: [
          {
            model: Product,
            attributes: ["id", "name", "description", "price", "image"],
          },
        ],
      });
      res.status(200).json(cart);
    } catch (error) {
      handleError(res, error);
    }
  }
  
  static async removeFromCart(req, res) {
    try {
      const { userId } = req;
      const { productId } = req.params;
      const cart = await Cart.findOne({ where: { userId, productId } });

      if (!cart) {
        return res.status(404).json({ error: "Item not found in cart" });
      }

      await cart.destroy();
      res.status(200).json({ message: "Item removed from cart" });
    } catch (error) {
      handleError(res, error);
    }
  }
  static async updateCart(req, res) {
    try {
      const { userId } = req;
      const { productId, quantity } = req.body;
      if (!productId || quantity === undefined) {
        return res
          .status(400)
          .json({ error: "Product ID and quantity are required" });
      }
      const cart = await Cart.findOne({ where: { userId, productId } });
      if (!cart) {
        return res.status(404).json({ error: "Item not found in cart" });
      }
      cart.quantity = quantity;
      await cart.save();
      res.status(200).json({ message: "Cart updated successfully" });
    } catch (error) {
      handleError(res, error);
    }
  }
}

module.exports = ApiCartController;

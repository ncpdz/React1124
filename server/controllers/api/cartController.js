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
      console.log("Request Body:", req.body);
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res
          .status(401)
          .json({ error: "Authorization header is missing" });
      }
      const token = authHeader.split(" ")[1];
      console.log("Token:", token);
      console.log("JWT Secret:", process.env.JWT_SECRET);
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded Token:", decodedToken);
      const userId = decodedToken.id;
      const { productId, quantity } = req.body;
      console.log(
        `Adding product ${productId} with quantity ${quantity} for user ${userId}`
      );
      if (!productId || !quantity) {
        return res
          .status(400)
          .json({ error: "Product ID and quantity are required" });
      }
      let cart = await Cart.findOne({ where: { userId, productId } });
      console.log("Cart entry:", cart);
      if (cart) {
        cart.quantity += quantity;
        await cart.save();
      } else {
        await Cart.create({ userId, productId, quantity });
      }
      res.status(201).json({ message: "Item added to cart" });
    } catch (error) {
      console.error("Error in addToCart:", error);
      handleError(res, error);
    }
  }

  static async getCart(req, res) {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res
          .status(401)
          .json({ error: "Authorization header is missing" });
      }
      const token = authHeader.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decodedToken.id;

      const cart = await Cart.findAll({
        where: { userId },
        include: [Product],
      });

      if (!cart.length) {
        return res.status(404).json({ error: "Cart not found" });
      }
      res.status(200).json(cart);
    } catch (error) {
      handleError(res, error);
    }
  }

  static async removeFromCart(req, res) {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res
          .status(401)
          .json({ error: "Authorization header is missing" });
      }
      const token = authHeader.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decodedToken.id;

      const { productId } = req.body;
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
}

module.exports = ApiCartController;

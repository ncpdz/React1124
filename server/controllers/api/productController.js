const { Product, Category } = require("../../models");

const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: "Internal Server Error" });
};

class ApiProductController {
  static async index(req, res) {
    try {
      const products = await Product.findAll({
        include: {
          model: Category,
          attributes: ["id", "name"],
        },
      });
      res.status(200).json(products);
    } catch (error) {
      handleError(res, error);
    }
  }

  static async show(req, res) {
    try {
      const product = await Product.findByPk(req.params.id, {
        include: {
          model: Category,
          attributes: ["id", "name"],
        },
      });
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json(product);
    } catch (error) {
      handleError(res, error);
    }
  }

  static async create(req, res) {
    try {
      console.log("Request body:", req.body);
      const { name, description, price, CategoryId, stock, image } = req.body;

      if (!name || !description || !price || !CategoryId || !image) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const category = await Category.findByPk(CategoryId);
      if (!category) {
        return res.status(400).json({ error: "Invalid CategoryId" });
      }

      const newProduct = await Product.create({
        name,
        description,
        price,
        CategoryId,
        stock,
        image,
      });

      res.status(201).json(newProduct);
    } catch (error) {
      handleError(res, error);
    }
  }

  static async update(req, res) {
    try {
      const { name, description, price, CategoryId, stock, image } = req.body;

      const product = await Product.findByPk(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      if (CategoryId) {
        const category = await Category.findByPk(CategoryId);
        if (!category) {
          return res.status(400).json({ error: "Invalid CategoryId" });
        }
      }

      await product.update({
        name: name || product.name,
        description: description || product.description,
        price: price || product.price,
        CategoryId: CategoryId || product.CategoryId,
        stock: stock || product.stock,
        image: image || product.image,
      });

      res.status(200).json(product);
    } catch (error) {
      handleError(res, error);
    }
  }

  static async delete(req, res) {
    try {
      const product = await Product.findByPk(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      await product.destroy();
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      handleError(res, error);
    }
  }
  static async getProductsByCategory(req, res) {
    try {
      const categoryId = req.params.CategoryId;
      console.log("CategoryId received:", categoryId);

      if (!categoryId) {
        return res.status(400).json({ error: "CategoryId is required" });
      }
      const products = await Product.findAll({
        where: { CategoryId: categoryId },
        include: {
          model: Category,
          attributes: ["id", "name"],
        },
      });
      if (products.length === 0) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json(products);
    } catch (error) {
      handleError(res, error);
    }
  }

  static async getCategories(req, res) {
    try {
      const categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (error) {
      handleError(res, error);
    }
  }
}

module.exports = ApiProductController;

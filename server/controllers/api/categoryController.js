const { Category } = require("../../models");

const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: "Internal Server Error" });
};

class ApiCategoryController {
  static async index(req, res) {
    try {
      const categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (error) {
      handleError(res, error);
    }
  }

  static async show(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.status(200).json(category);
    } catch (error) {
      handleError(res, error);
    }
  }

  static async create(req, res) {
    try {
      const { name, description } = req.body;
      const newCategory = await Category.create({ name, description });
      res.status(201).json(newCategory);
    } catch (error) {
      handleError(res, error);
    }
  }

  static async update(req, res) {
    try {
      const { name, description } = req.body;
      const category = await Category.findByPk(req.params.id);
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      await category.update({ name, description });
      res.status(200).json(category);
    } catch (error) {
      handleError(res, error);
    }
  }

  static async delete(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      await category.destroy();
      res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
      handleError(res, error);
    }
  }
}

module.exports = ApiCategoryController;

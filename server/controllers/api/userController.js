const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: "Internal Server Error" });
};

class ApiUserController {
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const token = jwt.sign(
        { id: user.id, username: user.username },
        "your_secret_key",
        { expiresIn: "1h" }
      );
      res.status(200).json({ token });
    } catch (error) {
      handleError(res, error);
    }
  }

  static async index(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      handleError(res, error);
    }
  }

  static async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      handleError(res, error);
    }
  }

  static async create(req, res) {
    try {
      const { username, password, email, isActive } = req.body;
      const role = "user";
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        username,
        password: hashedPassword,
        email,
        role,
        isActive,
      });
      res.status(201).json(newUser);
    } catch (error) {
      handleError(res, error);
    }
  }

  static async update(req, res) {
    try {
      const { username, password, email, role, isActive } = req.body;
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Kiểm tra nếu có mật khẩu mới thì mã hóa nó
      let updatedData = { username, email, role, isActive };
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        updatedData.password = hashedPassword;
      }

      await user.update(updatedData);
      res.status(200).json(user);
    } catch (error) {
      handleError(res, error);
    }
  }

  static async delete(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      await user.destroy();
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      handleError(res, error);
    }
  }
}

module.exports = ApiUserController;

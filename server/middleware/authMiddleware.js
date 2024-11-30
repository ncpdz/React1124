const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  
  if (!token) {
    return res.status(403).json("A token is required for authentication");
  }

  try {
    const decoded = jwt.verify(token, "TuanDevAccessToken");
    req.user = decoded;
  } catch (err) {
    return res.status(401).json("Invalid Token");
  }

  return next();
}

module.exports = authMiddleware;

const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  console.log("Verifying token...");
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    console.log("Authorization header is missing");
    return res.status(401).json({ error: "Authorization header is missing" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    console.log("Token is missing");
    return res.status(401).json({ error: "Token is missing" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token verified:", decoded);
    req.userId = decoded.id; // Store userId in the request object
    next(); // Proceed to the next middleware or controller
  } catch (error) {
    console.log("Invalid or expired token");
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

module.exports = verifyToken;

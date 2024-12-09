const express = require("express");
const ApiOrderController = require("../../controllers/api/orderController");
const verifyToken = require("../../middleware/verifyToken");
const router = express.Router();

router.post("/", verifyToken, ApiOrderController.create);
router.get("/", verifyToken, ApiOrderController.index);
router.get("/user-orders", verifyToken, ApiOrderController.getUserOrders);
router.get("/:id", verifyToken, ApiOrderController.show);
router.put("/:id", verifyToken, ApiOrderController.update);

module.exports = router;

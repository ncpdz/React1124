const express = require('express');
const router = express.Router();
const ApiCartController = require('../../controllers/api/cartController');
const verifyToken = require('../../middleware/verifyToken'); 

router.post('/add', verifyToken, ApiCartController.addToCart);
router.get('/', verifyToken, ApiCartController.getCart);
router.put('/update', verifyToken, ApiCartController.updateCart); 
router.delete('/remove/:productId', verifyToken, ApiCartController.removeFromCart); 

module.exports = router;

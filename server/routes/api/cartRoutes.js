const express = require('express');
const router = express.Router();
const ApiCartController = require('../../controllers/api/cartController');

router.post('/add', ApiCartController.addToCart);
router.get('/', ApiCartController.getCart);
router.delete('/remove', ApiCartController.removeFromCart);

module.exports = router;

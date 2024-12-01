const express = require('express');
const router = express.Router();
const ApiUserController = require('../../controllers/api/userController');

router.get('/', ApiUserController.index);
router.get('/:id', ApiUserController.show);
router.post('/create', ApiUserController.create);
router.put('/update/:id', ApiUserController.update);
router.delete('/delete/:id', ApiUserController.delete);
router.post('/login', ApiUserController.login);
router.get('/:id/orders', ApiUserController.getUserOrders);

module.exports = router;

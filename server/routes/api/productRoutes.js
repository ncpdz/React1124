const express = require('express');
const router = express.Router();
const ApiProductController = require('../../controllers/api/productController'); 

router.get('/', ApiProductController.index);
router.get('/:id', ApiProductController.show);
router.post('/create', ApiProductController.create);
router.put('/update/:id', ApiProductController.update);
router.delete('/delete/:id', ApiProductController.delete);

router.get('/category/:CategoryId', ApiProductController.getProductsByCategory);
router.get('/categories', ApiProductController.getCategories);

module.exports = router;

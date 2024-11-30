const express = require('express');
const router = express.Router();
const ApiCategoryController = require('../../controllers/api/categoryController');

router.get('/', ApiCategoryController.index);
router.get('/:id', ApiCategoryController.show);
router.post('/create', ApiCategoryController.create);
router.delete('/delete/:id', ApiCategoryController.delete);
router.put('/update/:id', ApiCategoryController.update);

module.exports = router;

const router = require('express').Router();
const categoryController = require('../controllers/categoryController');
const { requireSignin, requireAdmin } = require('../middlewares/authMiddleware');


//get all categories
router.get('/categories', categoryController.getCategories);

//get one category
router.get('/categories/:id', categoryController.getCategory);

//create one category
router.post('/categories', requireSignin, requireAdmin, categoryController.createCategory);


module.exports = router;
const router = require('express').Router();
const productController = require('../controllers/productController');
const { requireSignin, requireAdmin } = require('../middlewares/authMiddleware');


//get all products
router.get('/products', productController.getProducts);

//get one product
router.get('/products/:id', productController.getProduct);

//create one product
router.post('/products', requireAdmin, productController.createProduct);

//update one product
router.put('/products/:id', requireSignin, requireAdmin, productController.updateProduct);

//delete one product
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
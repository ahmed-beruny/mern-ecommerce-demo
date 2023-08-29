const router = require('express').Router();

const { requireSignin, requireAdmin } = require('../middlewares/authMiddleware');
const orderController = require('../controllers/orderController');

//get all orders
router.get('/orders', requireSignin, requireAdmin, orderController.getOrders);

//get one order
router.get('/orders/:id', requireSignin, requireAdmin, orderController.getOrder);

//create one order
router.post('/orders', requireSignin, orderController.createOrder);

//update one order
router.put('/orders/:id', requireSignin, requireAdmin, orderController.updateOrder);

//delete one order
router.delete('/orders/:id', requireSignin, requireAdmin, orderController.deleteOrder);

module.exports = router;
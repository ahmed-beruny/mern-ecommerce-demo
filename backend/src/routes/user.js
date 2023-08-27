const router = require('express').Router();
const userController = require('../controllers/userController');
const { requireSignin, requireAdmin } = require('../middlewares/authMiddleware');

//get all users
router.get('/users',requireSignin, userController.getUsers);

//get one user
router.get('/users/:id', requireAdmin, userController.getUser);

//create one user
router.post('/users', requireAdmin, userController.createUser);

//update one user
router.put('/users/:id', requireAdmin, userController.updateUser);

//delete one user
router.delete('/users/:id', requireAdmin, userController.deleteUser);

module.exports = router;
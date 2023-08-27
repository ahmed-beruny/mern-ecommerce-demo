const router = require('express').Router();
const userController = require('../controllers/userController');

//get all users
router.get('/users', userController.getUsers);

//get one user
router.get('/users/:id', userController.getUser);

//create one user
router.post('/users', userController.createUser);

//update one user
router.put('/users/:id', userController.updateUser);

//delete one user
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
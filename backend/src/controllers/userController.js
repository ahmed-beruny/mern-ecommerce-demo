const User = require('../models/user');


//get all users
exports.getUsers = async(req, res) => {
    const users = await User.find();
    res.json(users);
};

//get one user
exports.getUser = async(req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};

//create one user
exports.createUser = async(req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
};

//update one user
exports.updateUser = async(req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.json(user);
};

//delete one user
exports.deleteUser = async(req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({ message: 'User deleted' });
};
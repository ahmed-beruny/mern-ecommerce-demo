
const User = require('../models/user');

const jwt = require('jsonwebtoken'); // to generate signed token

const expressJwt = require('express-jwt'); // for authorization check


exports.signup = async(req, res) => {
    console.log('req.body', req.body);
    const user = new User(req.body);
    try {
        await user.save();
        res.status(200).json({ user });
    } catch (err) {
        res.status(400).json({ err });
    }
};

exports.signin = async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ error: 'User with that email does not exist. Please signup' });
    }
    if (user.password !== password) {
        return res.status(401).json({ error: 'Password does not match' });
    }
    try {

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.cookie('t', token, { expire: new Date() + 9999 });
        const { _id, name, email, role } = user;
        return res.json({ token, user: { _id, email, name, role } });
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

exports.signout = (req, res) => {
    res.clearCookie('t');
    res.json({ message: 'Signout success' });
};








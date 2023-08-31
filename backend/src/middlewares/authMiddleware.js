const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/user');



exports.requireSignin = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log('authHeader', authHeader);
    if (!authHeader) {
        return res.status(401).json({ error: 'Unauthorized. Access denied.' });
    }
    const token = authHeader.split(' ')[1];
    console.log('token', token);
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized. Access denied.' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('decoded', decoded);
        req.userId = decoded._id;
        console.log(decoded);
        next();
    } catch (err) {
        res.status(401).json({ error: 'Unauthorized. Access denied.' });
    }
};

exports.requireAdmin = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log('authHeader', authHeader);
    if (!authHeader) {
        return res.status(401).json({ error: 'Unauthorized. Access denied.' });
    }
    const token = authHeader.split(' ')[1];
    console.log('token', token);
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized. Access denied.' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('decoded', decoded);
        req.userId = decoded._id;
        //console.log(decoded);
        const user = await User.findById(req.userId);
        //console.log(req.userId, user)
        if (user.role !== 1) {
            return res.status(401).json({ error: 'Admin resource. Access denied.'});
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Unauthorized. Access denied.' });
    }
};

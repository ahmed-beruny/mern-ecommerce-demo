const jwt = require('jsonwebtoken');


exports.requireSignin = (req, res, next) => {
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

exports.requireAdmin = (req, res, next) => {
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
        if (decoded.role !== 1) {
            return res.status(401).json({ error: 'Admin resource. Access denied.' });
        }
        next();
    } catch (err) {
        res.status(401).json({ error: 'Unauthorized. Access denied.' });
    }
};

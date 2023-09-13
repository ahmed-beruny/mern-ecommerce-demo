const router = require('express').Router();
const { signup, signin, signout } = require('../controllers/authController');
const { requireSignin, requireAdmin } = require('../middlewares/authMiddleware');


router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', signout);
router.get('/issignedin',requireAdmin, (req, res) => {
    res.status(200).json(req.user);
})



module.exports = router;
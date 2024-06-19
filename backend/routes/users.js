const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const authMiddleware = require('../middlewares/auth');

router.post('/register', usersController.register);
router.post('/login', usersController.login);
router.post('/favorites', authMiddleware, usersController.toggleFavorite);

module.exports = router;
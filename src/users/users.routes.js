const express = require('express');
const router = express.Router();

const authMiddleware = require('../auth/auth.middlewares');

const userController = require('./users.controllers');

const isAuth = authMiddleware.isAuth;

router.get('/profile', isAuth, userController.profile);

module.exports = router;
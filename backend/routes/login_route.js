const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login_controller'); // Pastikan path benar

// Route untuk login
router.post('/login', loginController.login);

// Route untuk logout
router.post('/logout', loginController.logout);

module.exports = router;

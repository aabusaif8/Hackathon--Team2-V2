// UserRouter.js

const express = require('express');
const router = express.Router();
const UserInfoController = require('./UserInfoController');

router.get('/users/:userId', UserInfoController.getUserById);

module.exports = router;
const express = require('express');
const router = express.Router();
const UserInfoController = require('./UserInfoController');

router.post('/signin', UserInfoController.signIn);
router.get('/:userId/dashboard', UserInfoController.getDashboard);
router.put('/:userId/portfolio', UserInfoController.updatePortfolio); // Define the route correctly

module.exports = router;

const express = require('express');
const router = express.Router();
const UserInfoController = require('./UserInfoController');
const methodNotAllowed = require("../../errors/methodNotAllowed");


router.get('/:userId/dashboard', UserInfoController.getDashboard).all(methodNotAllowed);
router.put('/:userId/portfolio', UserInfoController.updatePortfolio).all(methodNotAllowed); // Define the route correctly
router.post('/signin', UserInfoController.signIn).all(methodNotAllowed);


module.exports = router;

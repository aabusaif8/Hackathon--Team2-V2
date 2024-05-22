const express = require('express');
const router = express.Router();
const UserInfoController = require('./UserInfoController');
const methodNotAllowed = require("../../errors/methodNotAllowed");


router.get('/:userId/dashboard', UserInfoController.getDashboard).all(methodNotAllowed);
router.put('/:userId/portfolio', UserInfoController.updatePortfolio).all(methodNotAllowed); 
router.post('/users/signin', (req, res) => {
    console.log('Received login data:', req.body)
    const response = { success: true, data: { user: { Id: userId } } };
    
    // Log the response before sending
    console.log('Sending response:', response);
  
    res.status(200).json(response); // or appropriate status and response
  
    // Example response (error)
    // const errorResponse = { success: false, message: 'Invalid credentials' };
    // res.status(400).json(errorResponse);
  });

module.exports = router;
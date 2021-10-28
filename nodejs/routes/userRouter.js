const express = require('express')
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;


const jwtGenerator = require('../config/jwt');
const ctrUser = require('../controllers/userController');

   //create user
router.post('/register', ctrUser.register);  

 // login 
router.post('/authenticate', ctrUser.authenticate); 

// get user session 
router.get('/profile', jwtGenerator.verifyJwtToken, ctrUser.userSession); 


module.exports = router;
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const websiteController = require('../controllers/websiteController');

//User Routes
router.get('/login', userController.logIn);
router.get('/signup', userController.signUp);


//Website Routes
router.get('/website', websiteController.showLandingPage);
router.delete('/website/:id', websiteController.removeItem);
router.put('/website/:id', websiteController.updateItem);
router.post('/website/', websiteController.createItem)

module.exports = router;

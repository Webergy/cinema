const userController = require('../controllers/userController.js');

const UserRouter = require('express').Router();

UserRouter.post('/register', userController.register);


module.exports = UserRouter;



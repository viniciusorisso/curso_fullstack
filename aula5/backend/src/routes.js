const express = require('express');
const routes = express.Router();
const userController = require('./controllers/userController');

routes.post('/users', userController.persistUser);
routes.get('/users', userController.listUsers);
routes.get('/userGit/:user', userController.getUserGit);
routes.get('/userGetAll', userController.getAllUsersGit);

module.exports = routes;
const express = require('express');
const routes = express.Router();
const userController = require('./controllers/userController');

routes.post('/user', userController.persistData);
routes.get('/users', userController.listUsers);
routes.get('/userUm:caminho', userController.listaUm);
routes.get('/userFemale', userController.listaFemininos);
routes.get('/userByNumber:x', userController.listAgeMinor);

module.exports = routes;
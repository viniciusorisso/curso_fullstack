const express = require('express');
const routes = express.Router();
const userController = require('./controllers/userController');
const nfController = require('./controllers/nfController');

routes.get('/users', userController.listUsers);

routes.post('/autentica', userController.autentica);

//Pegar parâmetros da URL
routes.post('/notafiscal/:nf',nfController.notaFiscal);

routes.post('/login', userController.loginHeaders);
module.exports = routes;
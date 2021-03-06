const express = require('express');
const server = express();
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//const routes = require('./src/routes.js')

//Banco de dados
mongoose.connect('mongodb+srv://admin:admin@primeiro-arkqs.gcp.mongodb.net/cursoReact?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology: true});

//Import Models

requireDir('./src/models');

//Config
server.use(express.json());

server.use('/api', require('./src/routes.js'));

server.listen(3002);
console.log('Servidor escutando na porta 3002');
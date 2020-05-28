const express = require('express');
const server = express();

server.use('/api', require('./src/routes.js'));

server.listen(3002);
console.log("Servidor Ouvindo na porta 3002.");
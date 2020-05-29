const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async persistData(req, res){
        const response = await req.body;
        User.create(response);
        res.json(response);
    },
    async listUsers(req, res){
        const response = await User.find();
        res.json(response);
    },
    //pesquisar com campo vindo da url
    async listaUm(req, res){
        const response = await User.findById(req.params.caminho);
        res.json(response);
    },
    //pesquisa todos do sexo feminino
    async listaFemininos(req, res){
        const response = await User.find({sex:"F"});
        res.json(response);
    },
    //Todos que tem menos que x anos
    async listAgeMinor(req, res){
        const response = await User.find({age: {$lte: req.params.x}});
        res.json(response);
    },
    async listBySex(req, res){
        const response = await User.find({sex: req.params.x});
        res.json(response);
    },
    listManyFields(req, res){
        const response = req.query.fields;
        res.json(response);
    }
}
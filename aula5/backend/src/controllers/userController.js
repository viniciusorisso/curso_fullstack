const mongoose = require('mongoose');
const User = mongoose.model('User');
const axios = require('axios');

module.exports = {
    async persistUser(req, res){
        const payload = await req.body;
        User.create(payload);
        res.json(payload);
        //res.status(200);
    }, 
    async listUsers(req, res){
        const response = await User.find();
        res.json(response);
    },
    //Persistir no banco usuários do Git
    async getUserGit(req, res){
        const response = await axios.get(`https://api.github.com/users/${req.params.user}`);
        const {login, name, avatar_url, company, email, public_repos, followers, bio} = response.data;
        const novo = {
            login : login,
            name : name,
            avatar_url : avatar_url,
            company : company, 
            email : email,
            public_repos : public_repos, 
            followers : followers, 
            biografia : bio
        }
        User.create(novo);
        res.json(novo);
    },
    //Persistir no banco TODOS os usuários do Git
    
    //Persistir no banco do usuários do Git antes de 2020
    async getAllUsersGit(req, res){
        const response = await axios.get();
    }

    //Novo backend origen:[lat, long] destino:[lat, long] => distancia

}
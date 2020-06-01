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
    async getAllUsersGit(req, res){
        var lista = [];
        var response = await axios.get(`https://api.github.com/users?page=1&per_page=1000`);
        var {link} = response.headers;
        const x = response.data;
        //while(link.includes('next')){ //ERRO 403 NAO TENHO PERMISSAO
            for(i = 0; i < response.data.length; i++){
                const {login, name, avatar_url, company, email, public_repos, followers, bio} = response.data[i];
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
                lista.push(novo);
            }
            console.log(lista.length);
            link = String(link);
            link = link.split('>');
            link = link[0].split('<');
            //response = await axios.get(link[1]);
           // var {link} = response.headers;
        //}

        res.status(200).json();
    }

    //Persistir no banco do usuários do Git antes de 2020


    //Novo backend origen:[lat, long] destino:[lat, long] => distancia

}
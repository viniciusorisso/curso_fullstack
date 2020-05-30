const mongoose = require('mongoose');

const userScheema = mongoose.Schema({
    login : String,
    name : String,
    avatar_url : String,
    company : String,
    email : String,
    public_repos : Number,
    followers : Number,
    biografia : String,
},{
    timestamps : true,
});

module.exports = mongoose.model('User', userScheema);
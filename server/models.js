const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ninja_gold', {useNewUrlParser: true})
    .then( ()=> console.log("Mongoose Connected"))
    .catch( ()=> console.log("Something Went Wrong...Get It Together"));



    var GameSchema = new mongoose.Schema({
        gold: {type: Number, required: true},
        log: [String]        
    });

    var UserSchema = new mongoose.Schema({
        name: {type: String, required: true, minlength: 2},
        pin: {type: Number, required: true, minlength: 4, maxlength: 4},        
        saved_games: [GameSchema]
    });

    var ManagerSchema = new mongoose.Schema({
        name: String,
        leaderboard: [{name: String, score: Number}],
        users: [UserSchema]
    }, {timestamps: true});


module.exports = new mongoose.model("Manager", ManagerSchema);





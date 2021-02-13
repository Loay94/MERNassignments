const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
	name :{ 
        type : String,
        required:[true,"player must have name"],
        minlength:[3," wrong !! at least 3 charactors "]
    },
    position :{ 
        type : String,
        minlength:[3," wrong !! at least 3 charactors "]
    }
},{ timestamps:true });

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
	name :{ 
        type : String,
        required:[true,"author must have...."],
        minlength:[3,"minimumm 3"]
    }
},{ timestamps:true });

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
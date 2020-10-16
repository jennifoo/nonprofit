const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// PROTECT
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({    
  email: {type: String, required:true, unique:true}, 
  username : {type: String, unique: true, required:true}, 
}); 

// plugin for passport-local-mongoose 
UserSchema.plugin(passportLocalMongoose); 

// export userschema 
module.exports = mongoose.model("User", UserSchema); 
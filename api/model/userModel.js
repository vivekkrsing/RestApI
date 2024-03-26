const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    _id:Schema.Types.ObjectId,
    email:{type:String,require:true},
    password:{type:String,require:true},
    userImage:{type:String},
});

module.exports = mongoose.model("User",userSchema);
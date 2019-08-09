const mongoose = require('mongoose');
const fs =require('fs');
const employeeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fname: {type:String,required:true},
    lname: {type:String,required:true},
    email: {type:String,required:true},
    gender: {type:String},
    phone:{type:String},
    birthdate:{type:String},
    qualification: {type:String},
    state : {type:String},
    city : {type:String},
    zipCode:{type:String},
    hobbies: {type:Array},
    profiePic:{type:String},
    address:{type:String},
    skills:{type:Array},
    salary:{type:String}
 });

module.exports = mongoose.model('Employee',employeeSchema);
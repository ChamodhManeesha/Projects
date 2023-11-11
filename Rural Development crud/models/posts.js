const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    tenderId:{
        type:String,
        required:true
    },
    tName:{
        type:String,
        required:true
    },
    tValue:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
    
    number:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('Posts',postSchema);
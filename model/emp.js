const mangoose = require('mongoose');
const empSchema = mangoose.Schema({
    name:{
        type: String,
        required:true,
    },
    location:{  
        type: String,
        required:true,
    },
    position:{
        type: String,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    }
}) 

const empModel = mangoose.model('Employee',empSchema)
module.exports =empModel
const mongoose= require("mongoose");
const validator = require ("validator");

const Animal =  mongoose.model("Animal",{
    
    TypeOfAnimal:{
        type:String,
        required: true,
        trim: true,
    },
        name:{
        type: String,
        required:true,
        trim: true,
    },
    age:{
        type: Number,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error("Age must be a positive number");
            }
        },
    },
    vaccinated:{
        type: Boolean,
        required: true, 
    },
});

module.exports = Animal;
// imports
const mongoose = require("mongoose");

const pokomonSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    ability1 : {
        type : String,
        required : true
    },
    ability2 : {
        type : String,
        reqiured : true
    },
    ability3 : {
        type : String,
        required : [true, "This ability is required"]
    },
    image : {
        type : String,
        required : [true, "Image is required"]
    }
});


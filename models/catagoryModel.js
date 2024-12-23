const mongoose = require('mongoose');

const catagorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true,
    },
    description : {
        type : String,
        required: false,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
});

module.exports = mongoose.model("Catagory", catagorySchema);
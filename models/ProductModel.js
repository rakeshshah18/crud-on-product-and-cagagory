const mongoose = require("mongoose");

// creating schema for product
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    price: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Products", productSchema);
//create new schema of catagory
//crud operations on catagory
//use different route file 
//use forgen key
//update catagory in model.js file

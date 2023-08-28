const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "{Path} is required"],
        },
        price: {
            type: Number,
            required: [true, "{Path} is required"],
        },
        description: {
            type: String,
            required: [true, "{Path} is required"],
        }
    }, 
    {timestamps: true})
    const Product = mongoose.model('product', ProductSchema)
module.exports = Product;
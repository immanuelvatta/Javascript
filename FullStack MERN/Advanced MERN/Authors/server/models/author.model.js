// example model file
const mongoose = require('mongoose');

// Create a Schema for Product
const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required!"],
            minlength: [2, "Name must be at least 2 characters long...."]
        },
        
    },
    { timestamps: true })
const Author = mongoose.model('author', AuthorSchema);
module.exports = Author;

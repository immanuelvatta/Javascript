const mongoose = require('mongoose');

// Create a Schema for Jokes
const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "Setup is required"],
        },
        punchline: {
            type: String,
            required: [true, "Punchline required"],
        },
    }, 
    { timestamps: true })
// create a constructor function for our model and store in variable 'Joke'
module.exports = mongoose.model('Joke', JokeSchema);

const mongoose = require('mongoose');

// Create a Schema for Product
const JobSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required!"],
            minlength: [3, "Title must be at least 3 characters long...."]
        },
        company: {
            type: String,
            required: [true, "Company is required...."],
            minlength: [3, "Company must be at least 3 characters long...."]

        },
        remoteWorking: {
            type: Boolean,
            required: [false, ""],

        },
        status: {
            type: String,
            required: [true, "Status needs to be selected...."],
        }
    },
    { timestamps: true })
const Job = mongoose.model('job', JobSchema);
module.exports = Job;
const Job = require('../models/job.model');

// get all async and try catch
module.exports.findAllJobs = async(req,res) => {
    try{
        const jobList = await Job.find();
        res.json(jobList)
        // console.log(productList)
    }catch(err){
        res.json(err);
    }
};

// get one by id "async and try catch"
module.exports.findOneJob = async (req, res) => {
    try {
        const oneJob = await Job.findOne({ _id: req.params.id });
        res.json(oneJob);
    } catch (err) {
        res.status(400).json(err)
    }
};

// create "async and try catch"
module.exports.createJob = async (req, res) => {
    try {
        const newJob = await Job.create(req.body);
        res.json(newJob);
    } catch (err) {
        res.status(400).json(err)
    }
};


// update by id "async and try catch"
module.exports.updateJob = async(req,res) => {
    try{
        const updatedJob = await Job.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        );
        res.json(updatedJob)
    }catch (err){
        res.status(400).json(err);
    }
};

// delete by id "async and try catch"
module.exports.deleteJob = async (req,res) => {
    try{
        const result = await Job.deleteOne({ _id: req.params.id });
        res.json(result);
    }catch (err) {
        res.status(400).json(err)
    }
}
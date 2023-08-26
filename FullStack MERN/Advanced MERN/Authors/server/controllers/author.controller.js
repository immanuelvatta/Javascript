// importing controller file 
const Author = require('../models/author.model');

// get all async and try catch
module.exports.findAllAuthors = async(req,res) => {
    try{
        const authorList = await Author.find();
        res.json(authorList)
    }catch(err){
        res.status(400).json(err);
    }
};

// get one by id "async and try catch"
module.exports.findOneAuthor = async (req, res) => {
    try {
        const oneAuthor = await Author.findOne({ _id: req.params.id });
        res.json(oneAuthor);
    } catch (err) {
        res.status(400).json(err);
    }
};

// create "async and try catch"
module.exports.createAuthor = async (req, res) => {
    try {
        const newAuthor = await Author.create(req.body);
        res.json(newAuthor);
    } catch (err) {
        res.status(400).json(err);
    }
};


// update by id "async and try catch"
module.exports.updateAuthor = async(req,res) => {
    try{
        const updatedAuthor = await Author.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        );
        res.json(updatedAuthor)
    }catch (err){
        res.status(400).json(err);
    }
};

// delete by id "async and try catch"
module.exports.deleteAuthor = async (req,res) => {
    try{
        const result = await Author.deleteOne({ _id: req.params.id });
        res.json(result);
    }catch (err) {
        res.status(400).json(err);
    }
};

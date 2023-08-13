const Joke = require('../models/jokes.models');

//TODO get all
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes })
        })
        .catch((err) => {
            res.json(err)
        });
}

//TODO get one by id
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json({ joke: oneSingleJoke })
        })
        .catch((err) => {
            res.json(err)
        });
}

//TODO get random

module.exports.randomJoke = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({joke: allJokes[Math.floor(Math.random()* allJokes.length)]})
        })
        .catch((err) => {
            res.json(err);
        });
};


//TODO create 
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({ joke : newJoke })
        })
        .catch((err) => {
            res.json(err)
        });
}

//TODO update by id
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke })
        })
        .catch((err) => {
            res.json(err)
        });
}

//TODO delete by id
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });
}
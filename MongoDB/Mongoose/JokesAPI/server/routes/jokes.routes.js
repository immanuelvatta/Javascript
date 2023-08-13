const JokeController = require('../controllers/jokes.controllers');

module.exports = app => {
    app.get('/api/jokes/alljokes', JokeController.findAllJokes);
    app.get('/api/jokes/random', JokeController.randomJoke);
    app.get('/api/jokes/:id', JokeController.findOneJoke);
    app.patch('/api/jokes/:id', JokeController.updateExistingJoke);
    app.post('/api/jokes/new', JokeController.createNewJoke);
    app.delete('/api/jokes/:id', JokeController.deleteAnExistingJoke);
}
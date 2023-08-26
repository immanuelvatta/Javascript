// importing controller file 
const AuthorController = require("../controllers/author.controller");

module.exports = app => {
    app.get("/api/authors", AuthorController.findAllAuthors)
    app.get("/api/authors/:id", AuthorController.findOneAuthor)
    app.post("/api/authors/new", AuthorController.createAuthor)
    app.put("/api/authors/edit/:id", AuthorController.updateAuthor)
    app.delete("/api/authors/delete/:id", AuthorController.deleteAuthor)
}
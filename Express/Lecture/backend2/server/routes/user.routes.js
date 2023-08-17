const UserController = require("../controllers/user.controller")

module.exports = (app) => {
    //TODO HTTP VERBS
    // GET, POST, PUT, DELETE
    app.get("/api/testing", UserController.testAPI);
    //* all users
    app.get("/api/users", UserController.allUsers );
    //* get one
    app.get("/api/users/:id", UserController.oneUser);
    //* create a user based on the request body
    app.post("/api/users/", UserController.createUser )
    //* update a user based on the request body
    app.put("/api/users/:id", UserController.updateUser)
    //* delete a  user based on the id
    app.delete("/api/users/:id", UserController.deleteUser )
}
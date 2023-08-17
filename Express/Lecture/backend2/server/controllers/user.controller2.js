// object : key-value
const users  = require("../models/user.model")

module.exports = {
    testAPI: (req, res) => {
        res.json({ message: "hello" });
    },
    allUsers: (req, res) => {
        res.json(users);
    },
    oneUser: (req, res) => {
        const paramsId = req.params.id;
        res.json(users[paramsId]);
    },
    createUser: (req, res) => {
        const reqBody = req.body
        users.push(reqBody)
        res.json(reqBody);
    },
    updateUser: (req, res) => {
        const paramsId = req.params.id;
        users[paramsId] = req.body;
        res.json(users[paramsId]);
    },
    deleteUser: (req, res) => {
        const paramsId = req.params.id;
        users.splice(paramsId, 1);
        res.json({ status: "ok" })
    }
}


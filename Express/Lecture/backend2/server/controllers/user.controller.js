const users = require("../models/user.model")

module.exports.testAPI =  (req, res) => {
    res.json({ message: "hello" });
}

module.exports.allUsers = (req, res) => {
    res.json(users);
}

module.exports.oneUser = (req, res) => {
    const paramsId = req.params.id;
    res.json(users[paramsId]);
}

module.exports.createUser = (req, res) => {
    const reqBody = req.body
    users.push(reqBody)
    res.json(reqBody);
}

module.exports.updateUser = (req, res) => {
    const paramsId = req.params.id;
    users[paramsId] = req.body;
    res.json(users[paramsId]);
}

module.exports.deleteUser = (req, res) => {
    const paramsId = req.params.id;
    users.splice(paramsId, 1);
    res.json({ status: "ok" })
}


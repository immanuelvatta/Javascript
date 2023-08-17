//! 1. import all dependencies
const express = require("express");
const app = express()
const port = 8000

// import express from "express"
// in react : import
// esm & cjs


//! 2. configure express
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//! 3. routes & logic

const routes = require("./routes/user.routes")
routes(app)

//! 4. listen to the port
app.listen(port, () => console.log(`Listening on port: ${port}`));
// 1. import all dependencies
//-express, create app with express, .env 

const express = require("express")
const app = express();
const cors = require("cors")
require('dotenv').config();

const port = process.env.PORT;
// import mongoose.config (after config is complete)
require('./config/mongoose.config')

// configure express with app.use
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// import routes 
require('./routes/destination.routes')(app)

// listen to the port at the end
app.listen(port, ()=> console.log('Listening on port: 8000'))


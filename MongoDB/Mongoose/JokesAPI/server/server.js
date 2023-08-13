const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT;

require("./configs/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyJokesRoutes = require("./routes/jokes.routes");
AllMyJokesRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
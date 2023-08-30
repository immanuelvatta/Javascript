const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
require('./config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// !!!create your link to routes like example below!!!
// Example below
require('./routes/job.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );
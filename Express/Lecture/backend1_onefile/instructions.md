create new folder called server
cd into server 

create server.js

init the package
run the command
```
npm init -y
```
then run the command
```
npm install mongoose express dotenv
```

then 

```
mkdir routes controllers models configs
```

```
touch .gitignore
```
.gitignore should have this inside
```
/node_modules
.env
```

create mongoose.config.js inside configs folder
and have this inside

```js
const mongoose = require('mongoose');
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const uri = `mongodb+srv://${username}:${pw}@cluster0.11uag4t.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
```
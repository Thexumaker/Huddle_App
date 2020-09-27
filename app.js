// app.js

const express = require('express');
const connectDB = require('./config/db');
var bodyParser = require('body-parser');
const app = express();
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});
connectDB();
var usersRoutes = require('./routes/users');
var messageRoutes = require('./routes/messages');
//initialise express router
var router = express.Router();
var newrouter = express.Router();

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Credentials", "true");
     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
   next();
 });
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use('/user',router);
app.use('/messages',newrouter)

usersRoutes(router);
messageRoutes(newrouter)
console.log(newrouter.stack);





const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

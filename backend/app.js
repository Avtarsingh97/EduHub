const express = require('express');
const cors = require('cors');
const cookieparser = require('cookie-parser');

const app = express();
require("./config/db");

const routes = require('./routes/v1');
const config = require('./config');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieparser());

app.use(config.PREFIX,routes);


module.exports=app;
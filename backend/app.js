const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
require("./config/db");

const routes = require('./routes/v1');
const config = require('./config');

app.use(cors({
    origin: 'https://eduhub-steel.vercel.app',
    credentials: true, // if you're using cookies or headers like Authorization
  }));

  
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());

app.use(config.PREFIX,routes);

module.exports=app;
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const routes = require('./routes/v1');
const config = require('./config');

const app = express();
require("./config/db");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());


app.get('/', (req, res) => {
    res.redirect(config.PREFIX);
  });


app.use(config.PREFIX,routes);


module.exports=app;
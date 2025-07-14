const express = require('express');
const cors = require('cors');
const config= require("./config")
const cookieParser = require('cookie-parser');

const app = express();
app.set('trust proxy', true);
require("./config/db");

const routes = require('./routes/v1');


app.use(cors({
    origin: [config.CLIENT_URL],
    credentials: true
  }));


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());

app.use(config.PREFIX,routes);

app.get('/', (req, res) => {
    res.send('EduHub Backend API is running.');
  });

  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
  
    res.status(statusCode).json({
      success: false,
      message: err.message || "Internal Server Error",
      ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    });
  });
  

module.exports=app;
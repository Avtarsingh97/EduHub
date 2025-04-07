const express=require('express');
const router=express.Router();
const homeRoute = require('./home.route');


router.use('/', homeRoute);

module.exports=router;
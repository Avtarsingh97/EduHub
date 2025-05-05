const express=require('express');
const router=express.Router();
const homeRoute = require('./home.route');
const authRoute = require("./auth.route");
const mentorRoute= require("./mentor.route");

const Routes = [
    {
        path:'/',
        route:homeRoute
    },
    {
        path:'/auth',
        route:authRoute
    },
    {
        path:'/mentor',
        route:mentorRoute
    },
];


Routes.forEach((route)=>{
    router.use(route.path, route.route);

});

module.exports=router;
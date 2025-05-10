const express=require('express');
const router=express.Router();
const homeRoute = require('./home.route');
const authRoute = require("./auth.route");
const mentorRoute= require("./mentor.route");
const userRoutes = require("./user.routes");
const serviceRoutes  = require("./service.route");

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
    {
        path:'/user',
        route:userRoutes
    },
    {
        path:'/service',
        route:serviceRoutes
    },
];


Routes.forEach((route)=>{
    router.use(route.path, route.route);

});

module.exports=router;
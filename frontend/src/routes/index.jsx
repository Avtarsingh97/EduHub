import React from 'react';
import Home from '../page/Home';
import Signin from '../page/signin';
import Signup from '../page/signup';
import Profile from '../page/dashboard/profile';
import Services from '../page/dashboard/service';
import AllMentors from '@/page/AllMentors';
import MentorProfile from '@/page/MentorProfile';

const routes = [
    {path:'/',element:<Home/>, isProtected:false},
    {path:'/signin',element:<Signin/>, isProtected:false},
    {
        path:'/signup/:role',
        element:<Signup/>,
        isProtected: false
    },
    {
        path:'/dashboard/profile',
        element:<Profile/>,
        isProtected: true
    },
    {
        path:'/dashboard/services',
        element:<Services/>,
        isProtected:true
    },
    {
        path:'/mentors',
        element:<AllMentors/>,
        isProtected:false
    },
    {
        path:'/mentor/profile/:username',
        element:<MentorProfile/>,
        isProtected:false
    },
   
    
]

export default routes;
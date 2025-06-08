import React from "react";
import Home from "../page/Home";
import Signin from "../page/signin";
import Signup from "../page/signup";
import Profile from "../page/dashboard/profile";
import Services from "../page/dashboard/service";
import AllMentors from "@/page/AllMentors";
import MentorProfile from "@/page/MentorProfile";
import Schedule from "@/page/dashboard/Schedule";
import Bookings from "@/page/dashboard/bookings";
import UserBookings from "../page/dashboard/UserBooking";
import BookingPages from "@/page/BookingPages";
import PaymentPage from "@/page/dashboard/PaymentPage";
import SuccessPage from "../page/SuccessPage";
import PageNotFound from "../page/PageNotFound";

const routes = [
  { path: "/", element: <Home />, isProtected: false },
  { path: "/signin", element: <Signin />, isProtected: false },
  {
    path: "/signup/:role",
    element: <Signup />,
    isProtected: false,
  },
  {
    path: "/dashboard/profile",
    element: <Profile />,
    isProtected: true,
  },
  {
    path: "/dashboard/services",
    element: <Services />,
    isProtected: true,
  },
  {
    path: "/dashboard/schedule",
    element: <Schedule />,
    isProtected: true,
  },
  {
    path: "/dashboard/bookings",
    element: <Bookings />,
    isProtected: true,
  },
  {
    path: "/dashboard/user-bookings",
    element: <UserBookings />,
    isProtected: true,
  },
  {
    path: "/mentors",
    element: <AllMentors />,
    isProtected: false,
  },
  {
    path: "/mentor/profile/:username",
    element: <MentorProfile />,
    isProtected: false,
  },
  {
    path: "/mentor/:username/service/:serviceId",
    element: <BookingPages />,
    isProtected: true, // Set to true if the page requires authentication
  },
  {
    path: "/mentor/:username/service/:serviceId/payment",
    element: <PaymentPage/>,
    isProtected: true, // Optional: Based on your authentication logic
  },
  {
    path: "/success",
    element: <SuccessPage />,
    isProtected: true,
  },
  {
    path: "*",
    element: <PageNotFound />,
    isProtected: false,
  },
];

export default routes;

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useUserStore from "../store/user";
import {Dropdown,Menu} from "antd";
import { removeToken } from "../helper";

function Nav() {
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const signupMentorBtnClick = () => navigate("/signup/mentor");
  const signupStudentBtnClick = () => navigate("/signup/student");
  const signInBtnClick = () => navigate("/signin");

  const onLogoutBtnClick = ()=>{
    removeToken();
    setUser(null);
    navigate("/");
  }

  // Items list for dropdown menu in navbar
  const items = [
    {
      key:'1',
      label:(
        <NavLink to="/dashboard/profile">
          Dashboard
        </NavLink>
      ),

    },
    {
      key:'2',
      label:(
        <button onClick={onLogoutBtnClick}>
          Logout
        </button>
      ),

    },
  ]
  

  return (
    <>
      <div className='bg-white'>
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
          <div className='realtive flex items-center justify-between'>
            <div className='flex items-center'>
              <NavLink
                to='/'
                className='inline-flex items-center mr-8'
              >
                <span className='ml-2 text-2xl font-bold text-green-700'>Elevate Hub</span>
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            {!user && (
              <div className='lg:hidden flex items-center'>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className='text-gray-600 focus:outline-none'
                >
                  <span className='text-2xl'>&#9776;</span>
                </button>
              </div>
            )}

            {/* Desktop Navigation Menu when user is not logged in */}
            {!user ? (
              <ul className='items-center hidden space-x-8 lg:flex'>
                <li>
                  <button
                    className='h-12 px-6 font-medium tracking-wide text-gray border-4 border-green-500 bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300 hover:text-white'
                    onClick={signupMentorBtnClick}
                  >
                    Become a Mentor with Us
                  </button>
                </li>
                <li>
                  <button
                    className='font-medium tracking-wide text-green-500 hover:text-green-700 transition-all duration-300'
                    onClick={signInBtnClick}
                  >
                    Sign In
                  </button>
                </li>
                <li>
                  <button
                    className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300'
                    onClick={signupStudentBtnClick}
                  >
                    Sign Up
                  </button>
                </li>
              </ul>
            ):(
              <Dropdown menu={{items}} trigger={"hover"} arrow>
                <button>
                  {user.name.charAt(0).toUpperCase()}
                </button>
              </Dropdown>
            )}

            {/* when isMobileMenuOpen is true */}
            {!user && isMobileMenuOpen && (
              <div className='absolute top-16 left-0 w-full bg-white shadow-lg p-4 space-y-4 lg:hidden z-10'>
                <div className='py-5 flex flex-col gap-4'>
                  {/* Mentor Section */}
                  <button
                    className='block w-full text-center py-2 font-medium tracking-wide text-gray-800 border-4 border-green-500 bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300 hover:text-white'
                    onClick={signupMentorBtnClick}
                  >
                    Become a Mentor with Us
                  </button>

                  {/* Signin */}
                  <button
                    className='block w-full text-center py-2 font-medium tracking-wide text-green-500 hover:text-green-700 transition-all duration-300'
                    onClick={signInBtnClick}
                  >
                    Sign In
                  </button>

                  {/* SignUp */}
                  <button
                    className='block w-full text-center py-2 font-medium tracking-wide text-white bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300'
                    onClick={signupStudentBtnClick}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;

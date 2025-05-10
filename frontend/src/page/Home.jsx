import React from "react";
import mentor from "../assets/mentor.webp";
import Nav from "../components/Nav";
import { NavLink } from "react-router-dom";
import TopMentors from "../components/TopMentors";
import { heroHome, heroMen, shapeOne, shapeTwo, shapeThree, shapeFour } from "../assets/HomePage";
import MentoringImage from "../assets/About/about-img-3.png";
import FeatureImage from "../assets/feature-img-1.png";
import mentee1 from "../assets/mentee1.png";
import { FaChalkboardTeacher, FaLink, FaBookReader, FaLightbulb, FaArrowRight } from "react-icons/fa";
import { GiUpgrade } from "react-icons/gi";
import features from "../data/features";
import FeaturesCard from "../components/FeaturesCard";

function Home() {
  return (
    <>
      <Nav />
      <div className='bg-white'>
        {/* Hero Section */}
        <section className='relative bg-teal-100 py-16 md:py-20 h-[560px] px-6 md:px-20 mx-auto max-w-screen-full '>
          <img
            className='absolute bottom-0 right-0 h-[520px] opacity-5'
            src={heroHome}
            alt='Mentorship Hub'
          />
          <img
            className='absolute bottom-0 right-0 h-[460px] opacity-90'
            src={shapeFour}
            alt='Graphics 4'
          />
          <img
            className='absolute top-0 left-0 h-[460px] opacity-90 '
            src={shapeOne}
            alt='Graphics 4'
          />
          <img
            className='absolute top-5 left-0 h-[460px] opacity-90'
            src={shapeTwo}
            alt='Graphics 4'
          />
          <img
            className='absolute bottom-10 left-0 h-[160px] opacity-90'
            src={shapeThree}
            alt='Graphics 4'
          />
          <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center'>
            {/* Text Section */}
            <div className='md:w-1/2 text-center md:text-left z-10'>
              {/* learn with mentor button */}
              <div className='bg-white px-2 py-2 w-[260px] rounded-full flex justify-center items-center gap-3 text-sm m-auto md:mx-0 mb-8'>
                <div className='bg-teal-100 px-2 py-2 rounded-full'>
                  <FaChalkboardTeacher className='text-teal-900' />
                </div>
                <div className='text-teal-800'>Learn with best Mentorship</div>
              </div>

              <h1 className='text-md font-extrabold text-teal-800 leading-tight'>
                <span className='text-7xl text-teal-900'>EduHub</span>
                <br />
                <span className='text-2xl md:text-3xl lg:text-4xl text-teal-700'>Get The Best Mentorship From Us</span>
              </h1>
              <p className='mt-6 text-lg md:text-xl lg:text-2xl text-teal-700'>
                Every great achiever was inspired by a great mentor. Find yours today!
              </p>
              <div className='mt-8'>
                <NavLink to='/mentors'>
                  <button className='px-8 py-3 text-white text-lg font-medium bg-teal-600 rounded-lg shadow-lg hover:bg-teal-700 hover:scale-105 transition duration-300'>
                    Match with a Mentor
                  </button>
                </NavLink>
              </div>
            </div>

            {/* Image Section */}
            <div className='md:w-1/2  hidden md:flex justify-center'>
              <div className='relative h-[460px] flex items-end'>
                <img
                  className='max-w-lg rounded-lg z-[3]'
                  src={heroMen}
                  alt='EduHub Mentor Image'
                />
                {/* Decorative Elements */}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className='relative px-6 md:px-20 py-16 md:py-24 bg-teal-700 '>
          <div className='max-w-6xl mx-auto flex flex-col gap-12'>
            <div className='grid gap-8 row-gap-10 grid-cols-2'>
              <div className='bg-white flex-1 flex justify-center items-center gap-3 font-bold text-teal-900  rounded-xl text-xl md:text-4xl py-5 md:py-8'>
                <FaLink className='text-teal-600' /> Connect
              </div>
              <div className='bg-white flex-1 flex justify-center items-center gap-3 font-bold text-teal-900 rounded-xl text-xl md:text-4xl py-5 md:py-8'>
                <GiUpgrade className='text-teal-600' />
                Empower
              </div>
              <div className='bg-white flex-1 flex justify-center items-center gap-3 font-bold text-teal-900 rounded-xl text-xl md:text-4xl py-5 md:py-8'>
                <FaBookReader className='text-teal-600' />
                Learn
              </div>
              <div className='bg-white flex-1 flex justify-center items-center gap-3 font-bold text-teal-900 rounded-xl text-xl md:text-4xl py-5 md:py-8'>
                <FaLightbulb className='text-teal-600' />
                Inspire
              </div>
            </div>

            {/* features button */}
            <div className='flex flex-col gap-2 justify-center items-center mt-10'>
              <div className='bg-white px-2 py-2 w-[130px] rounded-full flex justify-center items-center gap-2 text-sm m-auto md:mx-0 mb-8'>
                <div className='bg-teal-100 px-2 py-2 rounded-full'>
                  <FaChalkboardTeacher className='text-teal-900' />
                </div>
                <div className='text-teal-800'>Features</div>
              </div>
              <span className='text-5xl text-white font-semibold text-center'>What You Looking For?</span>
              <span className='text-3xl text-white text-center'>Discover the perfect match for your learning journey.</span>
            </div>

            {/* Features Card */}
            <div className='grid gap-8 row-gap-10 md:grid-cols-2 lg:grid-cols-3'>
              {features.map((feature, index) => (
                <FeaturesCard
                  key={index}
                  feature={feature}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='bg-gradient-to-br from-teal-800 via-teal-950 to-teal-700 py-8 px-6 md:px-20'>
          <div className='max-w-screen-xl mx-auto py-16 flex flex-row gap-3'>
            <div className='max-w-6xl  mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-0'>
              {/* Image Section */}
              <div className='w-full lg:w-1/2 flex justify-center'>
                <div className='relative w-full flex items-center md:items-end'>
                  <img
                    className=' w-[500px] lg:w-full mx-auto rounded-lg'
                    src={MentoringImage}
                    alt='EduHub Mentor Image'
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className='w-full lg:w-1/2 text-center lg:text-left px-6 lg:px-10'>
                {/* learn with mentor button */}
                <div className='mt-10'>
                  <div className='bg-white px-2 py-2 w-[200px] rounded-full flex justify-center items-center gap-2 text-sm m-auto lg:mx-0 mb-8'>
                    <div className='bg-teal-100 px-2 py-2 rounded-full'>
                      <FaChalkboardTeacher className='text-teal-900' />
                    </div>
                    <div className='text-teal-800'>About Our Platfrom</div>
                  </div>
                </div>

                <h1 className='text-md font-extrabold text-teal-800 leading-tight'>
                  <span className='text-2xl md:text-3xl lg:text-4xl text-teal-50'>Your Path to Success Starts Here</span>
                </h1>
                <p className='mt-6 text-md md:text-md lg:text-lg text-teal-50'>
                  Whether you're looking to sharpen your skills, advance your career, or simply find guidance, our platform bridges the gap between
                  learners and mentors. With personalized mentorship, flexible sessions, and global access, we help you succeed on your terms.
                </p>
                <div className='mt-8'>
                  <NavLink to='/mentors'>
                    <button className='px-8 py-3 text-white text-lg font-medium bg-teal-600 rounded-full shadow-lg hover:bg-teal-700 hover:scale-105 transition duration-300'>
                      Match with a Mentor
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What you looking for section */}
        <section className='px-6 py-10 my-8'>
          <div className='container mx-auto text-center max-w-screen-xl p-16'>
            {/* Heading section */}
            <div className='mb-12'>
              <h2 className='text-4xl font-extrabold text-teal-900'>What You Looking For?</h2>
              <p className='mt-4 text-lg text-gray-700 w-3/4 mx-auto'>
                Join EduHub today and connect with mentors who can guide you towards your goals. Follow our easy steps to start achieving more with
                personalized mentorship.
              </p>
            </div>

            {/* Body Section */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              {/* left section */}
              <div className='border border-gray-200 bg-slate-100 p-4 rounded-xl'>
                <div className='bg-white rounded-lg h-full flex flex-col gap-3 justify-end p-8'>
                  {/* Top section */}
                  <div className='border-b-slate-800 w-full'>
                    <img
                      src={FeatureImage}
                      alt='Fetures image'
                      className='mx-auto'
                    />
                  </div>

                  {/* bottom section */}
                  <div className='border-b-slate-800 w-full border-t-black'>
                    <h3 className='text-2xl font-semibold text-teal-900'>Do You Want To Learn Here?</h3>
                    <p className='text-lg w-3/4 mx-auto my-3 leading-5'>
                      Explore all of our courses and pick your suitable ones to enroll and start learning with us!
                    </p>
                    <div className='flex justify-center'>
                      <NavLink to='/mentors'>
                        <button className='px-8 py-3 text-white text-lg font-medium bg-teal-600 rounded-full shadow-lg hover:bg-teal-700 hover:scale-105 transition duration-300 mt-5 flex justify-center items-center gap-5'>
                          <span>Register Now</span> <FaArrowRight />
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className='border border-gray-200 bg-slate-100 p-4 rounded-xl'>
                <div className='bg-white rounded-lg h-full flex flex-col gap-3 justify-end p-8'>
                  {/* Top section */}
                  <div className='border-b-slate-800 w-full'>
                    <img
                      src={FeatureImage}
                      alt='Fetures image'
                      className='mx-auto'
                    />
                  </div>

                  {/* bottom section */}
                  <div className='border-b-slate-800 w-full border-t-black'>
                    <h3 className='text-2xl font-semibold text-teal-900'>Do You Want To Teach Here?</h3>
                    <p className='text-lg w-3/4 mx-auto my-3 leading-5'>
                      Explore all of our courses and pick your suitable ones to enroll and start learning with us!
                    </p>
                    <div className='flex justify-center'>
                      <NavLink to='/mentors'>
                        <button className='px-8 py-3 text-white text-lg font-medium bg-teal-600 rounded-full shadow-lg hover:bg-teal-700 hover:scale-105 transition duration-300 mt-5 flex justify-center items-center gap-5'>
                          <span>Register Now</span> <FaArrowRight />
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mentor Categories Section */}
        <section className='px-8 py-20 bg-gradient-to-br from-teal-800 via-teal-950 to-teal-700'>
          <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center md:flex-row md:text-left md:items-start'>
              {/* Left Section - Heading & Description */}
              <div className='mb-8 md:w-1/3 md:mr-12'>
                <h2 className='text-4xl font-extrabold text-teal-100'>Find the Right Mentor for You</h2>
                <p className='mt-4 text-lg text-teal-50'>
                  Unlock growth opportunities with expert mentors. Whether you're aiming to boost your career, enhance your skills, or explore new
                  fields, Elevate Hub has the perfect mentor for you.
                </p>
                <a className='inline-flex items-center px-6 py-3 mt-6 text-white transition duration-300 bg-teal-500 rounded-md shadow-md hover:bg-teal-600 hover:shadow-lg cursor-pointer'>
                  Get Started
                  <svg
                    className='w-4 h-4 ml-2'
                    fill='currentColor'
                    viewBox='0 0 12 12'
                  >
                    <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
                  </svg>
                </a>
              </div>

              {/* Right Section - Categories Grid */}
              <div className='grid flex-grow grid-cols-2 gap-6 md:grid-cols-3'>
                {[
                  "Career Coaches",
                  "Business Mentors",
                  "Creative Mentors",
                  "Tech Experts",
                  "Marketing Gurus",
                  "Finance Advisors",
                  "Wellness Coaches",
                  "Education Mentors",
                  "Social Impact Leaders",
                ].map((category, index) => (
                  <a
                    key={index}
                    href='/'
                    onClick={(e) => e.preventDefault()} // Prevents page reload
                    className='block p-4 text-center transition duration-300 border rounded-lg shadow-sm bg-white text-gray-800 
                       border-teal-400 hover:bg-teal-500 hover:text-white hover:shadow-lg cursor-not-allowed'
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>

            {/* Image Section with Overlay */}
            <div className='relative mt-10'>
              <img
                className='object-cover w-full h-56 sm:h-96 rounded-lg shadow-md'
                src={mentee1}
                alt='Mentorship'
              />
              <div className='absolute inset-0 bg-green-900 bg-opacity-30 rounded-lg' />
            </div>
          </div>
        </section>

        {/* TopMentor */}
        <section
          style={{
            background: "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)",
            backgroundSize: "200% 200%",
            animation: "gradientAnimation 6s ease infinite",
          }}
        >
          <div className='container mx-auto'>
            <TopMentors />
          </div>
        </section>

        {/* Pricing Section */}
        <section className='px-10 py-24 text-center bg-teal-50'>
          <h2 className='mb-10 text-5xl font-extrabold text-teal-700'>Flexible & Affordable Plans</h2>
          <p className='max-w-3xl mx-auto mb-8 text-lg text-gray-700'>
            Choose a plan that fits your growth journey. Elevate Hub offers free access for learners, with premium options for advanced mentorship and
            exclusive resources.
          </p>
          <button
            className='px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-teal-500 rounded-full shadow-md hover:bg-teal-600 hover:shadow-lg cursor-pointer'
            disabled
          >
            View Pricing Plans
          </button>
        </section>

        {/* FAQ's */}

        {/* Call to Action */}
        <section className='px-8 py-20 text-center bg-green-100'>
          <div className='max-w-3xl mx-auto'>
            <h2 className='mb-6 text-5xl font-extrabold text-green-600'>Unlock Your Potential with the Right Mentor!</h2>
            <p className='mb-10 text-lg text-gray-700 leading-relaxed'>
              Connect with experienced mentors who can guide you towards your goals. Whether you're starting a new career, learning new skills, or
              growing your network—your journey begins here.
            </p>
            <div className='flex justify-center gap-6'>
              <button
                className='px-8 py-4 text-lg font-semibold text-white transition rounded-lg shadow-md bg-green-500 hover:bg-green-600 hover:scale-105 hover:shadow-xl'
                disabled
              >
                Get Started
              </button>
              <button
                className='px-8 py-4 text-lg font-semibold text-green-600 transition bg-white border-2 border-green-500 rounded-lg hover:bg-green-500 hover:text-white hover:shadow-md'
                disabled
              >
                Explore More
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className='px-8 py-12 text-white bg-gradient-to-r from-gray-800 via-gray-900 to-black'>
          <div className='max-w-6xl mx-auto text-center space-y-6'>
            <h2 className='text-xl font-semibold'>Stay Connected</h2>
            <p className='text-sm text-gray-400'>Follow us on social media for updates, inspiration, and mentorship tips!</p>
            <div className='flex justify-center space-x-6'>
              <a
                href='#'
                className='p-3 rounded-full bg-gray-700 hover:bg-[#00DFBD] transition-all duration-300'
                aria-label='Facebook'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  className='w-6 h-6'
                >
                  <path d='M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.672v-3.622h3.148V8.413c0-3.118 1.902-4.815 4.678-4.815 1.33 0 2.475.099 2.807.143v3.256h-1.923c-1.51 0-1.802.718-1.802 1.771v2.32h3.6l-.468 3.622h-3.132V24h6.144c.73 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z' />
                </svg>
              </a>
              <a
                href='#'
                className='p-3 rounded-full bg-gray-700 hover:bg-[#00DFBD] transition-all duration-300'
                aria-label='Twitter'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  className='w-6 h-6'
                >
                  <path d='M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.173-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.061c0 2.386 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.623-.03-.924-.086.631 1.953 2.445 3.376 4.604 3.416-1.68 1.318-3.809 2.105-6.102 2.105-.394 0-.779-.023-1.17-.067 2.188 1.402 4.768 2.221 7.548 2.221 9.142 0 14.307-7.721 14.307-14.417 0-.219-.005-.436-.015-.653.983-.713 1.833-1.6 2.506-2.614z' />
                </svg>
              </a>
              <a
                href='#'
                className='p-3 rounded-full bg-gray-700 hover:bg-[#00DFBD] transition-all duration-300'
                aria-label='LinkedIn'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  className='w-6 h-6'
                >
                  <path d='M22.23 0H1.77C.79 0 0 .774 0 1.725v20.55C0 23.226.79 24 1.77 24h20.46C23.21 24 24 23.226 24 22.275V1.725C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9.084h3.56v11.368zm-1.78-12.85c-1.14 0-2.06-.927-2.06-2.065a2.063 2.063 0 1 1 4.12 0c0 1.138-.92 2.065-2.06 2.065zm15.172 12.85h-3.56v-5.604c0-1.34-.026-3.062-1.865-3.062-1.865 0-2.152 1.454-2.152 2.959v5.707h-3.56V9.084h3.42v1.548h.05c.476-.9 1.636-1.85 3.366-1.85 3.6 0 4.268 2.368 4.268 5.452v6.218z' />
                </svg>
              </a>
            </div>
            <p className='text-xs text-gray-500'>© 2024 MentorHub. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;

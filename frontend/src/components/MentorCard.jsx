import React from "react";
import noImage from "../assets/no-image.webp";

const MentorCard = ({ mentor }) => {
  const socialLinks = [
    {
      icon: "fab fa-facebook-f",
      link: "mentor?.profile?.social?.facebook",
    },
    {
      icon: "fab fa-github",
      link: "mentor?.profile?.social?.github",
    },
    {
      icon: "fab fa-instagram",
      link: "mentor?.profile?.social?.instagram",
    },
    {
      icon: "fab fa-twitter",
      link: "mentor?.profile?.social?.twitter",
    },
  ];

  return (
    <>
      <div className='max-h-fit shadow-xl border border-teal-300 rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-500 '>
        <div className='bg-white rounded-lg h-full flex flex-col '>
          {/* Card left section */}
          <div className='w-full h-1/2 overflow-hidden rounded'>
            {mentor?.photoUrl ? (
              <img
                className='z-5 object-cover w-full h-full rounded-lg shadow-md'
                src={mentor.photoUrl}
                alt='Mentor Profile Photo'
              />
            ) : (
              <img
                className='z-5 object-cover w-full h-full rounded-lg shadow-md'
                src={noImage}
                alt='Profile Image Not Found'
              />
            )}
          </div>

          {/* Card right section */}
          <div className=' p-5 flex flex-col justify-between items-center h-1/2'>
            <div className='px-2 py-3 text-center'>
              <div className='text-3xl xl:text-5xl font-medium text-gray-900 case capitalize pb-2 hover:text-teal-600'>{mentor?.name}</div>
              <p className='text-teal-700 capitalize text-md xl:text-2xl leading-5'>{mentor?.profile?.title}</p>
            </div>

            {/* Mentor Skill Tag section */}
            <div className='px-2 py-2 flex gap-1 flex-wrap justify-center'>
              {(mentor?.profile?.tags).map((tag, index) => (
                <div
                  key={index}
                  className='bg-teal-500 px-2 py-1 rounded-md max-w-fit text-sm xl:text-xl text-white capitalize '
                >
                  {tag}
                </div>
              ))}
            </div>

            {/* Mentor Profile Section */}
            <div className='px-2 py-2 flex gap-3 flex-wrap justify-center items-center'>
              {socialLinks.map((link, index) => (
                <div
                  key={index}
                  className='border border-teal-500 w-[50px] h-[50px] rounded-full hover:bg-teal-500 flex justify-center items-center'
                >
                  <i className={`fab ${link.icon} text-teal-500 hover:text-white content-center text-center text-2xl w-[50px] h-[50px]`}></i>
                  {/* <div>{link[index].icon}</div>
                <div>{link[index].link}</div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorCard;

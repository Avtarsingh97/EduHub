import React, { useState,useEffect } from "react";
import useMentorsStore from "../store/mentors";
import mentorApi from "../apiManager/mentor";
import MentorCard from "./MentorCard";
import { Button, Spin } from "antd";

const TopMentors = () => {
  const [topMentors, setTopMentors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setMentorsData } = useMentorsStore();


  const selectTopMentor = (mentors)=>{
    const topSelectedMentors = [];
    const totalMentors = mentors.length;
    
    while(topSelectedMentors.length<4 && topSelectedMentors.length<totalMentors){
      const randomIndex= Math.floor(Math.random()*totalMentors);
      const randomMentor = mentors[randomIndex];
      if(!topSelectedMentors.includes(randomMentor)){
        topSelectedMentors.push(randomMentor);
      }
    }
    return topSelectedMentors;
  }



  const fetchAllMentors = async()=>{
    try {
      const response = await mentorApi.getAllMentors();
      console.log(response)
      const allMentors = response?.data?.mentors || [];
      setMentorsData(allMentors);
      setTopMentors(selectTopMentor(allMentors));
    } catch (error) {
      console.log(error);
      
    }
  }
  

  useEffect(()=>{
    fetchAllMentors();
  },[])

  return (
    <>
      <div className="h-[200px]">
        <h1>Top Mentors</h1>
        <div>
      
          {topMentors.map((mentor) => (
            <li>{mentor.name}</li>
            // return (
            //   <MentorCard
            //     mentor={mentor}
            //     key={mentor?._id}
            //   />
            // );
          ))}
        </div>
      </div>
    </>
  );
};

export default TopMentors;

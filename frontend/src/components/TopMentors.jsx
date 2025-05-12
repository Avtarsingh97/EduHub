import React, { useState, useEffect } from "react";
import useMentorsStore from "../store/mentors";
import mentorApi from "../apiManager/mentor";
import MentorCard from "./MentorCard";
import { Button, Spin } from "antd";

const TopMentors = () => {
  const [topMentors, setTopMentors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setMentorsData } = useMentorsStore();

  const selectTopMentor = (mentors) => {
    const topSelectedMentors = [];
    const totalMentors = mentors.length;

    while (topSelectedMentors.length < 4 && topSelectedMentors.length < totalMentors) {
      const randomIndex = Math.floor(Math.random() * totalMentors);
      const randomMentor = mentors[randomIndex];
      if (!topSelectedMentors.includes(randomMentor)) {
        topSelectedMentors.push(randomMentor);
      }
    }
    return topSelectedMentors;
  };

  const fetchAllMentors = async () => {
    try {
      setLoading(true);
      const response = await mentorApi.getAllMentors();
      const allMentors = response?.data?.mentors || [];
      setMentorsData(allMentors);
      setTopMentors(selectTopMentor(allMentors));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllMentors();
  }, []);

  return (
    <>
      <div className='w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8'>
          {!loading ? (
            topMentors.map((mentor) => {
              return (
                <MentorCard
                  mentor={mentor}
                  key={mentor?._id}
                />
              );
            })
          ) : (
            <div>loading....</div>
          )}
        </div>
      </div>
    </>
  );
};

export default TopMentors;

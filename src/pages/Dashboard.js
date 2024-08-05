import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleCard from "../components/SingleCard";
import GoldCoin from "../components/GoldCoin";
import Confetti from "react-confetti-boom";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";


import RadialProgressBar from "../components/RadialProgressBar";

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [modalEvents, setModalEvents] = useState([]);
  const [progress, setProgress] = useState(70);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/dashboard");
        // Handle response data if needed
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-4 bg-gray-100">
      <div className="text-3xl font-semibold pt-4 pb-16">
        Hai K.V.Komal Akhil
      </div>
      {/* <h1 className="text-2xl font-semibold">Progress</h1>
        <div className="border border-black-100 mb-4"></div> */}
      <div className="flex justify-evenly gap-16 h-[20vh]">
        <div
          className="flex justify-evenly p-4 items-center gap-2 mb-4 w-1/3 border rounded-lg shadow-xl hover:shadow-2xl"
          onClick={() => {
            navigate("/LearningPath");
          }}
        >
          <div className="text-2xl font-semibold">Course Completed</div>
          {/* Vertical line */}
          <div className="h-[80%] border-l border-gray-400"></div>
          {/* Radial Progress Bar */}
          <RadialProgressBar progress={progress} size={150} strokeWidth={12} />
        </div>
        <div className="flex justify-evenly p-4 items-center gap-2 mb-4 w-1/3 border rounded-lg shadow-xl hover:shadow-2xl">
          <div className="text-2xl font-semibold">Assignments Submitted</div>
          {/* Vertical line */}
          <div className="h-[80%] border-l border-gray-400"></div>
          {/* Radial Progress Bar */}
          <RadialProgressBar progress={50} size={150} strokeWidth={12} />
        </div>
      </div>
      <div className="mb-2">
        {/* <h1 className="text-2xl font-semibold">Enrolled Courses</h1>
        <div className="border border-black-100 mb-4"></div> */}
        <div className="flex items-center h-[40vh]">
          <div className="text-4xl font-semibold w-1/3 text-center fade-in-left">
            Enrolled Courses
          </div>
          <div className="h-full border border-gray-100 bg-black"></div>
          <div className="flex justify-center items-center bg-white w-2/3 h-full rounded-md">
            <Carousel />
          
            
          </div>
        </div>
      </div>
      <div className="">
        {/* <h1 className="text-2xl font-semibold">Other Courses</h1>
        <div className="border border-black-100 mb-4"></div> */}
        <div className="flex items-center h-[40vh]">
          <div className="flex justify-center items-center bg-white w-2/3 h-full rounded-md">
          <Carousel />
           
           
          </div>
          <div className="h-full border border-gray-100 bg-black"></div>
          <div className="text-4xl font-semibold w-1/3 text-center fade-in-right">
            Other Courses
          </div>
        </div>
      </div>
      <div
        className="fixed bottom-4 right-4"
        onClick={() => {
          navigate("/Coins");
        }}
      >
        {/* <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full shadow-lg"> */}
        <GoldCoin />
        {/* </button> */}
      </div>
    </div>
  );
}

export default Dashboard;

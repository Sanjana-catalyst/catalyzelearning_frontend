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
  const [size, setSize] = useState(100); // Default size for RadialProgressBar
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

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setSize(100); // sm
      else if (width < 768) setSize(120); // md
      else setSize(150); // lg and above
    };

    handleResize(); // Set initial size based on current width
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="px-4 bg-gray-100">
      <div className="text-2xl sm:text-3xl font-semibold pt-4 pb-8 sm:pb-16">
        Hai K.V.Komal Akhil
      </div>

      <div className="flex flex-col md:flex-row justify-evenly gap-8 sm:gap-16 h-[30vh] sm:h-[20vh]">
        <div
          className="flex flex-col md:flex-row justify-evenly p-4 items-center gap-2 mb-4 w-full md:w-1/3 border rounded-lg shadow-xl hover:shadow-2xl cursor-pointer"
          onClick={() => navigate("/LearningPath")}
        >
          <div className="text-xl sm:text-2xl font-semibold">Course Completed</div>
          <div className="hidden md:block h-[80%] border-l border-gray-400"></div>
          <RadialProgressBar progress={progress} size={size} strokeWidth={10} />
        </div>
        <div className="flex flex-col md:flex-row justify-evenly p-4 items-center gap-2 mb-4 w-full md:w-1/3 border rounded-lg shadow-xl hover:shadow-2xl">
          <div className="text-xl sm:text-2xl font-semibold">Assignments Submitted</div>
          <div className="hidden md:block h-[80%] border-l border-gray-400"></div>
          <RadialProgressBar progress={50} size={size} strokeWidth={10} />
        </div>
      </div>

      <div className="mb-2">
        <div className="flex flex-col md:flex-row items-center h-[40vh] gap-4">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold w-full md:w-1/3 text-center fade-in-left">
            Enrolled Courses
          </div>
          <div className="hidden md:block h-full border border-gray-100 bg-black"></div>
          <div className="flex justify-center items-center bg-white w-full md:w-2/3 h-full rounded-md">
            <Carousel />
          </div>
        </div>
      </div>

      <div className="mb-2">
        <div className="flex flex-col md:flex-row items-center h-[40vh] gap-4">
          <div className="flex justify-center items-center bg-white w-full md:w-2/3 h-full rounded-md">
            <Carousel />
          </div>
          <div className="hidden md:block h-full border border-gray-100 bg-black"></div>
          <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold w-full md:w-1/3 text-center fade-in-right">
            Other Courses
          </div>
        </div>
      </div>

      <div
        className="fixed bottom-4 right-4"
        onClick={() => navigate("/Coins")}
      >
        <GoldCoin />
      </div>
    </div>
  );
}

export default Dashboard;

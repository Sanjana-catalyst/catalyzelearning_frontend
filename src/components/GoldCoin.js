import React from "react";
import { useNavigate } from "react-router-dom";

const GoldCoin = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-yellow-500 rounded-full border-4 border-yellow-600 shadow-lg hover:scale-105 transition-transform duration-200"
      onClick={() => navigate("/coins")}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-black text-sm sm:text-md md:text-lg font-bold">
          60 CC
        </span>
      </div>
      <div
        className="absolute inset-0 border border-yellow-800 rounded-full"
        style={{ top: "5%", left: "5%", right: "5%", bottom: "5%" }}
      ></div>
      <div
        className="absolute inset-0 border-2 border-yellow-700 rounded-full"
        style={{ top: "10%", left: "10%", right: "10%", bottom: "10%" }}
      ></div>
    </div>
  );
};

export default GoldCoin;

import React from "react";
import { useNavigate } from "react-router-dom";
const GoldCoin = () => {
    const navigate = useNavigate();
  return (
    <div className="relative w-24 h-24 bg-yellow-500 rounded-full border-4 border-yellow-600 shadow-lg hover:scale-105" onClick={()=>{navigate("/Coins")}} >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-black text-md font-bold">60 CC</span>
      </div>
      <div
        className="absolute inset-0 border border-yellow-800 rounded-full"
        style={{ top: "5px", left: "5px", right: "5px", bottom: "5px" }}
      ></div>
      <div
        className="absolute inset-0 border-2 border-yellow-700 rounded-full"
        style={{ top: "10px", left: "10px", right: "10px", bottom: "10px" }}
      ></div>
    </div>
  );
};

export default GoldCoin;

import React, { useState } from "react";
import CatalyzeLogo from "../assets/Catalyze logo.png";
import FilledButton from "./FilledButton";
import Login from "../pages/Login";
import { useNavigate } from "react-router-dom";
import OutlineButton from "./OutlineButton";
import { TfiMenu } from 'react-icons/tfi';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center" >
    <div className="flex w-full justify-between items-center py-2 px-4 border-b">
      <div className="flex w-[50%] items-center ">
        <div className="flex items-center gap-2 ">
          <img src={CatalyzeLogo} width={60} height={60}  />
          <div className="text-3xl">Catalyze</div>
        </div>
      </div>
      <div className="flex w-[30%]">
        <div className="flex w-full justify-evenly items-center">
          <button className="text-xl hover:underline hover:underline-offset-4 hover:decoration-solid duration-300">Home</button>
          <button className="text-xl hover:underline hover:underline-offset-4 hover:decoration-solid duration-300">About us</button>
          <button className="text-xl hover:underline hover:underline-offset-4 hover:decoration-solid duration-300">Contact us</button>
        </div>
        <FilledButton title="Login" functionality={() => navigate("/Login")} />
      </div>
    </div>
    </div>
  );
};

export default Navbar;

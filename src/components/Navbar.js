import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TfiMenu } from 'react-icons/tfi';
import CatalyzeLogo from "../assets/Catalyze logo.png";
import FilledButton from "./FilledButton";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const navigateTo = (path) => {
    navigate(path);
    setIsDropdownOpen(false); // Close the dropdown after navigation
  };

  return (
    <div className="flex justify-center">
      <div className="flex w-full justify-between items-center py-2 px-4 border-b">
        <div className="flex w-[50%] items-center">
          <div className="flex items-center gap-2">
            <img src={CatalyzeLogo} width={60} height={60} alt="Catalyze Logo" />
            <div className="text-3xl">Catalyze</div>
          </div>
        </div>
        <div className="hidden md:flex gap-5  md:mr-[1.5%] w-[30%]">
          <div className="flex w-full justify-evenly items-center">
            <button onClick={() => navigateTo("/")} className="text-lg hover:bg-black hover:rounded-full hover:text-white px-4 py-2 duration-300">Home</button>
            <button onClick={() => navigateTo("/about")} className="text-lg hover:bg-black hover:rounded-full hover:text-white px-4 py-2 duration-300">About us</button>
            <button onClick={() => navigateTo("/contact")} className="text-lg hover:bg-black hover:rounded-full hover:text-white px-4 py-2 duration-300">Contact us</button>
            <FilledButton title="Login" functionality={() => navigateTo("/Login")} />
          </div>
         
        </div>
        <div className="md:hidden flex items-center relative" ref={dropdownRef}>
          <TfiMenu
            className="text-3xl text-black cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
          {isDropdownOpen && (
            <div className="absolute top-full right-0 bg-white shadow-md w-48 mt-2 rounded-md flex flex-col">
              <button
                onClick={() => navigateTo("/")}
                className="py-2 px-4 text-lg text-black hover:bg-gray-100 focus:outline-none"
              >
                Home
              </button>
              <button
                onClick={() => navigateTo("/about")}
                className="py-2 px-4 text-lg text-black hover:bg-gray-100 focus:outline-none"
              >
                About us
              </button>
              <button
                onClick={() => navigateTo("/contact")}
                className="py-2 px-4 text-lg text-black hover:bg-gray-100 focus:outline-none"
              >
                Contact us
              </button>
              <button
                onClick={() => navigateTo("/Login")}
                className="py-2 px-4 text-lg text-black hover:bg-gray-100 focus:outline-none"
              >
                Login
              </button>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

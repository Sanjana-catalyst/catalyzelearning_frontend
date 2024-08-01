import React, { useState } from "react";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import CatalyzeLogo from "../assets/Catalyze logo.png";
import FilledButton from "../components/FilledButton";
import { useNavigate } from "react-router-dom";
import AnimatedWords from "../animations/AnimatedWords";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showpassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const words = ['Ideas','Technologies','Learning','Opportunities'];
  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", { username, password });
    } catch (error) {}
  };

  return (
    <div className="flex h-screen w-full items-center justify-evenly">
      {/* <img src={CatalyzeLogo} className="opacity-20 skew-y-" width={400} height={400}/> */}
      <div>
        <div className="text-6xl font-bold">
          Strengthen your career with
          <div className="mt-4">Pool of <span className="text-gray-500"><AnimatedWords words={words} /></span></div>
        </div>
        <br />
      <br/>
        <FilledButton title="Know More About Us" functionality={()=>{navigate("/Home")}}/>
      </div>
      <form className="flex flex-col w-1/4 gap-4 border rounded-md p-4 shadow-xl">
        <div className="text-2xl font-semibold text-center">Login Page</div>
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="border px-2 py-2 rounded-md w-full outline-none"
          />
        </div>
        <div>
          <label>Password</label>
          <div className="flex items-center gap-2 border px-2 py-1 rounded-md focus:border focus:border-black">
            <input
              type={showpassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full outline-none"
            />
            <div onClick={() => setShowPassword(!showpassword)}>
              {showpassword ? <FaEye size={30} /> : <FaEyeSlash size={30} />}
            </div>
          </div>
        </div>
        <button className="bg-black text-white px-2 py-2 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

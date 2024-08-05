import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import FilledButton from "../components/FilledButton";
import { useNavigate } from "react-router-dom";
import AnimatedWords from "../animations/AnimatedWords";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const words = ['Ideas', 'Technologies', 'Learning', 'Opportunities'];

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", { username, password });
      // Handle successful login
    } catch (error) {
      // Handle login error
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full items-center justify-center p-4 gap-8 lg:gap-16">
      {/* Text Section */}
      <div className="text-center lg:text-left lg:w-1/2 max-w-md mx-auto lg:mx-0 lg:mr-8">
        <div className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-4">
          Strengthen your career with
          <div className="mt-4">Pool of <span className="text-gray-500"><AnimatedWords words={words} /></span></div>
        </div>
        <FilledButton title="Know More About Us" functionality={() => { navigate("/Home") }} />
      </div>
      {/* Login Form */}
      <form className="flex flex-col w-full lg:w-[400px] max-w-md gap-4 border rounded-md p-4 shadow-xl lg:ml-4 xl:ml-8">
        <div className="text-2xl font-semibold text-center">Login Page</div>
        <div>
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="border px-2 py-2 rounded-md w-full outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <div className="flex items-center gap-2 border px-2 py-1 rounded-md focus:border focus:border-black">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={handleLogin}
          className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

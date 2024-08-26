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
  const [error, setError] = useState(null); // State for error messages
  const navigate = useNavigate();

  const words = ['Ideas', 'Technologies', 'Learning', 'Opportunities'];

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/login", { username, password });
      if (response.status === 200) {
        // Redirect to another page if login is successful
        localStorage.setItem('token', response.data.token);
        navigate("/home"); // Replace "/dashboard" with the desired route
      } else {
        // Set error message if login fails
        setError("Invalid username or password. Please try again.");
      }
    } catch (error) {
      // Handle other errors (e.g., network issues)
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="h-[100vh]">
    <div className="flex flex-col md:flex-row h-[100vh] w-full items-center justify-center p-4 md:p-8 overflow-hidden">
      <div className="md:w-1/2 lg:w-2/5 xl:w-1/3  max-w-lg text-center md:text-left mb-8 md:mb-0 md:mr-12 lg:mr-16">
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Strengthen your career with
          <div className="mt-4 text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl">
            <div>Pool of</div>
            <div className="text-gray-500 space-y-2 mt-2 text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl ">
              <AnimatedWords words={words} />
            </div>
          </div>
        </div>
        <br />
        <br />
        <FilledButton title="Know More About Us" functionality={() => { navigate("/Home") }} />
      </div>
      <form
        className="flex flex-col w-full sm:w-3/4 md:w-1/2 lg:w-1/3 gap-4 border rounded-md p-4 shadow-xl"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <div className="text-xl sm:text-2xl font-semibold text-center">Login Page</div>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>} {/* Display error message */}
        <div>
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="border px-2 py-2 rounded-md w-full outline-none text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <div className="flex items-center gap-2 border px-2 py-1 rounded-md focus:border focus:border-black">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full outline-none text-sm"
            />
            <div onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
              {showPassword ? <FaEye size={24} /> : <FaEyeSlash size={24} />}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md text-lg hover:bg-gray-800 duration-300"
        >
          Login
        </button>
      </form>
    </div>
    </div>
  );
}

export default Login;

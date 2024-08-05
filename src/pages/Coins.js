import React from "react";
import Confetti from "react-confetti";
import "../css/ConfettiDisplay.css"; // Import the custom CSS for gold confetti

const ConfettiDisplay = () => {
  return (
    <div className="relative h-screen w-full bg-gray-100 flex flex-col items-center justify-center">
      <Confetti
        className="gold-confetti"
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={200} // Adjust the number of confetti pieces as needed
      />
      <div className="flex flex-col items-center">
        <div className="relative w-72 h-72 md:w-60 md:h-60 sm:w-48 sm:h-48 bg-yellow-500 rounded-full border-4 border-yellow-600 shadow-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-black text-2xl md:text-xl sm:text-lg font-bold">60 CC</span>
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
        <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold text-blue-500 mt-8">
          Congratulations!
        </h1>
        <p className="text-lg md:text-base sm:text-sm text-gray-700 mt-4">
          You've earned some golden coins! 🎉
        </p>
        <p className="text-lg md:text-base sm:text-sm text-gray-700">
          These golden coins can be used to reduce the cost of other courses.
          Check your account for more details on how to redeem them!
        </p>
      </div>
    </div>
  );
};

export default ConfettiDisplay;

// src/components/Roadmap.js
import React, { useState } from "react";
import "../css/LearningPath.css"; // Import CSS file for custom styles

const milestones = [
  {
    id: 1,
    title: "Introduction to React",
    description: "Basics of React and JSX",
    date: "Week 1",
  },
  {
    id: 2,
    title: "State Management",
    description: "Understanding state and props",
    date: "Week 2",
  },
  {
    id: 3,
    title: "Routing",
    description: "Introduction to React Router",
    date: "Week 3",
  },
  {
    id: 4,
    title: "Advanced Topics",
    description: "Hooks, Context API, and more",
    date: "Week 4",
  },
  {
    id: 5,
    title: "Project",
    description: "Build a final project using React",
    date: "Week 5",
  },
  {
    id: 6,
    title: "Introduction to React",
    description: "Basics of React and JSX",
    date: "Week 1",
  },
  {
    id: 7,
    title: "State Management",
    description: "Understanding state and props",
    date: "Week 2",
  },
  {
    id: 8,
    title: "Routing",
    description: "Introduction to React Router",
    date: "Week 3",
  },
  {
    id: 9,
    title: "Advanced Topics",
    description: "Hooks, Context API, and more",
    date: "Week 4",
  },
  {
    id: 10,
    title: "Project",
    description: "Build a final project using React",
    date: "Week 5",
  },
];

const LearningPath = () => {
  const [currentMilestoneId, setCurrentMilestoneId] = useState(5);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Course Roadmap</h2>
      <div className="relative">
        <div className="border-l-2 border-gray-300 absolute left-1/2 transform -translate-x-1/2 h-full"></div>
        {milestones.map((milestone) => (
          <div
            key={milestone.id}
            className={`relative flex items-center mb-8 ${
              milestone.id === currentMilestoneId ? "current-milestone" : ""
            }`}
          >
            <div
              className={`absolute w-4 h-4 rounded-full -left-2.5 border-2 border-white ${
                milestone.id <= currentMilestoneId
                  ? "bg-green-500"
                  : "bg-blue-500"
              } ${milestone.id === currentMilestoneId ? "beep-effect" : ""}`}
            ></div>
            <div
              className={`ml-8 ${
                milestone.id <= currentMilestoneId
                  ? "text-gray-500"
                  : "text-gray-600"
              }`}
            >
              <h3
                className={`text-lg font-semibold ${
                  milestone.id <= currentMilestoneId ? "text-gray-400" : ""
                }`}
              >
                {milestone.title}
              </h3>
              <p>{milestone.description}</p>
              <span className="text-sm">{milestone.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;

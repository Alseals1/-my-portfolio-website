import React from "react";
import Intro from "./Intro";

const HomeSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-200">
      <p className="text-5xl font-bold mb-4">
        Welcome to My Digital Playground!
      </p>
      <a
        href="#resume"
        className="mt-6 bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        My Resume
      </a>
    </div>
  );
};

export default HomeSection;

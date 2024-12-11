import React from "react";

const HomeSection = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-gray-200
                 "
    >
      <div className="flex justify-center items-center"></div>
      <p className="text-3xl sm:text-5xl font-bold mb-4 text-center">
        Welcome to My Digital Playground!
      </p>
      <p className="text-base sm:text-xl mb-6 mx-8 sm:mx-32 text-gray-500 text-center">
        In a world where innovation knows no bounds, I invite you to step into
        my journey—a thrilling adventure fueled by passion, creativity, and the
        relentless pursuit of knowledge. This is more than just a website; it’s
        a <strong className="text-red-500">showcase of my skills</strong>, a{" "}
        <strong className="text-red-500">celebration of my projects</strong>,
        and a{" "}
        <strong className="text-red-500">platform to share my story</strong>{" "}
        with you, the audience.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#experience"
          className="mt-4 sm:mt-6 bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded transition duration-300 text-center"
        >
          Experience
        </a>
        <a
          href="/AlandisResumeNov2024.pdf"
          className="mt-4 sm:mt-6 bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded transition duration-300 text-center"
          download="Resume"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default HomeSection;

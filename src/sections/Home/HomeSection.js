import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const HomeSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-200 mb-8">
      <div className="flex justify-center items-center">
        <DotLottieReact
          src="./a1.json"
          loop
          autoplay
          style={{ width: 300, height: 300 }}
        />
      </div>
      <p className="text-5xl font-bold mb-4">
        Welcome to My Digital Playground!
      </p>
      <p className="text-xl mb-6 mx-32 text-gray-500">
        In a world where innovation knows no bounds, I invite you to step into
        my journey—a thrilling adventure fueled by passion, creativity, and the
        relentless pursuit of knowledge. This is more than just a website; it’s
        a <strong className="text-red-500">showcase of my skills</strong>, a
        <strong className="text-red-500">celebration of my projects</strong>,
        and a{" "}
        <strong className="text-red-500">platform to share my story</strong>{" "}
        with you, the audience.
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

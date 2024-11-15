import React from "react";

const Contact = () => {
  return (
    <div className="text-gray-200 items-center py-2" id="contact">
      <div className="h-1 w-full bg-red-950"></div>
      <div className="flex flex-col items-center sm:items-center  text-gray-200 p-1 sm:p-1">
        <div className="text-2xl md:text-2xl sm:text-base font-bold mb-1">
          Let’s Connect!
        </div>
        <p className="text-base sm:text-sm mb-4">I'd love to hear from you!</p>

        <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 sm:items-start items-center">
          <a
            href="tel:+1234567890"
            className="flex sm:items-start space-x-2 transition duration-300 transform hover:scale-105"
          >
            <span className="bg-black p-2 rounded-full">
              <i className="fas fa-phone"></i>
            </span>
            <span className="text-sm sm:text-base">Phone: 205 394 7003</span>
          </a>

          <a
            href="mailto:1seals.alandis@gmail.com"
            className="flex items-center sm:items-start space-x-2 transition duration-300 transform hover:scale-105"
          >
            <span className="bg-black p-2 rounded-full">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="text-sm sm:text-base">
              Email: 1seals.alandis@gmail.com
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/alandisseals/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 transition duration-300 transform hover:scale-105"
          >
            <span className="bg-black p-2 rounded-full">
              <i className="fab fa-linkedin"></i>
            </span>
            <span className="text-sm sm:text-base">LinkedIn</span>
          </a>

          <a
            href="https://github.com/Alseals1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 transition duration-300 transform hover:scale-105"
          >
            <span className="bg-black p-2 rounded-full">
              <i className="fab fa-github"></i>
            </span>
            <span className="text-sm sm:text-base">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

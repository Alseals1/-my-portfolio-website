import React from "react";

const Contact = () => {
  return (
    <div className=" text-gray-200 bg-red-950 item-center" id="contact mb-8">
      <div
        className="flex flex-col items-center text-gray-200 p-8"
        id="contact"
      >
        <div className="text-4xl font-bold mb-4">Let’s Connect!</div>
        <p className="text-lg mb-6">I'd love to hear from you!</p>

        <div className="flex flex-row space-x-6 ">
          <a
            href="tel:+1234567890"
            className="flex items-center space-x-2 transition duration-300 transform hover:scale-105"
          >
            <span className="bg-black p-2 rounded-full">
              <i className="fas fa-phone"></i>
            </span>
            <span>Phone: 205 394 7003</span>
          </a>

          <a
            href="mailto:1seals.alandis@gmail.com"
            className="flex items-center space-x-2 transition duration-300 transform hover:scale-105"
          >
            <p className="bg-black p-2 rounded-full">
              <i className="fas fa-envelope"></i>
            </p>
            <span>Email: 1seals.alandis@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/alandisseals/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center transition duration-300 transform hover:scale-105"
          >
            <span className="bg-black p-2 rounded-full">
              <i className="fab fa-linkedin"></i>
            </span>
            <span> LinkedIn</span>
          </a>

          <a
            href="https://github.com/Alseals1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2  transition duration-300 transform hover:scale-105"
          >
            <span className="bg-black p-2 rounded-full">
              <i className="fab fa-github"></i>
            </span>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

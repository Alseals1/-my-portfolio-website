import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const handleLearnMoreClick = () => {
    console.log(`/projects/${project.id}`);
  };

  return (
    <div className="rounded-lg shadow-red-400 shadow-md overflow-hidden h-72 w-64 mx-auto bg-gray-800">
      <img
        src={project.logo}
        alt={`${project.title} logo`}
        className="h-36 w-full object-cover rounded-t-lg"
      />
      <div className="text-lg font-bold mt-4 mb-2 text-gray-300 px-4 text-center">
        {project.title}
      </div>
      <p className="text-gray-400 mx-4 mb-4 text-center">
        <Link
          to={`/projects/project/${project.id}`}
          className="text-red-500 font-semibold"
          onClick={handleLearnMoreClick}
        >
          Learn more
        </Link>
      </p>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const handleLearnMoreClick = () => {
    console.log(`/projects/${project.id}`);
  };

  return (
    <div className="rounded-lg shadow-red-400 shadow-md ">
      <img
        src={project.logo}
        alt={`${project.title} logo`}
        className="h-32 w-full object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2 text-gray-300">{project.title}</h3>
      <p className="text-gray-300 mx-4 mb-4">
        <Link
          to={`/projects/project/${project.id}`}
          className="text-red-500 px-10"
          onClick={handleLearnMoreClick}
        >
          Learn more
        </Link>
      </p>
    </div>
  );
};

export default ProjectCard;

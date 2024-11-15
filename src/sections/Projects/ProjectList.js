import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

export const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="p-4 sm:mx-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="w-full sm:w-80 flex-shrink-0">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

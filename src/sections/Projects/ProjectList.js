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
    <div className="overflow-x-auto max-w-full p-4">
      <div className="flex space-x-4">
        {projects.map((project) => (
          <div key={project.id} className="w-80 flex-shrink-0">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

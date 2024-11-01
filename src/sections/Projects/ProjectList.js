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
    <div className=" mx-20 p-4">
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        {projects.map((project) => (
          <div key={project.id} className="w-80 flex-shrink-0">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

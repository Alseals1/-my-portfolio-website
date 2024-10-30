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
    <div className="flex overflow-x-auto mx-32 py-4 ">
      {projects.map((project) => (
        <div key={project.id} className="flex-shrink-0">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

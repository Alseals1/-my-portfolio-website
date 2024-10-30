import React, { useEffect, useState } from "react";
import { ProjectList } from "./ProjectList";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="projects-section items-center justify-center">
      <p className="text-3xl text-white font-bold mb-4 text-center">
        My Projects
      </p>
      <p className="text-xl mb-6 mx-32 text-gray-500">
        Prepare to be inspired as I unveil a collection of projects that push
        boundaries and challenge the status quo. Here, you’ll find cutting-edge
        applications and innovative solutions designed not just to function but
        to <strong className="text-red-500">thrill and excite</strong>. Join me
        as I dive into the nitty-gritty of my creative process, showcasing the
        techniques, tools, and technologies that fuel my ambitions.
      </p>
      <div className="">
        <ProjectList />
      </div>
    </div>
  );
};

export default ProjectsSection;

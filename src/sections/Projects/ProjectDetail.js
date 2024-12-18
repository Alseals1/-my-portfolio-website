import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Fetch projects data
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedProject = data.find(
          (proj) => proj.id === parseInt(projectId)
        );
        setProject(selectedProject);
      });
  }, [projectId]);

  if (!project) return <p>Loading...</p>;

  return (
    <div className="text-gray-200">
      <Link to="/" className="text-red-500 mb-4 block text-start pl-8 pt-8">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="mb-8text-3xl">{project.detailDescriptionTitle}</p>

      {/* First Row: Image on the right, text on the left */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="md:w-1/2 md:pr-4 flex items-center text-2xl">
          <p>{project.fullDescription}</p>
        </div>
        <div className="md:w-1/2">
          <img
            src={project.images[0]}
            alt={`${project.title} screenshot 1`}
            className="w-1/2 rounded-lg shadow-lg bg-red-900"
          />
        </div>
      </div>

      {/* Second Row: Image on the left, text on the right */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="md:w-1/2">
          <img
            src={project.images[1]}
            alt={`${project.title} screenshot 2`}
            className="w-1/2 rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-4 flex items-center text-2xl">
          <p>{project.secondFullDescription}</p>
        </div>
      </div>

      <div className="items-center w-full">{/* <ProjectList /> */}</div>
    </div>
  );
};

export default ProjectDetail;

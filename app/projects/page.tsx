"use client";

import { ProjectItem } from "@/components/ProjectItem";

const Projects = () => {
  return (
    <>
      <div className="max-w-8xl w-full justify-center flex flex-wrap sm:pt-10 gap-5">
        <p className="text-2xl mb-10 lg:text-2xl lg:mb-10 title">
		Some of My Recent Project Works:
        </p>
      </div>
      <div className="max-w-8xl w-full justify-center flex flex-wrap sm:pt-10 gap-5">
        <ProjectItem />
      </div>
    </>
  );
};

export default Projects;

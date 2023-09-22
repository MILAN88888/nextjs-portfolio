'use client'

import { ProjectItem } from "@/components/ProjectItem";

const Projects = () => {
  return (
    <div className="max-w-8xl w-full justify-center flex flex-wrap sm:pt-10 gap-5">
		<ProjectItem/>
    </div>
  );
};

export default Projects;

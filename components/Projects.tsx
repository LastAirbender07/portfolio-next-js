import { projects } from "@/data";
import React from "react";
import { ContainerPin } from "./PinContainer";

const Projects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of
        <span className="text-purple"> recent projects</span>
      </h1>
      <div className="grid gap-6 p-4 items-center justify-center sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id}>
            <ContainerPin
              title={project.title}
              link={project.link}
              des={project.des}
              img={project.img}
              iconLists={project.iconLists}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

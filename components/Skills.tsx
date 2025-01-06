import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { skills } from "@/data";

const Skills = () => {
  return (
    <div>
    <h2 className="pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Skills
    </h2>
    <HoverEffect items={skills} />
  </div>
  );
};

export default Skills;

import { Atom } from "lucide-react";
import React from "react";
import Education from "./Education";
import Skills from "./Skills";

const Others = () => {
  return (
    <div id="education" className="pb-5 px-10 w-full">
      <div className="flex items-center justify-center gap-5 mb-5">
        <Atom size={40} />
        <h1 className="heading text-purple"> Miscellaneous</h1>
      </div>

      <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-1/2 pr-0 lg:pr-5 sm:pr-0">
          <Education />
        </div>
        <div className="w-full lg:w-1/2">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Others;

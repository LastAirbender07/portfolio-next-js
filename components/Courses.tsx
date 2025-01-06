import { companies, courses } from "@/data";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Courses = () => {
  return (
    <div id="courses" className="py-10">
      <h1 className="heading">
        Courses and
        <span className="text-purple"> Certifications</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={courses}
            direction="right"
            speed="normal"
          />

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12 max-lg:mt-10">
            {companies.map((company) => (
                <div key={company.id} className="flex md:max-w-60 max-w-32 gap-2">
                    <img src={company.img} alt={company.name} className="md:w-10 w-5" />
                    <img src={company.nameImg} alt={company.name} className="md:w-24 w-20" />
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

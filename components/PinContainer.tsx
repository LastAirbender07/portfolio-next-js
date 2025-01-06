"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { Navigation } from "lucide-react";

export function ContainerPin({
  title,
  link,
  des,
  img,
  iconLists,
}: {
  title: string;
  link: string;
  des: string;
  img: string;
  iconLists: string[];
}) {
  return (
    <div className="h-[35rem] w-full flex items-center justify-center">
      <PinContainer title={title} href={link}>
        <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[30vh] lg:h-[35vh] mb-10">
          <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
            <img src="/bg.png" alt="bgimg" />
            <img src={img} alt="cover" className="mt-2 px-5 z-10 absolute bottom-0" />
          </div>
        </div>

        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
          {title}
        </h1>

        <p
          className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
          style={{
            color: "#BEC1DD",
            margin: "1vh 0",
          }}
        >
          {des}
        </p>

        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {iconLists.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}
              >
                <img src={icon} alt="icon5" className="p-2" />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <p className="flex lg:text-xl md:text-xs text-sm text-purple">
              Check Live Site
            </p>
            <Navigation className="ms-3" color="#CBACF9" />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}

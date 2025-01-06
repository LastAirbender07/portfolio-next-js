"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { Navigation } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-10">
      {/* Background Effects */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen absolute"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full absolute"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw] absolute"
          fill="blue"
        />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Real Content */}
      <div className="relative z-10 flex flex-col gap-4 lg:flex-row justify-center my-0">
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center lg:w-1/2">
          <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          Fortifying the Digital World with Next-Level Cybersecurity
          </h1>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Empowering Digital Security with Cutting-Edge Cybersecurity Solutions"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Gokkulamoorthy S R
          </p>
          <p className="text-center md:tracking-wider mb-4 text-pink-200 text-xs md:text-md lg:text-xl">
            Cybersecurity Enthusiast based on Krishnagiri, India.
          </p>
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<Navigation size={20} />}
              position="right"
            />
          </a>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center lg:w-1/2 lg:mt-0 h-screen">
          <img
            src="/gokkul.jpg"
            alt="Hero Image"
            className="h-full w-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

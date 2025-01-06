"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { education } from "@/data";

const Education = () => {
  const cards = education.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div>
      <h2 className="pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Education
      </h2>
      <Carousel items={cards} />
    </div>
  );
};

export default Education;

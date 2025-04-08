import PastSpeaker from "@/app/_components/PastSpeaker/PastSpeaker";
import React, { useState } from "react";

const speakers = [
  {
    url: "past-speaker/1.webp",
    name: "Mr. Raghav Apoorv",
    title: "Judge",
    about:
      "Product & Engineering | SWE at Uber | MS CS (ML) at Georgia Tech | ex-Zomato",
    linkedin: "https://www.linkedin.com/in/arnavgupta/",
  },
  {
    url: "past-speaker/1.webp",
    name: "Mr. Raghav Apoorv",
    title: "Judge",
    about:
      "Product & Engineering | SWE at Uber | MS CS (ML) at Georgia Tech | ex-Zomato",
    linkedin: "https://www.linkedin.com/in/arnavgupta/",
  },
  {
    url: "past-speaker/1.webp",
    name: "Mr. Raghav Apoorv",
    title: "Judge",
    about:
      "Product & Engineering | SWE at Uber | MS CS (ML) at Georgia Tech | ex-Zomato",
    linkedin: "https://www.linkedin.com/in/arnavgupta/",
  },
  {
    url: "past-speaker/1.webp",
    name: "Mr. Raghav Apoorv",
    title: "Judge",
    about:
      "Product & Engineering | SWE at Uber | MS CS (ML) at Georgia Tech | ex-Zomato",
    linkedin: "https://www.linkedin.com/in/arnavgupta/",
  },
  {
    url: "past-speaker/1.webp",
    name: "Mr. Raghav Apoorv",
    title: "Judge",
    about:
      "Product & Engineering | SWE at Uber | MS CS (ML) at Georgia Tech | ex-Zomato",
    linkedin: "https://www.linkedin.com/in/arnavgupta/",
  },
  {
    url: "past-speaker/1.webp",
    name: "Mr. Raghav Apoorv",
    title: "Judge",
    about:
      "Product & Engineering | SWE at Uber | MS CS (ML) at Georgia Tech | ex-Zomato",
    linkedin: "https://www.linkedin.com/in/arnavgupta/",
  },
  {
    url: "past-speaker/1.webp",
    name: "Mr. Raghav Apoorv",
    title: "Judge",
    about:
      "Product & Engineering | SWE at Uber | MS CS (ML) at Georgia Tech | ex-Zomato",
    linkedin: "https://www.linkedin.com/in/arnavgupta/",
  },
  {
    url: "past-speaker/1.webp",
    name: "Mr. Raghav Apoorv",
    title: "Judge",
    about:
      "Product & Engineering | SWE at Uber | MS CS (ML) at Georgia Tech | ex-Zomato",
    linkedin: "https://www.linkedin.com/in/arnavgupta/",
  },
  {
    url: "past-speaker/1.webp",
    name: "Mr. Raghav Apoorv",
    title: "Judge",
    about:
      "Product & Engineering | SWE at Uber | MS CS (ML) at Georgia Tech | ex-Zomato",
    linkedin: "https://www.linkedin.com/in/arnavgupta/",
  },
  {
    url: "past-speaker/1.webp",
    name: "Mr. Raghav Apoorv",
    title: "Judge",
    about:
      "Product & Engineering | SWE at Uber | MS CS (ML) at Georgia Tech | ex-Zomato",
    linkedin: "https://www.linkedin.com/in/arnavgupta/",
  },
  {
    url: "past-speaker/1.webp",
    name: "Mr. Raghav Apoorv",
    title: "Judge",
    about:
      "Product & Engineering | SWE at Uber | MS CS (ML) at Georgia Tech | ex-Zomato",
    linkedin: "https://www.linkedin.com/in/arnavgupta/",
  },
];

function page() {
  const [activeIndex, setActiveIndex] = useState(null); // null = none active

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index)); // toggle
  };

  return (
    <div className="mx-20 flex flex-col gap-12 items-center">
      <div className="font-khinterference md:text-7xl text-4xl tracking-widest mb-6 text-center">
        Previous Judges and Speakers
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {speakers.map((speaker, index) => (
          <div key={index} onClick={() => handleToggle(index)}>
            <PastSpeaker {...speaker} isActive={activeIndex === index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;

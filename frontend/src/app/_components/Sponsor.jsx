"use client";
import React from "react";
import Image from "next/image";

const Sponsor = () => {
  const titleSponsor = {
    title: "Title Sponsor",
    image: "/images/sponsor/TitleSponsor.png",
  };

  const sponsorList = [
    { title: "DEVFOLIO LOGO", image: "/images/sponsor/Devfolio_Logo-Colored.svg" },
    { title: "GitHub", image: "/images/sponsor/GitHub.png" },
    { title: "ETHINDIA LOGO", image: "/images/sponsor/ethindia-light.png" },
    { title: "Wolfram", image: "/images/sponsor/Wolfram.png" },
    { title: "NoticeBard", image: "/images/sponsor/NoticeBard.png" },
    { title: "Fanstore", image: "/images/sponsor/Fanstore.png" },
    { title: "ASPECTA", image: "/images/sponsor/ASPECTA.png" },
    { title: ".xyz", image: "/images/sponsor/xyz.png" },
    { title: "PSOCKETS", image: "/images/sponsor/PSOCKETS.png" },
  ];

  const technologyPartners = [{ title: "Logitech", image: "/images/sponsor/Logitech.png" }];

  const coursePartners = [
    { title: "Interview Buddy", image: "/images/sponsor/InterviewBuddy.png" },
  ];

  const communityPartners = [
    { title: "Styava.dev", image: "/images/sponsor/StyavaDev.png" },
    { title: "Fresources", image: "/images/sponsor/Fresources.png" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-start overflow-hidden lg:mx-20 md:mx-16 sm:mx-8 mx-4 max-sm:-top-10 font-orbitron">
      <p className="font-khinterference md:text-7xl text-4xl tracking-widest mb-6 text-center">
        Our Past Sponsors
      </p>

      {/* Title Sponsor */}
      <p className="text-4xl text-center mb-4">Title Sponsor</p>
      <Image
        src={titleSponsor.image}
        alt={titleSponsor.title}
        width={150}
        height={150}
        className="mb-6"
      />

      {/* Sponsor List */}
      <p className="text-4xl text-center mb-4">Sponsors</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 mb-10 items-center ">
        {sponsorList.map((sponsor, index) => (
          <div key={index} className={`flex justify-center ${sponsorList.length % 2 !== 0 && index === sponsorList.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}>
            <Image src={sponsor.image} alt={sponsor.title} width={160} height={120} />
          </div>
        ))}
      </div>

      {/* Technology Partners */}
      <p className="text-4xl text-center mb-4">Technology Partners</p>
      <div className="grid grid-cols-1 gap-6 mb-10 items-center">
        {technologyPartners.map((sponsor, index) => (
          <Image
            key={index}
            src={sponsor.image}
            alt={sponsor.title}
            width={300}
            height={300}
          />
        ))}
      </div>

      {/* Community Partners */}
      <p className="text-4xl text-center mb-4">Community Partners</p>
      <div className="grid grid-cols-2 sm:gap-12 gap-6 mb-10 items-center">
        {communityPartners.map((sponsor, index) => (
          <Image
            key={index}
            src={sponsor.image}
            alt={sponsor.title}
            width={160}
            height={120}
          />
        ))}
      </div>

      {/* Course Partners */}
      <p className="text-4xl text-center mb-4">Course Partners</p>
      <div className="grid grid-cols-1 gap-6 mb-10">
        {coursePartners.map((sponsor, index) => (
          <Image
            key={index}
            src={sponsor.image}
            alt={sponsor.title}
            width={160}
            height={120}
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
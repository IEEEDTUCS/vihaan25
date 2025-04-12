"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Sponsor = () => {
  const titleSponsor = {
    title: "Title Sponsor",
    image: "/images/sponsor/TitleSponsor.png",
  };

  const sponsorList = [
    {
      title: "DEVFOLIO LOGO",
      image: "/images/sponsor/Devfolio_Logo-Colored.svg",
    },
    { title: "GitHub", image: "/images/sponsor/GitHub.png" },
    { title: "ETHINDIA LOGO", image: "/images/sponsor/ethindia-light.png" },
    { title: "Wolfram", image: "/images/sponsor/Wolfram.png" },
    { title: "NoticeBard", image: "/images/sponsor/NoticeBard.png" },
    { title: "Fanstore", image: "/images/sponsor/Fanstore.png" },
    { title: "ASPECTA", image: "/images/sponsor/ASPECTA.png" },
    { title: ".xyz", image: "/images/sponsor/xyz.png" },
    { title: "PSOCKETS", image: "/images/sponsor/PSOCKETS.png" },
  ];

  const technologyPartners = [
    { title: "Logitech", image: "/images/sponsor/Logitech.png" },
  ];

  const coursePartners = [
    { title: "Interview Buddy", image: "/images/sponsor/InterviewBuddy.png" },
  ];

  const communityPartners = [
    { title: "Styava.dev", image: "/images/sponsor/StyavaDev.png" },
    { title: "Fresources", image: "/images/sponsor/Fresources.png" },
  ];

  return (
    <div
      className={`relative flex flex-col items-center justify-start overflow-hidden lg:mx-20 md:mx-16 sm:mx-8 mx-4 max-sm:-top-10 font-orbitron`}
    >
      <motion.p
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="font-khinterference md:text-7xl text-4xl tracking-widest mb-6 text-center"
      >
        Our Past Sponsors
      </motion.p>

      {/* Title Sponsor */}
      <motion.p
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl text-center mb-4"
      >
        Title Sponsor
      </motion.p>
      <Image
        src={titleSponsor.image}
        alt={titleSponsor.title}
        width={150}
        height={150}
        className="mb-6"
      />

      {/* Sponsor List */}
      <motion.p
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl text-center mb-4"
      >
        Sponsors
      </motion.p>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 mb-10 items-center "
      >
        {sponsorList.map((sponsor, index) => (
          <div
            key={index}
            className={`flex justify-center ${
              sponsorList.length % 2 !== 0 && index === sponsorList.length - 1
                ? "col-span-2 md:col-span-1"
                : ""
            }`}
          >
            <Image
              src={sponsor.image}
              alt={sponsor.title}
              width={160}
              height={120}
            />
          </div>
        ))}
      </motion.div>

      {/* Technology Partners */}
      <motion.p
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl text-center mb-4"
      >
        Technology Partners
      </motion.p>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-6 mb-10 items-center"
      >
        {technologyPartners.map((sponsor, index) => (
          <Image
            key={index}
            src={sponsor.image}
            alt={sponsor.title}
            width={300}
            height={300}
          />
        ))}
      </motion.div>

      {/* Community Partners */}
      <motion.p
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl text-center mb-4"
      >
        Community Partners
      </motion.p>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:gap-12 gap-6 mb-10 items-center"
      >
        {communityPartners.map((sponsor, index) => (
          <Image
            key={index}
            src={sponsor.image}
            alt={sponsor.title}
            width={160}
            height={120}
          />
        ))}
      </motion.div>

      {/* Course Partners */}
      <motion.p
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl text-center mb-4"
      >
        Course Partners
      </motion.p>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-6 mb-10"
      >
        {coursePartners.map((sponsor, index) => (
          <Image
            key={index}
            src={sponsor.image}
            alt={sponsor.title}
            width={160}
            height={120}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Sponsor;

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
    // {
    //   title: "DEVFOLIO LOGO",
    //   image: "/images/sponsor/Devfolio_Logo-Colored.svg",
    // },
    {
      title: "DEVFOLIO LOGO",
      image: "/images/sponsor/Devfolio_Logo-Colored.svg",
    },

    { title: "Interview Buddy", image: "/images/sponsor/interviewbuddy.png" },
    { title: "Codecrafters", image: "/images/sponsor/CodeCrafters.io full logo full text (White text).png", url: "https://codecrafters.io/", },
    { title: "Wolfram", image: "/images/sponsor/Wolfram.png" },
    {
      title: "Collabratec. Consulting",
      image: "/images/sponsor/collabratec.png",
    },
    { title: "SecOps Solution", image: "/images/sponsor/secops.png" },
    { title: "SYBGEN", image: "/images/sponsor/sbygen.png" },
    { title: "Stock Edge", image: "/images/sponsor/stockedge.png" },
    { title: "GoFr", image: "/images/sponsor/gofr.png", url:"https://gofr.dev/" },
    { title: "Warp", image: "/images/sponsor/warp.svg" },
    { title: ".xyz", image: "/images/sponsor/xyz.png" },
    { title: "Rabbitt AI", image: "/images/sponsor/rabbitt.svg" },
    // { title: "ETHIndia", image: "/images/sponsor/ethindia-light.png" },
    { title: "ETHINDIA LOGO", image: "/images/sponsor/ethindia-light.png" },
  ];

  const technologyPartners = [
    { title: "Logitech", image: "/images/sponsor/Logitech.png" },
  ];

  const educationPartners = [
    { title: "CloudyML", image: "/images/sponsor/cloudyml.png" },
  ];

  const web3Partners = [
    { title: "Lokachakra", image: "/images/sponsor/lokachakra.jpg" },
  ];

  const communityPartners = [
    {
      title: "SarvagaNirakar",
      image: "/images/sponsor/SarvagaNirakar.jpg",
      url: "http://sarvagyanirakarcommunity.co.in",
    },
    // { title: "Fresources", image: "/images/sponsor/Fresources.png" },
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
        Our Sponsors
      </motion.p>

      {/* Title Sponsor */}
      {/*<motion.p
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
      />*/}

      {/* Sponsor List */}
      {/* web3 Partners */}
      <motion.p
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl text-center mb-4"
      >
        Web3 Partners
      </motion.p>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-6 mb-10"
      >
        {web3Partners.map((sponsor, index) => (
          sponsor.url ? (
            <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={sponsor.image}
                alt={sponsor.title}
                width={240}
                height={120}
              />
            </a>
          ) : (
            <Image
              key={index}
              src={sponsor.image}
              alt={sponsor.title}
              width={240}
              height={120}
            />
          )
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
        className="grid grid-cols-1 gap-6 mb-10  items-center"
      >
        {technologyPartners.map((sponsor, index) => (
          sponsor.url ? (
            <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={sponsor.image}
                alt={sponsor.title}
                width={300}
                height={300}
              />
            </a>
          ) : (
            <Image
              key={index}
              src={sponsor.image}
              alt={sponsor.title}
              width={300}
              height={300}
            />
          )
        ))}
      </motion.div>

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
            {sponsor.url ? (
              <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={sponsor.image}
                  alt={sponsor.title}
                  width={160}
                  height={120}
                />
              </a>
            ) : (
              <Image
                src={sponsor.image}
                alt={sponsor.title}
                width={160}
                height={120}
              />
            )}
          </div>
        ))}
      </motion.div>

      <motion.p
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl text-center mb-4"
      >
        Education Partner
      </motion.p>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-6 mb-10 items-center"
      >
        {educationPartners.map((sponsor, index) => (
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
        className="grid grid-cols-1 sm:gap-12 gap-6 mb-10 items-center"
      >
        {communityPartners.map((sponsor, index) => (
          <a href={sponsor.url}>
            <Image
              key={index}
              src={sponsor.image}
              alt={sponsor.title}
              width={160}
              height={120}
            />
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default Sponsor;

"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
//import { Plus } from "lucide-react";
import Image from "next/image";

const Instagram = () => (
  <a
    href="https://www.instagram.com/vihaan_dtu"
    className=" text-amber-600 underline"
  >
    Instagram
  </a>
);

const LinkedIn = () => (
  <a
    href="https://www.linkedin.com/company/ieee-dtu/"
    className="underline text-amber-600"
  >
    LinkedIn
  </a>
);
const tabs = [
  {
    title: "What is Vihaan 8.0?",
    description:
      "Vihaan 8.0 is the 8th edition of IEEE DTU’s 24-hour hackathon meant to challenge your creative potential and build innovative solutions to pressing problems. Every year for the last seven years, we see participation from students across India.",
  },
  {
    title: "Hackathon? What's that?",
    description:
      "In general, It is a 2-3 days long competition where programmers and enthusiasts brainstorm to come up with solutions to diverse problems faced by people and communities across the globe. They then have to code their solutions into a usable form. ",
  },
  {
    title:
      "Wait so am I required to know coding? I don't know if I'm skilled enough.",
    description:
      "Participation is the essential part, learning is the goal. You might need a basic idea of development. Vihaan serves as the perfect beginner hackathon for you to set your foot right into the world of development!",
  },
  {
    title: "I'm interested, How do I register?",
    description: (
      <>
        Registrations are live!. Stay tuned! Registration details only require
        basic details. Follow us on <Instagram /> and <LinkedIn /> for regular
        updates.
      </>
    ),
  },
  {
    title: "What's the prize if you end up winning? Give me some Incentive.",
    description: (
      <>
        We have loads of cash prizes and swags up for grabs. Further details
        will be released soon. Follow us on <Instagram /> and <LinkedIn /> for
        regular updates.
      </>
    ),
  },
  {
    title:
      "Are there any prerequisites for participating? Am I required to have any form of tools?",
    description: (
      <>
        You'll just need your trusty laptop and a sufficient bandwidth internet
        connection. While we do provide power stations on the venue, the
        availability is subject to the crowd. Hence, we strongly recommend you
        charge up your devices to the brim.
      </>
    ),
  },
  {
    title: "Is it a team competition? Can't I participate alone?",
    description: (
      <>
        Sure, you can participate alone. However, we strongly recommend you to
        participate in teams since hackathons are all about brainstorming and
        teamwork!
      </>
    ),
  },
  {
    title: "What is the participation criteria for me and my teammates?",
    description: (
      <>
        There is only one - you must be currently (as of April 2025) enrolled in
        a university as a full-time student. You can be from any year or any
        branch.
      </>
    ),
  },
  {
    title: "Am I required to pay anything for participating?",
    description: (
      <>No, participation is free! We only require your enthusiasm!</>
    ),
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeItem, setActiveItem] = useState(tabs[0]);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    const newActiveItem = tabs.find((_, i) => i === index);
    setActiveItem(newActiveItem);
  };

  return (
    <>
      <div className="">
        <p className="text-[#8F7E77] text-7xl lg:block hidden font-khinterference font-bold mt-32 px-20">
          Frequently Asked Questions
        </p>
        <p className="text-[#8F7E77] text-7xl lg:hidden font-khinterference font-bold  px-10">
          FAQ's{" "}
        </p>
        <div className=" sm:mx-auto max-sm:mx-0 pb-10 pt-2 flex justify-center">
          <div className="h-fit w-full md:w-4/5">
            {tabs.map((tab, index) => (
              <motion.div
                key={index}
                className={`overflow-hidden m-3`}
                onClick={() => handleClick(index)}
              >
                <button
                  className={`p-3 px-4 w-full cursor-pointer items-center justify-between transition-all font-semibold text-[#8F7E77] font-khinterference flex gap-2 border border-dashed border-[#8F7E77] bg-[#090A0E]`}
                >
                  {tab.title}
                  {
                    <Image
                      src="/svg/faqIcon.svg"
                      width="512"
                      height="512"
                      alt="faqIcon"
                      className={`${
                        activeIndex === index ? "rotate-45" : "rotate-0"
                      } transition-transform ease-in-out text-gray-200 mr-4 w-8 h-8`}
                    />
                  }
                </button>
                <AnimatePresence mode="sync">
                  {activeIndex === index && (
                    <motion.div
                      className="bg-[#13151B6E] border-b border-l border-r border-dashed border-[#8F7E77] rounded-b-xl"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.14,
                      }}
                    >
                      <pre className="text-[#8F7E77] text-wrap font-sans  p-3 pt-1 w-[94%] font-khinterference ">
                        {tab.description}
                      </pre>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;

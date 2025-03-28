"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
//import { Plus } from "lucide-react";
import Image from 'next/image'

const tabs = [
  {
    title: "What is DSSYWLC?",
    description:
      "DSSYWLC'24 is IEEE Delhi Section's annual flagship event which aims to strike a spark in the attendee's imagination with its diverse and inclusive presentations, expert sessions, and panel discussions hosted by distinguished speakers from all walks of life.",
  },
  {
    title: "What is its Objective?",
    description:
      "Ideas that shape the future are conceived by millions but implemented by tens. However, when Academicians, Technologists, Scientists, Doctors, Students, and Young Professionals from the IEEE Delhi Section join forces, those numbers multiply manyfold. \n\nWith the same goal in mind, the IEEE Delhi Section hosts DSSYWLC'24, a forum where experts from various fields may exchange ideas with keynote speakers from diverse fields and witness an intuitive manifest for greeting, discussing, previewing, debating, and creating ideas for abetter future. ",
  },
  {
    title: "Where will DSSYWLC'24 be held?",
    description:
      "DSSYWLC 2024 is being conducted in offline mode at Delhi Technological University on 09th and 10th November, 2024.",
  },
  {
    title: "What is the theme of the Congress?",
    description:
      "The theme of the Congress revolves around coming up with innovation, networking with people and taking inspiration from the fellow IEEE members. INNOVATE, CONNECT, INSPIRE.",
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
      <div className="container sm:mx-auto max-sm:mx-0 pb-10 pt-2 ">
        <div className="h-fit ">
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
                { <Image  src="/svg/faqIcon.svg" width="512" height="512"
                  className={`${
                    activeIndex === index ? "rotate-45" : "rotate-0"
                  } transition-transform ease-in-out w-5 h-5 text-gray-200 mr-4 w-8 h-8`}
                /> }
              </button>
              <AnimatePresence mode="sync">
                {activeIndex === index && (
                  <motion.div
                    className="bg-[#13151B6E] border-b border-l border-r border-dashed border-[#8F7E77] rounded-md"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.14,
                    }}
                  >
                    <pre className="text-[#8F7E77] text-wrap font-sans  p-3 pt-0 w-[90%] font-khinterference ">
                      {tab.description}
                    </pre>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;

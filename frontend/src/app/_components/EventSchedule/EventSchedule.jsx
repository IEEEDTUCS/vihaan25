"use client";
import React from "react";
import TechTimeline from "./Timeline";
import { RandomizedTextEffect } from "../ui/text-randomized";
import { motion } from "framer-motion";

const EventSchedule = () => {
  return (
    <div
      id="schedule"
      className="lg:mx-20 mt-20 md:mx-16 sm:mx-8 mx-4 my-4 md:min-h-[40vh] relative "
    >
      <motion.h3
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="font-khinterference md:text-7xl text-4xl tracking-widest"
      >
        Event Schedule
      </motion.h3>
      <TechTimeline />
      {/*<motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex   flex-col justify-center font-extrabold items-center mt-20 text-4xl font-orbitron text-center text-wrap"
      >
        <RandomizedTextEffect text="Coming Soon" />
         <div className=" w-full h-8 mx-auto">
          <div className="absolute left-1/5 w-full md:w-3/5 h-8 bg-gradient-to-b from-[#8f7d7652] to-[#8f7d7600]  border-t border-[#8f7d76]"></div>
          <div className="absolute left-1/9 w-full md:w-4/5 h-8 bg-gradient-to-b from-[#8f7d7628] to-[#8f7d7600]  border-t border-[#8f7d76b9]"></div>
        </div>
      </motion.div> */}
    </div>
  );
};

export default EventSchedule;

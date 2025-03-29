import React from "react";
import TechTimeline from "./Timeline";
import { RandomizedTextEffect } from "../ui/text-randomized";

const EventSchedule = () => {
  return (
    <div className="lg:mx-20 md:mx-16 sm:mx-8 mx-4 my-4 min-h-[40vh] ">
      <p className="font-khinterference md:text-7xl   text-4xl  tracking-widest">
        Event Schedule
      </p>
      {/* <TechTimeline /> */}
      <div className="flex  flex-col justify-center items-center mt-20 text-4xl font-khinterference text-center">
        <RandomizedTextEffect text="Coming Soon" />
        {/* <div className=" w-full h-8 mx-auto">
          <div className="absolute left-1/5 w-full md:w-3/5 h-8 bg-gradient-to-b from-[#8f7d7652] to-[#8f7d7600]  border-t border-[#8f7d76]"></div>
          <div className="absolute left-1/9 w-full md:w-4/5 h-8 bg-gradient-to-b from-[#8f7d7628] to-[#8f7d7600]  border-t border-[#8f7d76b9]"></div>
        </div> */}
      </div>
    </div>
  );
};

export default EventSchedule;

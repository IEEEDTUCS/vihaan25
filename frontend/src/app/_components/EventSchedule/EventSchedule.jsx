import React from "react";
import TechTimeline from "./Timeline";

const EventSchedule = () => {
  return (
    <div className="lg:mx-28 md:mx-16 sm:mx-8 mx-4 my-4">
      <p className="font-khinterference md:text-[54px]   text-4xl  tracking-widest">
        Event Schedule
      </p>
      <TechTimeline />
    </div>
  );
};

export default EventSchedule;

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DotButton = ({ children }) => {
  return (
    <div className="flex cursor-pointer w-full">
      <div className="relative bg-[#D9D9D938]/78 hover:bg-[#D9D9D938]/90 lg:px-6 px-4 py-3 text-center lg:min-w-[200px] whitespace-nowrap w-full">
        {/* Top border with irregular dashes */}
        <div className="absolute top-0 left-0 right-0 h-[1px] flex">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="h-full bg-[#a89a84]"
              style={{
                width: `8px`,
                marginRight: `5px`,
              }}
            ></div>
          ))}
        </div>

        {/* Bottom border with irregular dashes */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] flex">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="h-full bg-[#a89a84]"
              style={{
                width: `8px`,
                marginRight: `5px`,
              }}
            ></div>
          ))}
        </div>

        {/* Left border with irregular dashes */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] flex flex-col">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-full bg-[#a89a84]"
              style={{
                height: `2px`,
                marginBottom: `5px`,
              }}
            ></div>
          ))}
        </div>

        {/* Right border with irregular dashes */}
        <div className="absolute right-0 top-0 bottom-0 w-[1px] flex flex-col">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-full bg-[#a89a84]"
              style={{
                height: `${Math.random() * 8 + 4}px`,
                marginBottom: `${Math.random() * 8 + 4}px`,
              }}
            ></div>
          ))}
        </div>

        {/* Corner notches */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#a89a84]"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#a89a84]"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#a89a84]"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#a89a84]"></div>

        <p className="text-[#a89a84] font-orbitron font-bold text-sm lg:text-md">
          {children}
        </p>
      </div>
    </div>
  );
};

export default function TechTimeline() {
  const [mounted, setMounted] = useState(false);
  const [currentSelection, setCurrentSelection] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const timelineEvents = [
    {
      id: 1,
      title: "Registration Begins",
      date: "APRIL 1st",
      position: "top",
      description: (
        <div className="flex flex-col space-y-4 justify-center items-center text-center font-khinterference text-[#A59188] w-full">
          <h2 className="text-4xl">Registration Begins</h2>
          <p className="text-md">
            Invite friends and devs, create a team, and put on your thinking
            caps while we review your entities.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Registration Ends",
      date: "APRIL 11th",
      position: "bottom",
      description: (
        <div className="flex flex-col space-y-4 justify-center items-center text-center font-khinterference text-[#A59188] w-full">
          <h2 className="text-4xl">Registration Ends</h2>
          <p className="text-md">It's time to roll the wheels!</p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Event Brochure",
      date: "APRIL 15th",
      position: "top",
      description: (
        <motion.div className="flex flex-col space-y-4 justify-center items-center text-center font-khinterference text-[#A59188] w-full">
          <h2 className="text-4xl">Event Brochure</h2>
          <p className="text-md">
            Will Information about on the schedule, speakers, timings, location,
            and other important details about the event. It serves as a guide
            for attendees to help them plan and prepare for the event.
          </p>
        </motion.div>
      ),
    },
    {
      id: 4,
      title: "Vihaan Begins",
      date: "APRIL 17th",
      position: "bottom",
      description: (
        <motion.div className="flex flex-col space-y-4 justify-center items-center text-center font-khinterference text-[#A59188] w-full">
          <h2 className="text-4xl">Vihaan Begins</h2>
          <p className="text-md">
            Welcome to the thundered of ideas flowing through the servers of
            Vihaan. With great participants, insightful judges and awesome
            webinars, have one of the greatest 24 Hours experience etched in
            your geeky life.
          </p>
        </motion.div>
      ),
    },
    {
      id: 5,
      title: "Vihaan Ends",
      date: "APRIL 18th",
      position: "top",
      description: (
        <motion.div className="flex flex-col space-y-4 justify-center items-center text-center font-khinterference text-[#A59188] w-full">
          <h2 className="text-4xl">Vihaan Ends</h2>
          <p className="text-md">
            Thank you for attending Vihaan 8.0 Looking forward to seeing you in
            the next season of Vihaan!
          </p>
        </motion.div>
      ),
    },
  ];

  if (!mounted) return null;

  return (
    <div className="w-full flex flex-col space-y-16">
      {/* Grid overlay */}
      <div className="relative flex max-lg:flex-col justify-center items-center lg:min-h-[300px] mt-12">
        {/* Timeline container */}
        <div className="relative w-full flex justify-between items-center">
          {/* Custom dashed line with irregular gaps */}
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-[2px] z-0 hidden md:flex justify-between"
          >
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="h-full bg-[#a89a84]"
                style={{
                  width: `8px`,
                  marginRight: `4px`,
                }}
              ></div>
            ))}
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="absolute left-6/20 top-0 w-[1px] z-0 flex flex-col justify-between md:hidden"
          >
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="w-full bg-[#a89a84]"
                style={{
                  height: `8px`,
                  marginTop: `4px`,
                }}
              ></div>
            ))}
          </motion.div>

          {/* Timeline events */}
          {/* Desktop View */}
          <div className="lg:flex hidden  items-center justify-between w-full z-10 px-10">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className="flex lg:flex-col items-center relative"
              >
                {/* Event box and date - positioned based on top/bottom */}
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 2 }}
                  viewport={{ once: true }}
                  className={`absolute ${
                    event.position === "top" ? "bottom-16" : "top-16"
                  } flex lg:flex-col items-center`}
                >
                  {event.position === "top" && (
                    <p className="text-[#a89a84] font-khinterference text-2xl tracking-wider mb-2">
                      {event.date}
                    </p>
                  )}
                  <button
                    onClick={() => {
                      setCurrentSelection(index);
                    }}
                  >
                    <DotButton>{event.title}</DotButton>
                  </button>
                  {event.position === "bottom" && (
                    <p className="text-[#a89a84] font-khinterference text-2xl tracking-wider mt-2">
                      {event.date}
                    </p>
                  )}
                </motion.div>
                {/* Diamond node - centered on the timeline */}
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 2 }}
                  viewport={{ once: true }}
                >
                  <DiamondNode />
                </motion.div>
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="lg:hidden w-full h-full px-2">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className="grid grid-cols-5 w-full items-center justify-center gap-y-2 text-center"
              >
                <p className="text-[#a89a84] font-khinterference text-md tracking-wider mb-2 self-center col-span-1">
                  {event.date}
                </p>
                <div className="col-span-1">
                  <DiamondNode />
                </div>

                <div className="col-span-3">
                  <button
                    className="w-full"
                    onClick={() => {
                      setCurrentSelection(index);
                    }}
                  >
                    <DotButton>{event.title}</DotButton>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        key={`eventsDesc${currentSelection}`}
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="w-full flex flex-row justify-center items-center pt-10"
      >
        {timelineEvents[currentSelection].description}
      </motion.div>
    </div>
  );
}

const DiamondNode = () => {
  return (
    <div className="relative z-20 group scale-60 md:scale-100">
      {/* backdrop-blur-2xl */}
      <svg
        width="61"
        height="60"
        viewBox="0 0 61 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="30.6254"
          y="4.3846"
          width="36.4086"
          height="36.4086"
          transform="rotate(45 30.6254 4.3846)"
          stroke="#A59188"
          fill="black"
        />
        <rect
          x="13.0941"
          y="12.6604"
          width="34.8108"
          height="34.8108"
          stroke="#A59188"
        />
        <rect
          x="30.6254"
          y="15.2547"
          width="21.0356"
          height="21.0356"
          transform="rotate(45 30.6254 15.2547)"
          stroke="#A59188"
          className="backdrop-blur-2xl"
        />

        <circle
          cx="30.4994"
          cy="30.0656"
          r="2.23739"
          stroke="#A59188"
          strokeWidth="0.3"
        />
        <line
          x1="30.5995"
          y1="0.223389"
          x2="30.5995"
          y2="8.57924"
          stroke="#A59188"
          strokeWidth="0.2"
        />
        <line
          x1="30.5995"
          y1="51.5522"
          x2="30.5995"
          y2="59.9081"
          stroke="#A59188"
          strokeWidth="0.2"
        />
        <line
          x1="60.3418"
          y1="30.1657"
          x2="51.9859"
          y2="30.1657"
          stroke="#A59188"
          strokeWidth="0.2"
        />
        <line
          x1="9.01294"
          y1="30.1657"
          x2="0.657084"
          y2="30.1657"
          stroke="#A59188"
          strokeWidth="0.2"
        />
      </svg>
    </div>
  );
};

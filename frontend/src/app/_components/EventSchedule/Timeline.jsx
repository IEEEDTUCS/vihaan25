"use client";

import { useEffect, useState } from "react";
import DotButton from "../Button";

export default function TechTimeline() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const timelineEvents = [
    { id: 1, title: "Registration Begins", date: "MARCH 9", position: "top" },
    { id: 2, title: "Registration Ends", date: "MARCH 9", position: "bottom" },
    { id: 3, title: "Event Brochure", date: "MARCH 9", position: "top" },
    { id: 4, title: "Vihaan Begins", date: "MARCH 9", position: "bottom" },
    { id: 5, title: "Vihaan Ends", date: "MARCH 9", position: "top" },
  ];

  if (!mounted) return null;

  return (
    <div className="w-full px-12 ">
      {/* Grid overlay */}
      <div className="relative flex max-lg:flex-col justify-center items-center lg:min-h-[300px] min-h-screen mx-12">
        {/* Timeline container */}
        <div className="relative w-full flex justify-between items-center">
          {/* Custom dashed line with irregular gaps */}
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-[2px] z-0 flex justify-between">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="h-full bg-[#a89a84]"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  marginRight: `${Math.random() * 15 + 10}px`,
                }}
              ></div>
            ))}
          </div>

          {/* Timeline events */}
          {/* Desktop View */}
          <div className="lg:flex hidden  items-center justify-between w-full z-10">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className="flex lg:flex-col items-center relative"
              >
                {/* Event box and date - positioned based on top/bottom */}(
                <div
                  className={`absolute ${
                    event.position === "top" ? "bottom-16" : "top-16"
                  } flex lg:flex-col items-center`}
                >
                  {event.position === "top" && (
                    <div className="text-[#a89a84] font-khinterference text-2xl tracking-wider mb-2">
                      {event.date}
                    </div>
                  )}
                  <DotButton>{event.title}</DotButton>
                  {event.position === "bottom" && (
                    <div className="text-[#a89a84] font-khinterference text-2xl tracking-wider mt-2">
                      {event.date}
                    </div>
                  )}
                </div>
                ){/* Diamond node - centered on the timeline */}
                <DiamondNode />
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="lg:hidden flex flex-col items-center justify-center gap-4 w-full h-full">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className="flex justify-between  items-center relative w-full"
              >
                <div className="text-[#a89a84] font-khinterference text-xl tracking-wider mb-2 self-center">
                  {event.date}
                </div>
                <DiamondNode />

                <DotButton>{event.title}</DotButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const DiamondNode = () => {
  return (
    <div className="relative z-20 group ">
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

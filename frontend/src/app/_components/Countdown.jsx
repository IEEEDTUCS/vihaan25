"use client";
import React, { useState, useEffect, memo } from "react";
// import '../../app/'; // Importing global CSS

import { motion } from "framer-motion";

const Countdown = ({ targetTime }) => {
  const [timeLeft, setTimeLeft] = useState(
    targetTime ||
      Math.floor((new Date("2025-04-17T00:00:00Z") - new Date()) / 1000)
  );

  useEffect(() => {
    // If no target time is provided, default to 8 hours
    const finalTargetTime = targetTime || 8 * 60 * 60; // 8 hours in seconds

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  // Convert total seconds to hours, minutes, and seconds
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const paddedHours = hours.toString().padStart(2, "0");
  const paddedMinutes = minutes.toString().padStart(2, "0");
  const paddedSeconds = seconds.toString().padStart(2, "0");

  return (
    <div>
      <style>
        {`
          .dotted-line {
            border-left: 2px dotted #ccc;
            height: 100%;
            margin: 0 10px;
            color: '#A59188';
          }
          .countdown-box {
            background: rgba(217, 217, 217, 0.22);
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="130" height="189" viewBox="0 18 165 199" fill="none"><path d="M1.53607 23.7422V1.06183H32.4639M137.619 1.06183H163.392V23.7422M39.6804 1.06183H49.9897M55.1443 1.06183H60.299M65.4536 1.06183H74.7319M87.1031 1.06183H101.536M107.722 1.06183H115.969M120.093 1.06183H132.464M1.53607 174.258V197.969H26.2783M137.619 197.969H163.392V174.258M29.3711 197.969H35.5567M45.866 197.969H52.0515M58.2371 197.969H64.4227M66.4845 197.969H80.9175M85.0412 197.969H93.2886M95.3505 197.969H105.66M111.845 197.969H120.093M122.155 197.969H130.402" stroke="%23A59188" stroke-width="4"/></svg>');
            background-size:cover ; 
            padding: 14px; /* Adjust padding to fit the SVG */
            
          }
        `}
      </style>
      <div className="relative grid grid-flow-col -mt-20 md:mt-0 gap-5 justify-center text-center md:scale-100 scale-50 min-[500px]:scale-75  mx-5  sm:scale-90 auto-cols-max">
        <CountdownDisplay value={Math.floor(timeLeft / 86400)} label="days" />
        <div className="dotted-line"></div>
        <CountdownDisplay
          value={Math.floor((timeLeft % 86400) / 3600)}
          label="hours"
        />
        <div className="dotted-line"></div>
        <CountdownDisplay
          value={Math.floor((timeLeft % 3600) / 60)}
          label="min"
        />
        <div className="dotted-line"></div>
        <CountdownDisplay value={timeLeft % 60} label="sec" />
      </div>
    </div>
  );
};

const CountdownDisplay = memo(({ value, label }) => {
  return (
    <div className="flex flex-col countdown-box font-normal h-[132px] w-[108px] font-['Orbitron'] items-center justify-center">
      <span className="countdown font-mono text-5xl">
        <span
          // style={{ "--value": Math.floor(timeLeft / 86400) }}
          className="font-normal font-['Orbitron']"
          aria-live="polite"
          aria-label={`${label} left: ${value}`}
        >
          {value}
        </span>
      </span>
      {label}
    </div>
  );
});

export default Countdown;

import React, { useEffect, useState } from "react";
import "@/app/globals.css";

const Prizes = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 50;
    const duration = 2000;
    const increment = end / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(counter);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      {/* Top Divider */}
      <div className="w-4/5 md:w-1/2 mb-6 opacity-45">
        <hr className="border-[#A59188]" />
      </div>

      {/* Main Count Heading */}
      <h1 className="text-6xl md:text-7xl font-khinterference tracking-widest text-[#A59188] drop-shadow mb-2">
        {count} LAKH+
      </h1>

      {/* Subtitle */}
      <h2 className="text-2xl md:text-3xl font-orbitron text-[#A59188] mt-2 mb-4 tracking-wider">
        Prize Pool and Swags!!
      </h2>

      {/* Supporting Text */}
      <p className="text-md md:text-xl font-orbitron text-[#A59188] max-w-2xl leading-relaxed mb-6">
        And additional <span className="font-semibold text-[#A59188]">2 lakh+</span> prize for the bonus{" "}
        <span className="text-[#A59188]">Lokachakra Track</span>.
      </p>

      {/* Bottom Divider */}
      <div className="w-4/5 md:w-1/2 opacity-45">
        <hr className="border-[#A59188]" />
      </div>
    </div>
  );
};

export default Prizes;

import React, { useEffect, useRef, useState } from "react";
import "@/app/globals.css";
import { Tracks } from "@components/Tracks/Tracks";
import { motion } from "framer-motion";

const Reveal = () => {
  const secondSectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [shouldHideIntro, setShouldHideIntro] = useState(false);

  const handleReveal = () => {
    setRevealed(true);

    // After 4 seconds, hide the first section
    setTimeout(() => {
      setShouldHideIntro(true);
    }, 2000);

    // Scroll after slight delay
    setTimeout(() => {
      secondSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div
      className={`h-screen snap-y snap-mandatory scroll-smooth ${
        revealed ? "overflow-y-scroll" : "overflow-hidden"
      }`}
    >
      {/* First Section */}
      <section
        className={`snap-start h-screen flex flex-col items-center justify-center transition-opacity duration-1000 ${
          shouldHideIntro ? "hidden" : ""
        }`}
      >
        <h1 className="font-khinterference text-xs tracking-widest text-center text-white mb-4">
          {revealed ? "Explore the Tracks!" : "Tap to Reveal Tracks"}
        </h1>

        <img
          src="/svg/GlowClock.svg"
          className={`w-[450px] h-auto mt-2 cursor-pointer transition-transform ${
            revealed ? "" : "animate-wiggle"
          }`}
          alt="Glow Clock"
          onClick={handleReveal}
        />
        <div className="w-[1300px] h-[1300px]"></div>
      </section>

      {/* Second Section */}
      <section
        ref={secondSectionRef}
        className="snap-start scroll-smooth h-screen flex items-center justify-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className="max-w-[90%] w-full mx-auto"
        >
          <Tracks />
        </motion.div>
      </section>
    </div>
  );
};

export default Reveal;

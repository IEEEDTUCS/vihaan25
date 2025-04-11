import React, { useEffect, useRef, useState } from "react";
import "@/app/globals.css";
import { Tracks } from "@components/Tracks/Tracks";
import { motion } from "framer-motion";
import FooterNew from "@components/FooterNew/footerNew";

const Reveal = () => {
  const secondSectionRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [shouldHideIntro, setShouldHideIntro] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [clockClicked, setClockClicked] = useState(false);
  const [clockSrc, setClockSrc] = useState("/svg/GlowClock.svg");

  const handleReveal = () => {
    setClockClicked(true); // trigger animation

    // After 3s animation, reveal everything
    setTimeout(() => {
      
      setRevealed(true);
      setFooterVisible(true);
      setShouldHideIntro(true);
    }, 3000);

    setTimeout(() => {
      setClockSrc("/svg/GlowClockFinal.svg");
    }, 2400);
    
  };

  useEffect(() => {
    if (revealed) {
      setTimeout(() => {
        secondSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [revealed]);

  return (
    <>
      <div
        className={`snap-y snap-mandatory scroll-smooth ${
          revealed ? "overflow-y-scroll" : "overflow-hidden"
        }`}
      >
        {/* First Section */}
        {!shouldHideIntro && (
          <section className={`snap-end flex flex-col justify-end items-center transition-all duration-1000`}>
            <h1 className={`font-khinterference text-4xl relative -bottom-70 tracking-widest text-center`}>
              {revealed ? "Explore the Tracks!" : "Tap to Reveal Tracks!"}
            </h1>

            <motion.img
  id="glow-clock-img"
  src={clockSrc}
  alt="Glow Clock"
  onClick={handleReveal}
  className={`cursor-pointer h-150 ${revealed ? "" : "relative -bottom-65" }`}
  animate={
    clockClicked && clockSrc === "/svg/GlowClock.svg"
      ? {
          rotate: [0, 10, -10, 10, -10, 0],
          filter: [
            "brightness(100%)",
            "brightness(200%)",
            "brightness(300%)",
            "brightness(200%)",
            "brightness(300%)",
            "brightness(100%)"
          ],
        }
      : {}
  }
  transition={
    clockClicked && clockSrc === "/svg/GlowClock.svg"
      ? { duration: 3.4, ease: "easeInOut", repeat: 0 }
      : {}
  }
/>


          </section>
        )}

        {/* Second Section */}
        {revealed && (
          <section
            ref={secondSectionRef}
            className="snap-end h-screen flex items-center justify-center px-4"
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
        )}
      </div>
      <FooterNew visible={footerVisible} />
    </>
  );
};

export default Reveal;

import React from "react";

const Footer = () => {
  return (
    <div className="relative h-[20vh] min-[480px]:h-[30vh] sm:h-[33vh] md:h-[40vh] lg:h-[60vh] overflow-hidden flex flex-col items-center">
      {/* Heading with consistent positioning */}
      <h1
        className="font-khinterference
        absolute text-4xl md:text-9xl tracking-widest text-center md:whitespace-nowrap
        top-[65%] md:top-[60%] md:scale-75 lg:top-[66%] lg:scale-95 xl:top-[63%] transform -translate-y-1/2
        scale-125  "
      >
        COMING SOON
      </h1>

      {/* Image with fixed size across breakpoints */}
      <div className="absolute top-[100%] md:top-[100%] lg:top-[100%] translate-y-[-50%]">
        <ClockImage />
      </div>
    </div>
  );
};

const ClockImage = () => {
  return (
    <img
      src="/svg/GlowClock.svg"
      className="w-[900px] sm:w-[900px] md:w-[800px] lg:w-[900px] xl:w-[1000px] 
                 h-auto max-w-full"
    />
  );
};

export default Footer;

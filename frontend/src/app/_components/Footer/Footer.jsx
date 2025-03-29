import React from "react";

const Footer = () => {
  return (
    <>
      <div className="relative h-[50vh] lg:h-[70vh] overflow-hidden flex flex-col items-center">
        <h1 className="font-khinterference md:text-9xl text-center text-4xl tracking-widest md:whitespace-nowrap md:scale-75 md:mt-[300px] 2xl:mt-[200px] xl:scale-100 xl:mt-80">
          COMING SOON
        </h1>
        <div className="absolute top-[100%] xl:scale-100 md:scale-110 translate-y-[-50%] px-[10px] ">
          <ClockImage />
        </div>
      </div>
    </>
  );
};

const ClockImage = () => {
  return <img src="/svg/GlowClock.svg" />;
};

export default Footer;

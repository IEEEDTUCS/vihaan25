import React from "react";

const Footer = () => {
  return (
    <>
      <div className="relative h-[50vh] overflow-hidden flex flex-col items-center">
        <h1 className="font-khinterference md:text-9xl  text-4xl tracking-widest mt-32">
          COMING SOON
        </h1>
        <div className="absolute top-[100%] translate-y-[-50%] px-[10px] ">
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

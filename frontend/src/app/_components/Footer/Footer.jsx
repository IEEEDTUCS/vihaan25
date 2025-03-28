import React from "react";

const Footer = () => {
  return (
    <>
      <div className="h-[50vh]"></div>
      <div className="relative h-[50vh] overflow-hidden flex flex-col items-center">
        <h1 className="font-khinterference md:text-[54px] text-4xl tracking-widest">
          COMING SOON
        </h1>
        <div className="absolute top-[100%] translate-y-[-50%] px-[10px]">
          <ClockImage />
        </div>
      </div>
    </>
  );
};

const ClockImage = () => {
  return <img src="/svg/clock.svg" />;
};

export default Footer;

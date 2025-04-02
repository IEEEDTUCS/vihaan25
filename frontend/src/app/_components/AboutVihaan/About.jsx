"use client"
import React from "react";
import Button from "@/app/_components/ui/Button";
// import "./About.css";
import "@/app/globals.css";
import AboutSVG from "./AboutSvg";
import { useState, useEffect } from "react";
import AbtIEEE from "./About-IEEE-Nav/IEEE"
 

const About = () => {

  let[className, setClassName] = useState("");
  const [isBlurred, setIsBlurred] = useState(false);

  let popout = () => {
    setClassName("Button-for-Abt-Section");
    setIsBlurred(true);
    // console.log(className);
  }

  // useEffect(() => {
  //   const allWebsiteWrapper = document.getElementById("AllWebsite");
  //   if (isBlurred && allWebsiteWrapper) {
  //     allWebsiteWrapper.style.filter = "blur(5px)";
  //   } else if (allWebsiteWrapper) {
  //     allWebsiteWrapper.style.filter = "none";
  //   }
  // }, [isBlurred]);

  return (
    <div className="relative mb-0 flex items-center justify-between w-full sm:mt-16 pr-0 overflow-hidden ">
      <img
        src="/Images-Abt-IEEE/svg1.svg"
        alt="Background Design"
        className="absolute left-0 top-30 w-auto h-180 object-cover opacity-85"
      />
      {/* Ye SVG ka hai */}

      <div className="z-10 w-full m-6 sm:mx-10 md:mx-14 lg:mx-20 max-[1280px]:relative max-[1280px]:w-full ">
        <div className="mb-10 mr-10 ml-0 w-150 max-[750px]:h-28 max-[750px]:relative flex items-end ">
          <img src="/Images-Abt-IEEE/head.svg" alt="Heading" className="  " />
        </div>
        <h1 className="text-7xl tracking-widest text-heading font-khinterference xl:w-[80%] w-full max-[600px]:text-[300%] max-[600px]:font-bold max-[600px]:tracking-[0rem] ">
          VIHAAN 8.0
        </h1>
        <h2 className="text-6xl xl:w-[90%] font-medium text-heading tracking-widest font-khinterference mt-2 max-[600px]:text-[300%] ;">
          PRESENTED BY IEEE DTU
        </h2>
        <p className="text-para pr-8 mt-4  xl:w-[60%] w-full font-orbitron font-normal tracking-wider sm:tracking-widest max-[600px]:w-full max-[600px]:text-sm text-base">
          VIHAAN is a 24-hour long hackathon that provides a platform for
          budding programmers to come up with solutions to real-world problems
          using technology. Students participate in teams of up to 4 members. To
          add to the experience and learning quotient, teams that make it past
          the hackathon are awarded various cash prizes and goodies.
        </p>
        <div className="mt-6 w-fit" >
          <button onClick={popout}>
          <Button href="" children={"About IEEE DTU"} />
          </button>
          <AbtIEEE className={className} setClassName={setClassName} />
        </div>
        <div className="ml-[50%] relative -top-20 max-xl:collapse">
          <AboutSVG />
        </div>
      </div>

      <div className="flex items-center w-4/5 max-[1280px]:hidden lg:visible ">
        <div className="relative w-full h-[80%] max-[600px]:hidden ">
          <img
            src="/Images-Abt-IEEE/svgglass.svg"
            alt="Magnifying Glass"
            className="w-full relative left-10 h-[120%] animate-giggle hover:animate-wiggle z-1"
          />

          <div className="text-para-z-1 mt-1 w-[100%] h-10 font-bold font-orbitron 2xl:text-xl flex justify-center absolute top-[25%] -z-3 ">
            COMING SOON!
          </div>
        </div>

        <img
          src="/Images-Abt-IEEE/svg2.svg"
          alt="Decorative Element"
          className="absolute bottom-[-90px] right-70 w-[30%] opacity-100 z-0"
        />
      </div>
    </div>
  );
};

export default About;

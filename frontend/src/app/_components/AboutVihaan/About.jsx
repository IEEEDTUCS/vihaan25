import React from "react";
import Button from "@components/Button";
import "./About.css";
import "@/app/globals.css";
import AboutSVG from "./AboutSvg";

const About = () => {
  return (
    <div className="relative flex items-center justify-between min-h-screen w-full px-20 py-16 pr-0 max-[1280px]:p-[10%]">
      <img
        src="/Images-Abt-IEEE/svg1.svg"
        alt="Background Design"
        className="absolute left-0 top-30 w-auto h-180 object-cover opacity-85"
      />

      <div className="absolute top-[21%] z-10 w-full pl-[3%] ">
        <img
          src="/Images-Abt-IEEE/Head.svg"
          alt="Heading"
          className="mb-10 mr-10 w-150 max-[750px]:w-[50%] max-[750px]:relative right-[5%]"
        />
        <h1 className="text-7xl tracking-widest text-heading font-khinterference w-[60%] max-[600px]:text-[300%] max-[600px]:font-bold max-[600px]:tracking-[0rem] ">
          VIHAAN 8.0
        </h1>
        <h2 className="text-6xl w-[30%] font-medium text-heading font-khinterference mt-2 max-[600px]:text-[300%] ;">
          PRESENTED BY IEEE DTU
        </h2>
        <p className="text-para mt-4 tracking-[3] w-[30%] font-orbitron font-normal text-lg tracking-[90%] max-[600px]:w-[40%] max-[600px]:text-base">
          VIHAAN is a 24-hour long hackathon that provides a platform for
          budding programmers to come up with solutions to real-world problems
          using technology. Students participate in teams of up to 4 members. To
          add to the experience and learning quotient, teams that make it past
          the hackathon are awarded various cash prizes and goodies.
        </p>
        <div className="mt-6 w-fit">
          <Button href="https://www.ieeedtu.in/" children={"About IEEE DTU"} />
        </div>

        <AboutSVG />
      </div>

      <div className="flex justify-end items-center w-1/2 max-[1280px]:collapse xl:visible ">
        <div className="absolute right-0 top-0 z-10">
          <div className="trackbtn absolute -z-1 top-90 right-70 h-100 w-50">
            <p className="text-para mt-1 w-[100%] h-10 font-bold font-black font-orbitron text-xl">
              COMING SOON!
            </p>
          </div>
          <img
            src="/Images-Abt-IEEE/svgglass.svg"
            alt="Magnifying Glass"
            className="w-[100%] h-auto hover:animate-wiggle"
          />
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

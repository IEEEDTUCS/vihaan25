"use client";
import React from "react";
import Image from "next/image";
import FixedAroundClock from "@/app/assets/FixedAroundClock.svg";
import Clockwise from "@/app/assets/Clockwise.svg";
import AntiClockwise from "@/app/assets/Anticlockwise.svg";
import RotateZ from "@/app/assets/RotateZ.svg";
import CompleteClock from "@/app/assets/CompleteClock.svg";
import MovingHand from "@/app/assets/MovingHand.svg";
import HorizontalVectors from "@/app/assets/HorizontalVectors.svg";
import VerticleLines from "@/app/assets/VerticleLines.svg";
import Logo from "@/app/assets/Logo.svg";
import Navigation_links from "../_components/NavBar/Navigation_links";
import Countdown from "../_components/Countdown";

const HomePage = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="relative flex h-screen flex-col items-center justify-start overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={Logo}
            alt="Vihaan Logo"
            width={100}
            height={100}
            className="absolute top-8"
          />
          <Image
            src={FixedAroundClock}
            alt="FixedAroundClock"
            className="absolute"
          />
          <Image
            src={Clockwise}
            alt="FixedAroundClock"
            className="absolute animate-clockwise"
          />
          <Image
            src={AntiClockwise}
            alt="FixedAroundClock"
            className="absolute animate-anticlockwise"
          />
          <Image
            src={RotateZ}
            alt="RotateZ-alongx"
            className="absolute w-[1100px] opacity-30 -rotateX z-10"
          />
          <Image
            src={RotateZ}
            alt="RotateZ-alongy"
            className="absolute w-[1000px] -rotateY z-10"
          />
          <Image
            src={VerticleLines}
            alt="Verticle Lines"
            className="absolute top-[50] z-10 Verticle Lines"
          />
          {/* Complete Clock & Moving Hand */}
          <div className="relative flex items-center justify-center top-6 lg:top-12 w-full">
            {/* Clock Face */}
            <Image
              src={CompleteClock}
              alt="CompleteClock"
              className="absolute w-[1000px]"
            />

            {/* Clock Hand - Centered */}
            <Image
              src={MovingHand}
              alt="MovingHand"
              className="relative hidden md:block lg:h-full opacity-30 top-4 right-2 origin-top animate-clockHand"
            />
          </div>
        </div>
        <div className="text-content font-extrabold relative flex items-center flex-col jusitfy-center top-60 md:top-90 lg:top-90 z-10">
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-khinterference ">
            VIHAAN 8.0
          </h1>
          <h2 className="text-white text-3xl md:mt-4 lg:mt-0 font-khinterference relative">
            AWAITS YOU
          </h2>
          <h2 className="text-white mt-40 md:mt-0 font-pprightGrotesk text-[10px]">
            REGISTER AT
          </h2>
          <div
            className="apply-button"
            data-hackathon-slug="vihaan8"
            data-button-theme="dark-inverted"
          ></div>
          <Image
            src={HorizontalVectors}
            alt="Horizontal Lines"
            className="relative top-20 z-10 Verticle Lines"
          />

          <h4 className="mt-15 text-2xl font-light font-khinterference text-bold tracking-wider">
            WELCOME CODER
          </h4>
          <h5 className="w-56 mt-2 font-light font-khinterference text-center">
            8 Hours of coding,
            <br /> 8 Hours of fun, <br />8 Hours of learning
            <br />
            <br /> 24 hours Hackathon
          </h5>
        </div>
      </div>
      {/* <Navbar /> */}
      <Navigation_links />
      <Countdown />
    </>
  );
};

export default HomePage;

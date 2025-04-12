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
import DotButton from "../_components/ui/Button";
import Logo from "@/app/assets/Logo.svg";
import Navigation_links from "../_components/NavBar/Navigation_links";
import Countdown from "../_components/Countdown";

const Home = () => {
  return (
    <>
      <LandingPage />
      <Countdown />
      <Navigation_links />
    </>
  );
};

const LandingPage = () => {
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

  // console.log("HomePage rendered");
  return (
    <>
      {/* <Navbar /> */}
      <div className="relative flex w-screen h-[80vh] min-h-[600px] sm:h-[110vh] flex-col items-center justify-start overflow-hidden">
        {/* this div contains all the svg and images of the landing */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={FixedAroundClock}
            alt="FixedAroundClock"
            className="absolute"
          />
          {/* 70vh */}
          <div className="absolute w-screen h-screen hidden md:flex items-center justify-center overflow-hidden">
            <Image
              src={Clockwise}
              alt="FixedAroundClock"
              className="absolute animate-clockwise overflow-none"
            />

            <Image
              src={AntiClockwise}
              alt="FixedAroundClock"
              className="absolute animate-anticlockwise overflow-none"
            />
          </div>
          {/* circle with less opacity outermost */}
          {/* <div className="relative opacity-10 overflow-hidden"> */}
          <Image
            src={RotateZ}
            alt="RotateZ-alongx"
            className="absolute w-[1100px] opacity-30 overflow-hidden"
          />
          {/* circle with full opacity -- 2nd last */}
          <Image
            src={RotateZ}
            alt="RotateZ-alongy"
            className="absolute w-[1000px]"
          />
          {/* </div> */}
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
              className="relative h-15 md:block lg:h-full opacity-30 top-2.5 right-1 md:top-4 md:right-2 origin-top animate-clockHand"
            />
          </div>
          {/* logo */}
          <Image
            src={Logo}
            alt="Vihaan Logo"
            width={80}
            height={80}
            className="absolute top-0 xl:top-8 lg:top-0 "
          />
        </div>
        <div className="text-content font-extrabold relative flex items-center flex-col jusitfy-center top-75 md:top-50 lg:top-[38vh] z-10 mb-0">
          <p className="max-[450px]:text-[42px] text-7xl md:text-8xl lg:text-[9rem] font-khinterference">
            VIHAAN 8.0
          </p>
          <h2 className="text-[#d0d0d0] text-xl md:text-3xl md:mt-4 lg:mt-0 font-khinterference relative">
            AWAITS YOU
          </h2>
          <h2 className="text-[#d0d0d0] mt-4 md:mt-6 font-pprightGrotesk text-[10px]">
            REGISTER AT
          </h2>
          <div
            className="apply-button"
            data-hackathon-slug="vihaan8"
            data-button-theme="light"
          ></div>

          <div className="relative mt-8 md:mt0 w-full flex justify-center">
            <Image
              src={HorizontalVectors}
              alt="Horizontal Lines"
              className="absolute top-1  z-10  w-full md:w-3/5"
            />
            <h4 className="text-md min-[440px]:text-xl sm:text-2xl font-khinterference text-bold tracking-wider">
              WELCOME CODER
            </h4>
          </div>
          <h5 className="w-80 font-light font-khinterference text-center text-sm sm:text-base ">
            Let 8 begin
          </h5>
          <div className="flex md:gap-7 gap-4 lg:mt-5 mt-2 sm:mt-0 font-['Orbitron'] text-lg">
            <a
              href="https://chat.whatsapp.com/BES3Gaa2De456UQVYIFR53"
              className="bg-Button px-6 py-2 max-[450px]:scale-75 w-fit"
            >
              Whatsapp
            </a>
            <a
              href="https://vihaan8.devfolio.co/"
              className="bg-Button px-3 py-2 max-[450px]:scale-75 w-fit"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

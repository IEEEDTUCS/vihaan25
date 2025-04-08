"use client";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import { RxInstagramLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import Blur from "@components/AboutVihaan/About-IEEE-Nav/blur";
import Navbar from "@components/NavBar/Navbar";
import "@/app/globals.css";

export default function IEEE({
  className,
  setClassName,
  isHidden,
  setIsHidden,
}) {
  const popin = () => {
    setClassName("");
    setIsHidden(true);
  };

  return (
    <>
      <Navbar isHidden={isHidden} />

      <Blur className={className} popin={popin} />

      <div
        className={`${className} bg-[url(/Images-Abt-IEEE/Abt-IEEE/Bg.svg)] overflow-x-hidden bg-cover bg-local bg-no-repeat  h-[100vh] w-[25%] max-[768px]:w-[65%] max-[668px]:w-[77%] max-[450px]:w-[95%] max-[1280px]:w-[35%] max-[1024px]:w-[45%] max-[400px]:w-[105%] max-[1500px]:w-[30%] fixed -right-150 duration-300 ease-in flex flex-col items-center justify-start p-[3%] max-[1024px]:p-[6%] max-[700px]:p-[8%] max-[768px]:p-[8%] max-[500px]:p-[9.5%] z-1000 top-0`}
      >
        <div className=" w-full flex flex-col items-center justify-start">
          <div className="flex flex-row w-full justify-between mb-[11%] mt-[2%]">
            <div className="font-semibold">
              <h1 className="text-3xl font-orbitron h-[1rem] tracking-widest text-[#A59188]">
                ABOUT US
              </h1>
            </div>
            <div>
              <button onClick={popin}>
                <img
                  src="/Images-Abt-IEEE/Abt-IEEE/Close-button.svg"
                  alt="Close"
                  className="hover:opacity-65 duration-300 ease-in"
                />
              </button>
            </div>
          </div>

          <div className="font-orbitron w-full tracking-wider font-[500] text-[#A59188]">
            <span className="text-sm max-[768px]:text-md max-[400px]:text-md">
              IEEE DTU SB, established in 1983, in the IEEE Delhi Section,
              Region 10, is the oldest student branch and largest technical
              society of Delhi Technological University, with an illustrious
              history of over four decades.
            </span>
          </div>

          <div className="flex flex-col items-center h-[13rem] justify-center p-[10%] bg-[url(/Images-Abt-IEEE/Abt-IEEE/box.svg)] bg-contain bg-no-repeat bg-center w-full text-ellipsis">
            <ul>
              <p className="font-orbitron text-5xl flex flex-row w-full justify-center relative -top-[25%] text-[#A59188]">
                2000+
              </p>
              <p className="font-orbitron relative flex flex-row w-full justify-center text-sm text-[#A59188] tracking-wide">
                IEEE DTU ALUMNI
              </p>
              <div className="bg-[#A59188] relative top-[10%] h-[3vh] flex flex-row w-full justify-center items-center text-white hover:opacity-80 duration-300 ease-in">
                <a
                  href="https://www.ieeedtu.in/#cs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="font-orbitron text-sm tracking-wide">
                    Visit IEEE DTU Page
                  </button>
                </a>
              </div>
            </ul>
          </div>

          <div className="text-2xl font-orbitron font-semibold flex justify-start w-full tracking-widest opacity-100 text-[#A59188]">
            <h1>Contact Us:</h1>
          </div>

          <div className="flex flex-col items-start w-full justify-items-center mt-[5%]">
            <ul>
              <li className="flex items-center gap-4">
                <IoLocation />
                <a className="font-orbitron text-base font-medium tracking-wide text-[#A59188]">
                  Delhi Technological University
                </a>
              </li>
              <li className="flex items-center gap-4 my-[2%]">
                <IoMdCall />
                <span className="font-orbitron text-base font-medium tracking-wide text-[#A59188]">
                  Abhimanyu Kumar Jha
                  <br />
                  (+91 93104 48583)
                </span>
              </li>
              <li className="flex items-center gap-4 mb-[2%]">
                <IoMdCall />
                <p className="font-orbitron text-base font-medium tracking-wide text-[#A59188]">
                  Spruha Kar
                  <br />
                  (+91 72178 61438)
                </p>
              </li>
              <li className="flex items-center gap-4">
                <MdMarkEmailUnread />
                <p className="font-orbitron text-base font-medium tracking-wide text-[#A59188]">
                  ieeedtu.contact@gmail.com
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-row justify-between w-[100%] text-xl mt-[5%]">
            <div className="flex flex-row justify-between w-[100%] mx-[35%]">
              <a
                href="https://www.instagram.com/ieee.dtu?igsh=NmoxaXVub3B3MTR0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RxInstagramLogo className="hover:text-2xl duration-300 ease-in" />
              </a>
              <a
                href="https://www.linkedin.com/company/ieee-dtu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-2xl duration-300 ease-in" />
              </a>
              <a
                href="https://discord.gg/rfD9aW48"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord className="hover:text-2xl duration-300 ease-in" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

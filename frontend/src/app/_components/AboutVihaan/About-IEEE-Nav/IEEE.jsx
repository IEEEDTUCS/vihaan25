"use client"
import React from "react";
import "@/app/globals.css";
import { IoLocation } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import { RxInstagramLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import Blur from "@components/AboutVihaan/About-IEEE-Nav/blur";
// import { useState } from "react";

export default function IEEE({ className, setClassName }) {
    const popin = () => {
      setClassName(""); 
    };
//     console.log(className);
    
return (
        <><Blur className={className} popin={popin} ></Blur>
        <div className={`${className} bg-[url(/Images-Abt-IEEE/Abt-IEEE/Bg.svg)] bg-cover h-[100vh] w-[25vw] fixed -right-150 duration-300 ease-in flex flex-col items-center justify-start p-10 z-1000 top-0`}>
          <div className="overflow-hidden text-ellipsis">
                <div className="flex flex-row w-full justify-between mb-[11%] mt-[5%] ">
                        <div className="font-semibold ">
                                <h1 className="text-3xl font-orbitron tracking-widest text-[#A59188]">ABOUT US</h1>
                        </div>
                        <div>
                                <button onClick={popin}>
                                        <img src="/Images-Abt-IEEE/Abt-IEEE/Close-button.svg" alt="" className="hover:opacity-65 duration-300 ease-in" />
                                </button>
                        </div>
                </div>
                <div className="font-orbitron tracking-widest font-[500] text-[#A59188] ">
                        IEEE DTU SB, established in 1983, in the IEEE Delhi Section, Region 10, is the oldest student branch and largest technical society of Delhi Technological University, with an illustrious history of over four decades.
                </div>
                <div className="flex flex-col items-center justify-start p-[25%] bg-[url(/Images-Abt-IEEE/Abt-IEEE/box.svg)] bg-contain bg-no-repeat bg-center w-full ">
                        <p className="font-orbitron text-5xl relative -top-[25%] text-[#A59188]">2000+</p>
                        <p className="font-orbitron relative text-sm text-[#A59188] tracking-wide">IEEE DTU ALUMNI</p>
                        <div className="bg-[#A59188] relative top-[10%] w-[175%] h-[3vh] text-white flex items-center justify-center hover:opacity-80 duration-300 ease-in">
                                <a href="https://www.ieeedtu.in/#cs" target="_blank"><button className="font-orbitron text-sm tracking-wide">
                                        Visit IEEE DTU Page</button></a>
                        </div>
                </div>
                <div className="text-2xl font-orbitron font-semibold flex justify-start w-full tracking-widest opacity-100 text-[#A59188]">
                        <h1>Contact Us:</h1>
                </div>
                <div className="flex flex-row justify-around w-full mt-[5%] ">
                        <div className=" flex flex-col items-start ">
                                <IoLocation className="mb-[150%]" />
                                <IoMdCall className="mb-[180%]" />
                                <IoMdCall className="mb-[180%]" />
                                <MdMarkEmailUnread className="mb-[90%]" />
                        </div>
                        <div className="flex flex-col items-start relative -top-[4%]">
                                <p className="font-orbitron text-base font-medium tracking-wide text-[#A59188]">Delhi Technological University</p>
                                <p className="font-orbitron text-base font-medium tracking-wide text-[#A59188] my-[2%]">Abhimanyu Kumar Jha<br /> <hr /> (+91 93104 48583) <hr /></p>
                                <p className="font-orbitron text-base font-medium tracking-wide text-[#A59188] mb-[2%]">Spruha Kar <br /><hr />(+91 72178 61438) <hr /></p>
                                <p className="font-orbitron text-base font-medium tracking-wide text-[#A59188]">ieeedtu.contact@gmail.com</p>
                        </div>

                </div>

                <div className="flex flex-row justify-around w-[33%] text-xl mt-[5%]">

                        <a href="https://www.instagram.com/ieee.dtu?igsh=NmoxaXVub3B3MTR0" target="_blank"><RxInstagramLogo className="hover:text-2xl duration-300 ease-in" /></a>
                        <a href="https://www.linkedin.com/company/ieee-dtu/" target="_blank"><FaLinkedin className="hover:text-2xl duration-300 ease-in" /></a>
                        <a href="https://discord.gg/rfD9aW48" target="_blank"><FaDiscord className="hover:text-2xl duration-300 ease-in" /></a>
                </div>
          </div>
        </div></>
);
};

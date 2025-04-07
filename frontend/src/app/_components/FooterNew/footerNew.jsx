"use client";
import React from "react";
import "@/app/globals.css";
import CustomMap from "@/app/CustomMap";
import { APIProvider } from "@vis.gl/react-google-maps";
import { IoLocation } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import { RxInstagramLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { motion } from "framer-motion";


export default function FooterNew() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <motion.div
            className="flex flex-col w-full h-full bg-[#13151ba5] text-[#8F7E77] font-orbitron mt-[20%] pb-[1%]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="flex flex-row justify-evenly">
                <div className="w-[20%] h-[20rem] flex flex-row justify-center items-center">
                    <img src="/svg/Logo.svg" alt="logo" className="w-[90%] h-[75%]" />
                </div>
                <div className="w-[20%] h-[20rem] flex flex-row">
                    <ul>
                    <li className="flex flex-row my-[4%] justify-center mb-[10%] font-extrabold text-3xl text-[#A59188]">
                            <h1>Venue</h1>
                        </li>
                        <li className="flex items-center gap-4 my-[2%]">
                            <IoLocation />
                            <a className="font-orbitron text-base font-medium tracking-wide text-[#A59188]">
                                Delhi Technological University
                            </a>
                        </li>
                        <li className="flex w-full h-[60%] mt-[10%]">
                            <APIProvider apiKey={"AIzaSyCzFyzUU4ElSG3KGBoqBxu1AYYaQYQtZZk"}>
                                <CustomMap />
                            </APIProvider>
                        </li>
                    </ul>
                </div>
                <div className="w-[30%] h-[20rem] flex flex-row justify-center">
                    <ul>
                        <li className="flex flex-row my-[4%] justify-center mb-[10%] font-extrabold text-3xl text-[#A59188]">
                            <h1>Contact Us</h1>
                        </li>
                        <li className="flex items-center gap-4 my-[2%]">
                            <IoMdCall />
                            <span className="font-orbitron text-base font-medium tracking-wide text-[#A59188]">
                                Abhimanyu Kumar Jha (+91 93104 48583)
                            </span>
                        </li>
                        <li className="flex items-center gap-4 mb-[2%]">
                            <IoMdCall />
                            <p className="font-orbitron text-base font-medium tracking-wide text-[#A59188]">
                                Spruha Kar (+91 72178 61438)
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
                <div className="w-[12%] h-[20rem] flex flex-col justify-start items-center">
                    <div className="text-md font-orbitron font-medium flex flex-col m-[4%] justify-start w-full tracking-normal opacity-100 text-[#A59188]">
                        <h1 className="mb-[10%] font-extrabold text-2xl text-[#A59188]">Social Media <br /></h1>
                        <p>Learn , Hack , Win...</p>
                    </div>
                    <br />
                    <div className="flex flex-row justify-evenly w-[63%]">
                        <a href="https://www.instagram.com/ieee.dtu?igsh=NmoxaXVub3B3MTR0" target="_blank" rel="noopener noreferrer">
                            <RxInstagramLogo className="hover:text-2xl duration-300 ease-in" />
                        </a>
                        <a href="https://www.linkedin.com/company/ieee-dtu/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="hover:text-2xl duration-300 ease-in" />
                        </a>
                        <a href="https://discord.gg/rfD9aW48" target="_blank" rel="noopener noreferrer">
                            <FaDiscord className="hover:text-2xl duration-300 ease-in" />
                        </a>
                    </div>
                </div>
                <div className="w-[5%] h-[20rem] mr-[5%] flex flex-row justify-center items-center">
                    <button
                        className="w-16 h-16 flex items-center justify-center rounded-full bg-[#A59188] text-[#13151B] text-4xl font-bold hover:bg-[#8F7E77] transition duration-300 ease-in-out"
                        onClick={scrollToTop}
                    >
                        ↑
                    </button>
                </div>
            </div>
            <div className="w-full h-10 mt-[3%] flex flex-col justify-between">
                <div className="line w-full h-4 px-[3%]">
                    <hr />
                </div>
                <div>
                    <p className="text-center w-full">Designed with ❤️ by IEEE DTU</p>
                </div>
            </div>
        </motion.div>
    );
}
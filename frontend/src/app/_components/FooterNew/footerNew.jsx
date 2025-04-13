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
import Link from "next/link";

export default function FooterNew({ visible }) {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

  return (
    <motion.footer
      className={`w-full bg-gradient-to-tr from-[#0e0e0eab] via-[#121111b1] to-[#3c2c2685] border border-dashed border-[#88888866] transition-colors duration-300 hover:border-white/30
 text-[#8F7E77] font-orbitron pt-10 pb-6 z-[100]`}
      initial={{ opacity: 0, y: 50 }}
      // animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-wrap justify-evenly px-6 gap-6">
        <div className="flex justify-center items-center w-[240px] h-[200px]">
          <img src="/svg/Logo.svg" alt="logo" className="w-[90%] h-[75%]" />
        </div>

               
                <div className="flex flex-col w-[240px]">
                    <h2 className="text-xl font-extrabold text-[#A59188] mb-4">Venue</h2>
                    <div className="flex items-start gap-2 mb-4">
                        <IoLocation size={20} />
                        <p className="text-base">Delhi Technological University</p>
                    </div>
                    <div className="w-full h-[160px] rounded overflow-hidden shadow-md">
                        <APIProvider apiKey={apiKey}>
                            <CustomMap />
                        </APIProvider>
          </div>
          
        </div>

        <div className="flex flex-col w-[320px]">
          <h2 className="text-xl font-extrabold text-[#A59188] mb-4">
            Contact Us
          </h2>
          <div className="flex items-start gap-3 mb-2">
            <IoMdCall size={20} />
            <span>
              Abhimanyu Kumar Jha
              <br />
              (+91 93104 48583)
            </span>
          </div>
          <div className="flex items-start gap-3 mb-2">
            <IoMdCall size={20} />
            <span>
              Spruha Kar
              <br />
              (+91 72178 61438)
            </span>
          </div>
          <div className="flex items-start gap-3">
            <MdMarkEmailUnread size={20} />
            <p>ieeedtu.contact@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col w-[200px]">
          <h2 className="text-xl font-extrabold text-[#A59188] mb-4">
            Social Media
          </h2>
          <p className="mb-4">Learn, Hack, Win...</p>
          <div className="flex gap-5 text-2xl">
            <a
              href="https://www.instagram.com/ieee.dtu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxInstagramLogo className="hover:text-red transition duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/company/ieee-dtu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-[#0077B5] transition duration-300" />
            </a>
            <a
              href="https://discord.gg/rfD9aW48"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="hover:text-white transition duration-300" />
            </a>
          </div>
          <Link
            className="flex cursor-pointer justify-center items-center text-center text-nowrap px-4 py-2 bg-Button text-[#a89a84] font-orbitron font-bold mt-3"
            href="/Quiz"
          >
            {" "}
            Quiz Link
          </Link>
        </div>

        <div className="flex items-center justify-center w-[80px]">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-[#A59188] text-[#13151B] text-2xl font-bold hover:bg-[#8F7E77] transition duration-300"
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      </div>

      <div className="mt-8 px-4">
        <hr className="border-[#8F7E77]/30" />
        <p className="text-center text-sm mt-4">Made with ❤️ by IEEE DTU</p>
      </div>
    </motion.footer>
  );
}

"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
//import { Plus } from "lucide-react";
import Image from "next/image";
import GridLayout from "./GridLayout";
import Volume_side_svg from "./assets/Volume_side_svg";
import Navbar_circle from "./assets/Navbar_circle";
import Home from "./assets/Home";
import About from "./assets/About";
import Schedule from "./assets/Schedule";
import Sponsor from "./assets/Sponsor";
import FAQ from "./assets/Faq";
import { Link } from 'react-scroll';
// import Image from "next/image";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [songPlaying, setSongPlaying] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  };

  useEffect(() => {
    const handleScroll = () => {
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {1
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 backdrop-blur-sm right-0 transition-opacity duration-300 opacity-100 ${isOpen ? "bg-transparent " : "bg-transparent"} `}
      style={{ zIndex: 10 }}
    >
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Area */}
          <div className="flex space-x-1  items-center relative">
            <div className="text-center justify-center text-stone-500 text-xs font-normal font-['Orbitron'] tracking-widest">
              VOLUME
            </div>
            <div className="text-center justify-center text-stone-500 text-xs font-normal font-['Orbitron'] tracking-widest">
              {songPlaying ? "<ON>" : "<OFF>"}
            </div>
            <Volume_side_svg/>
            
          </div>

          {/* Navigation Links */}
          <div className=" md:block hidden xl:absolute xl:right-8 ">
            <div className=" flex items-baseline lg:relative xl:relative md:absolute md:top-6 lg:top-0 md:right-8 lg:right-0  xl:left-0.5   relative ">
              {/* Dotted Lines */}
              <Navbar_circle/>
              <div className="flex justify-evenly space-x-0 md:space-x-4 border-white  ">
                <Link to="home" smooth={true} duration={1500} offset={-100}>
                  <Home />
                </Link>
                <Link to="about" smooth={true} duration={1500} offset={-100}>
                  <About />
                </Link>
                <Link to="schedule" smooth={true} duration={1500} offset={-100}>
                  <Schedule />
                </Link>
                <Link to="sponsor" smooth={true} duration={1500} offset={-100}>
                  <Sponsor />
                </Link>
                <Link to="faqs" smooth={true} duration={1500} offset={-100}>
                  <FAQ />
                </Link>
                <div className="-right-[1vw] absolute top-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="599"
                    viewBox="0 0 22 599"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.0004 1V1.875V12.8605H21.9847V13H20.9847V1.875H0.000366211V0.875H22.0004V1ZM22.0004 42.5124V18.7908H21.0004L21.0004 42.5124H22.0004ZM22.0004 58.3264V99.8386H21.0004L21.0004 58.3264H22.0004ZM22.0004 151.235V113.676H21.0004L21.0004 151.235H22.0004ZM22.0004 157.165V204.608H21.0004L21.0004 157.165H22.0004ZM22.0004 222.398V208.562H21.0004V222.398H22.0004ZM22.0004 228.328V256.004H21.0004L21.0004 228.328H22.0004ZM22.0004 275.772V259.958H21.0004V275.772H22.0004ZM22.0004 281.702V293.562H21.0004V281.702H22.0004ZM22.0004 315.306V297.516H21.0004L21.0004 315.306H22.0004ZM22.0004 319.26V348.912H21.0004L21.0004 319.26H22.0004ZM22.0004 366.702V350.888H21.0004V366.702H22.0004ZM22.0004 370.656V372.634H21.0004V370.656H22.0004ZM22.0004 390.424V378.564H21.0004L21.0003 390.424H22.0004ZM22.0004 400.308V447.75H21.0003L21.0003 400.308H22.0004ZM22.0004 467.518V449.728H21.0003V467.518H22.0004ZM22.0004 471.472V479.378H21.0003V471.472H22.0004ZM21.0003 598.858H22.0004V483.332H21.0003L21.0003 598.858Z"
                      fill="#8F7E77"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <motion.div
              className=" top-[14px] right-3"
              style={{ position: "absolute", zIndex: 100 }}
              whileTap={{ rotate: 90 }}
              animate={{ rotate: isRotated ? 45 : 0 }}
              transition={{ stiffness: 300 }}
              onClick={toggleMenu}
            >
              
              <img
                src="/svg/faqIcon.svg"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <GridLayout
          className="md:hidden  lg:hidden "
          style={{ zIndex: 1000 }}
        />
      )}
    </nav>
  );
};

export default Navbar;

"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
//import { Plus } from "lucide-react";
import Image from "next/image";
import GridLayout from "./GridLayout";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [songPlaying, setSongPlaying] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <nav className="relative bg-transparent text-white">
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
            <div
              style={{
                width: "100%",
                height: "100%",
                marginLeft: 160,
                transform: "rotate(180deg)",
                marginTop: 20,
              }}
            >
              <div
                style={{
                  width: 19,
                  height: 0,
                  left: 141,
                  top: 19,
                  position: "absolute",
                  transform: "rotate(270deg)",
                  transformOrigin: "top left",
                  outline: "1.50px #8F7E77 solid",
                  outlineOffset: "-0.75px",
                }}
              ></div>
              <div
                style={{
                  width: 9,
                  height: 9,
                  left: 131,
                  top: 14,
                  position: "absolute",
                  transform: "rotate(180deg)",
                  transformOrigin: "top left",
                  borderRadius: 9999,
                  border: "1.12px #8F7E77 solid",
                }}
              />
              <div
                style={{
                  width: 15,
                  height: 0,
                  left: 123,
                  top: 10,
                  position: "absolute",
                  transform: "rotate(180deg)",
                  transformOrigin: "top left",
                  outline: "1px #8F7E77 solid",
                  outlineOffset: "-0.50px",
                }}
              ></div>
              <div
                style={{
                  width: 15,
                  height: 0,
                  left: 58,
                  top: 10,
                  position: "absolute",
                  transform: "rotate(180deg)",
                  transformOrigin: "top left",
                  outline: "1px #8F7E77 solid",
                  outlineOffset: "-0.50px",
                }}
              ></div>
              <div
                style={{
                  width: 5,
                  height: 0,
                  left: 102,
                  top: 10,
                  position: "absolute",
                  transform: "rotate(180deg)",
                  transformOrigin: "top left",
                  outline: "1px #8F7E77 solid",
                  outlineOffset: "-0.50px",
                }}
              ></div>
              <div
                style={{
                  width: 5,
                  height: 0,
                  left: 37,
                  top: 10,
                  position: "absolute",
                  transform: "rotate(180deg)",
                  transformOrigin: "top left",
                  outline: "1px #8F7E77 solid",
                  outlineOffset: "-0.50px",
                }}
              ></div>
              <div
                style={{
                  width: 15,
                  height: 0,
                  left: 91,
                  top: 10,
                  position: "absolute",
                  transform: "rotate(180deg)",
                  transformOrigin: "top left",
                  outline: "1px #8F7E77 solid",
                  outlineOffset: "-0.50px",
                }}
              ></div>
              <div
                style={{
                  width: 15,
                  height: 0,
                  left: 26,
                  top: 10,
                  position: "absolute",
                  transform: "rotate(180deg)",
                  transformOrigin: "top left",
                  outline: "1px #8F7E77 solid",
                  outlineOffset: "-0.50px",
                }}
              ></div>
              <div
                style={{
                  width: 9,
                  height: 0,
                  left: 74,
                  top: 10,
                  position: "absolute",
                  transform: "rotate(180deg)",
                  transformOrigin: "top left",
                  outline: "1px #8F7E77 solid",
                  outlineOffset: "-0.50px",
                }}
              ></div>
              <div
                style={{
                  width: 9,
                  height: 0,
                  left: 9,
                  top: 10,
                  position: "absolute",
                  transform: "rotate(180deg)",
                  transformOrigin: "top left",
                  outline: "1px #8F7E77 solid",
                  outlineOffset: "-0.50px",
                }}
              ></div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className=" md:block hidden xl:absolute xl:right-8 ">
            <div className=" flex items-baseline lg:relative xl:relative md:absolute md:top-6 lg:top-0 md:right-8 lg:right-0  xl:left-0.5   relative ">
              {/* Dotted Lines */}
              {
                <div className=" lg:block hidden " style={{ marginRight: 160 }}>
                  <div
                    style={{
                      width: 19,
                      height: 0,
                      left: 141,
                      top: 19,
                      position: "absolute",
                      transform: "rotate(270deg)",
                      transformOrigin: "top left",
                      outline: "1.50px #8F7E77 solid",
                      outlineOffset: "-0.75px",
                    }}
                  ></div>
                  <div
                    style={{
                      width: 9,
                      height: 9,
                      left: 131,
                      top: 14,
                      position: "absolute",
                      transform: "rotate(180deg)",
                      transformOrigin: "top left",
                      borderRadius: 9999,
                      border: "1.12px #8F7E77 solid",
                    }}
                  />
                  <div
                    style={{
                      width: 15,
                      height: 0,
                      left: 123,
                      top: 10,
                      position: "absolute",
                      transform: "rotate(180deg)",
                      transformOrigin: "top left",
                      outline: "1px #8F7E77 solid",
                      outlineOffset: "-0.50px",
                    }}
                  ></div>
                  <div
                    style={{
                      width: 15,
                      height: 0,
                      left: 58,
                      top: 10,
                      position: "absolute",
                      transform: "rotate(180deg)",
                      transformOrigin: "top left",
                      outline: "1px #8F7E77 solid",
                      outlineOffset: "-0.50px",
                    }}
                  ></div>
                  <div
                    style={{
                      width: 5,
                      height: 0,
                      left: 102,
                      top: 10,
                      position: "absolute",
                      transform: "rotate(180deg)",
                      transformOrigin: "top left",
                      outline: "1px #8F7E77 solid",
                      outlineOffset: "-0.50px",
                    }}
                  ></div>
                  <div
                    style={{
                      width: 5,
                      height: 0,
                      left: 37,
                      top: 10,
                      position: "absolute",
                      transform: "rotate(180deg)",
                      transformOrigin: "top left",
                      outline: "1px #8F7E77 solid",
                      outlineOffset: "-0.50px",
                    }}
                  ></div>
                  <div
                    style={{
                      width: 15,
                      height: 0,
                      left: 91,
                      top: 10,
                      position: "absolute",
                      transform: "rotate(180deg)",
                      transformOrigin: "top left",
                      outline: "1px #8F7E77 solid",
                      outlineOffset: "-0.50px",
                    }}
                  ></div>
                  <div
                    style={{
                      width: 15,
                      height: 0,
                      left: 26,
                      top: 10,
                      position: "absolute",
                      transform: "rotate(180deg)",
                      transformOrigin: "top left",
                      outline: "1px #8F7E77 solid",
                      outlineOffset: "-0.50px",
                    }}
                  ></div>
                  <div
                    style={{
                      width: 9,
                      height: 0,
                      left: 74,
                      top: 10,
                      position: "absolute",
                      transform: "rotate(180deg)",
                      transformOrigin: "top left",
                      outline: "1px #8F7E77 solid",
                      outlineOffset: "-0.50px",
                    }}
                  ></div>
                  <div
                    style={{
                      width: 9,
                      height: 0,
                      left: 9,
                      top: 10,
                      position: "absolute",
                      transform: "rotate(180deg)",
                      transformOrigin: "top left",
                      outline: "1px #8F7E77 solid",
                      outlineOffset: "-0.50px",
                    }}
                  ></div>
                </div>
              }

              <div className="flex justify-evenly space-x-0 md:space-x-4 border-white  ">
                <div
                  className="hidden md:block cursor-pointer"
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#8F7E77",
                    fontSize: 12,
                    fontFamily: "Orbitron",
                    fontWeight: "400",
                    letterSpacing: 2.4,
                    wordWrap: "break-word",
                  }}
                >
                  HOME
                </div>
                <div
                  className="hidden md:block cursor-pointer"
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#8F7E77",
                    fontSize: 12,
                    fontFamily: "Orbitron",
                    fontWeight: "400",
                    letterSpacing: 2.4,
                    wordWrap: "break-word",
                  }}
                >
                  ABOUT
                </div>

                <div
                  className="hidden md:block cursor-pointer"
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#8F7E77",
                    fontSize: 12,
                    fontFamily: "Orbitron",
                    fontWeight: "400",
                    letterSpacing: 2.4,
                    wordWrap: "break-word",
                  }}
                >
                  SCHEDULE
                </div>
                {/* <div
                  className="hidden md:block"
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#8F7E77",
                    fontSize: 12,
                    fontFamily: "Orbitron",
                    fontWeight: "400",
                    letterSpacing: 2.4,
                    wordWrap: "break-word",
                  }}
                >
                  FAQ
                </div> */}
                <div
                  className="hidden md:block cursor-pointer"
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#8F7E77",
                    fontSize: 12,
                    fontFamily: "Orbitron",
                    fontWeight: "400",
                    letterSpacing: 2.4,
                    wordWrap: "break-word",
                  }}
                >
                  FAQ's
                </div>
                {/* <div  style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#8F7E77', fontSize: 12, fontFamily: 'Orbitron', fontWeight: '400', letterSpacing: 2.40, wordWrap: 'break-word' }}>TRACK</div> */}
                {/* <div  style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#8F7E77', fontSize: 12, fontFamily: 'Orbitron', fontWeight: '400', letterSpacing: 2.40, wordWrap: 'break-word' }}>TRACK</div> */}
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
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8.65106"
                  y="8.28872"
                  width="22.6979"
                  height="22.6979"
                  stroke="#A59188"
                  strokeWidth="0.867306"
                />
                <rect
                  x="20.0828"
                  y="10.0394"
                  width="13.6332"
                  height="13.6332"
                  transform="rotate(45 20.0828 10.0394)"
                  stroke="#A59188"
                  strokeWidth="0.867306"
                />
                <rect
                  x="20.0828"
                  y="2.8862"
                  width="23.7493"
                  height="23.7493"
                  transform="rotate(45 20.0828 2.8862)"
                  stroke="#A59188"
                  strokeWidth="0.867306"
                />
                <line
                  x1="20.0866"
                  x2="20.0866"
                  y2="5.49854"
                  stroke="#A59188"
                  strokeWidth="0.173461"
                />
                <line
                  x1="20.0866"
                  y1="33.7768"
                  x2="20.0866"
                  y2="39.2753"
                  stroke="#A59188"
                  strokeWidth="0.173461"
                />
                <line
                  x1="39.6375"
                  y1="19.7244"
                  x2="34.139"
                  y2="19.7244"
                  stroke="#A59188"
                  strokeWidth="0.173461"
                />
                <line
                  x1="5.86087"
                  y1="19.7244"
                  x2="0.362328"
                  y2="19.7244"
                  stroke="#A59188"
                  strokeWidth="0.173461"
                />
                <line
                  x1="15.2599"
                  y1="16.5"
                  x2="24.7401"
                  y2="16.5"
                  stroke="#AC9990"
                />
                <line
                  x1="15.2599"
                  y1="22.8202"
                  x2="24.7401"
                  y2="22.8202"
                  stroke="#AC9990"
                />
                <line
                  x1="15.2599"
                  y1="19.6601"
                  x2="24.7401"
                  y2="19.6601"
                  stroke="#AC9990"
                />
              </svg>
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

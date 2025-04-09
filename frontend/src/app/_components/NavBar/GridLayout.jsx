import React from "react";
import { Link } from "react-scroll";
import ScrollLink from "./assets/ScrollLink";

const GridLayout = ({ closeMenu }) => {
  return (
    <div
      className="md:hidden -top-0 z-999999 w-[100vw] right-auto h-screen "
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "repeat(8, 1fr)",
        height: "100vh",
        gap: "20px",
        padding: "20px",
        boxSizing: "border-box",
        position: "absolute",
      }}
    >
      <div className="absolute bg-black w-[100vw] opacity-100 -z-10 h-full">
        {/* background */}
        <img className="w-[100vw]" src="./Group22.png" alt="" />
      </div>
      <div
        style={{
          gridRow: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="z-1002">
          {/* logo */}
          <img
            className="absolute top-5 left-1/2 transform -translate-x-1/2 "
            src="./Logo.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col space-y-12 mt-20 text-2xl ">
        <Link
          to="home"
          smooth={true}
          duration={1500}
          offset={-100}
          onClick={closeMenu}
        >
          <ScrollLink name="HOME" />
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={1500}
          offset={-100}
          onClick={closeMenu}
        >
          <ScrollLink name="ABOUT" />
        </Link>
        <Link
          to="schedule"
          smooth={true}
          duration={1500}
          offset={-100}
          onClick={closeMenu}
        >
          <ScrollLink name="SCHEDULE" />
        </Link>
        <Link
          to="sponsor"
          smooth={true}
          duration={1500}
          offset={-100}
          onClick={closeMenu}
        >
          <ScrollLink name="SPONSOR" />
        </Link>
        <Link
          to="faqs"
          smooth={true}
          duration={1500}
          offset={-100}
          onClick={closeMenu}
        >
          <ScrollLink name="FAQ" />
        </Link>
      </div>
    </div>
  );
};

export default GridLayout;

import React from "react";
import Logo from "@/app/assets/Logo.svg";
import { Link } from "react-scroll"; // Ensure you import Link for smooth scrolling

const GridLayout = ({ setIsOpen }) => {
  // Accept setIsOpen as a prop
  return (
    <div
      className="md:hidden top-5 z-400 w-[100vw] right-auto"
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
      <div className="absolute bg-black w-[100vw] opacity-90 -z-10 h-full">
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
        {/* Placeholder for any content */}
      </div>

      <div
        style={{
          gridRow: "3",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="mt-6"
          style={{
            padding: "10px 20px",
          }}
        >
          {/* tracks */}
          <Link
            to="about"
            smooth={true}
            duration={1500}
            offset={-100}
            onClick={() => setIsOpen(false)}
            style={{ zIndex: 9999, cursor: "pointer" }}
          >
            <img src="./AboutButton.png" alt="" />
          </Link>
        </div>
      </div>

      <div
        style={{
          gridRow: "5",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <div
          className="absolute left-0 top-[38vh]"
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <div
            style={{
              padding: "10px 20px",
            }}
          >
            {/* judges */}
            <Link
              to="schedule"
              smooth={true}
              duration={1500}
              offset={-100}
              onClick={() => setIsOpen(false)}
              style={{ zIndex: 9999, cursor: "pointer" }}
            >
              <img src="./ScheduleButton.png" alt="" />
            </Link>
          </div>
        </div>

        <div
          className="right-0 absolute top-[38vh]"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              padding: "10px 20px",
            }}
          >
            {/* faqs */}
            <Link
              to="faqs"
              smooth={true}
              duration={1500}
              offset={-100}
              onClick={() => setIsOpen(false)}
              style={{ zIndex: 9999, cursor: "pointer" }}
            >
              <img src="./FAQButton.png" alt="" />
            </Link>
          </div>
        </div>
      </div>

      <div
        style={{
          gridRow: "6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: "10px 20px",
          }}
        >
          {/* home */}
          <Link
            to="home"
            smooth={true}
            duration={1500}
            offset={-100}
            onClick={() => setIsOpen(false)}
            style={{ zIndex: 9999, cursor: "pointer" }}
          >
            <img src="./HomeButton.png" alt="" />
          </Link>
        </div>
      </div>

      <div
        style={{
          gridRow: "7",
          display: "flex",
          justifyContent: "center",
          alignItems: "top",
        }}
      >
        <div
          style={{
            padding: "10px 20px",
          }}
        >
          {/* team */}
          <Link
            to="team"
            smooth={true}
            duration={1500}
            offset={-100}
            onClick={() => setIsOpen(false)}
            style={{ zIndex: 9999, cursor: "pointer" }}
          >
            <img className="z-100000" src="./SponsorButton.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;

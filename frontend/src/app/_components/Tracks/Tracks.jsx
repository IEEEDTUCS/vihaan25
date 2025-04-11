"use client";
import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
// import Book from "/Book.png";
// import MobileBook from "@/app/_components/Tracks/mobileTrack.png";
// import LeftPage from "@/app/_components/Tracks/leftPage.png";
// import RightPage from "@/app/_components/Tracks/rightPage.png";
import TrackButton from "./TrackButton";
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

export const Tracks = () => {
  const flipBookRef = useRef(null);

  // const [isMobile, setIsMobile] = useState(false);
  const isMobile = useIsMobile(500);
  // setIsMobile(useIsMobile(768));
  // Adjust the breakpoint as needed
  console.log("Is mobile:", isMobile);
  const content = [
    {
      title: "Esports",
      content:
        "Dive into the booming world of competitive gaming. From tournament management platforms and real-time stat tracking to AI-powered coaching assistants and virtual arenas, redefine how players and fans experience esports. Think beyond just games—build communities, engagement tools, and monetization platforms for gamers and organizers alike.",
    },
    {
      title: "Transportation",
      content:
        "Rethink how people and goods move. Develop intelligent transport systems, ride-sharing algorithms, traffic flow optimizers, or eco-friendly logistics solutions. Focus on real-time data usage, accessibility, automation, or even futuristic ideas like drone delivery and autonomous vehicles. Make transit faster, safer, and greener.",
    },
    {
      title: "Women Safety",
      content:
        "Empower women through technology by designing innovative safety-focused solutions. Work on emergency alert systems, location tracking with privacy-first approaches, community-driven support apps, AI surveillance for detecting threats, or wearable tech for real-time protection. Let your tech foster freedom and confidence.",
    },
    {
      title: "Sustainability",
      content:
        "Help build a greener tomorrow with tech-driven sustainability projects. Create solutions that reduce carbon emissions, track environmental impact, promote circular economies, or enhance urban green planning. Explore areas like smart agriculture, eco-friendly products, recycling innovation, and climate change education tools.",
    },
    {
      title: "Healthcare",
      content:
        "Improve the quality and accessibility of healthcare through smart, scalable innovations. Think telehealth platforms, wearable health monitors, early disease detection with AI, mental wellness solutions, or data-driven hospital resource management. Whether preventive or reactive, tech can save lives—literally.",
    },
    {
      title: "Security",
      content:
        "In a world that’s more connected than ever, security is everything. Build tools for cybersecurity, digital identity protection, fraud detection, encrypted communications, or physical security systems powered by IoT and AI. Tackle threats before they become crises and keep the digital and real world safe.",
    },
    {
      title: "Eduction",
      content:
        "Reshape the future of learning through engaging, accessible, and adaptive technologies. Create platforms for remote and hybrid education, interactive learning modules using AR/VR, AI tutors, or inclusive tools for students with disabilities. Help close the learning gap and make quality education universal.",
    },
    {
      title: "Fintech",
      content:
        "Transform the financial landscape with disruptive innovation. From budgeting apps and micro-investment platforms to decentralized finance (DeFi), fraud analytics, and inclusive banking—create tech that makes managing money smarter, safer, and available to everyone, everywhere.",
    },
  ];

  const goToPage = (targetIndex) => {
    const book = flipBookRef.current.pageFlip();
    const currentPage = book.getCurrentPageIndex();
    if (targetIndex % 2 != 0) targetIndex = targetIndex - 1;

    if (targetIndex === currentPage) return;

    const flipInterval = setInterval(() => {
      const newIndex = book.getCurrentPageIndex();
      if (newIndex === targetIndex) {
        clearInterval(flipInterval);
      } else {
        if (targetIndex > newIndex) book.flipNext();
        else book.flipPrev();
      }
    }, 1000);
  };

  return (
    <>
      <p className="md:text-7xl text-4xl tracking-widest font-bold  font-khinterference flex justify-center md:mt-32">
        Tracks
      </p>
      <div className="flex flex-col items-center justify-center w-full relative gap-4 mt-0 h-fit pb-20 pt-10 md:bg-[url(/Book.png)]  bg-contain bg-no-repeat bg-center">
        {/* bg-[url(/MobileBook.png)] */}
        {/* <Image
          src="/Book.png"
          alt="Book"
          className=" h-[600] w-[1000] md:block hidden"
          width={1000}
          height={600}
        />
        <Image
          src="/MobileBook.png"
          alt="Book"
          className=" h-[400] w-[300] md:hidden block"
          width={500}
          height={600}
        /> */}
        <HTMLFlipBook
          width={isMobile ? 320 : 410}
          height={isMobile ? 500 : 600}
          drawShadow
          showCover={false}
          className="shadow-2xl bg-none block pl-5"
          mobileScrollSupport={true}
          ref={flipBookRef}
          autoSize={true}
        >
          {content.map((item, i) => (
            <Page
              key={i}
              number={i + 1}
              className={i % 2 === 0 ? "Book-left-page" : "Book-right-page"}
            >
              <div className="p-14 w-full h-full flex flex-col justify-start items-start ">
                <h2 className="text-2xl font-black mb-4 text-blue-900 font-khinterference">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-800 font-khinterference">
                  {item.content}
                </p>
              </div>
            </Page>
          ))}
        </HTMLFlipBook>
      </div>
      <div className="flex justify-center items-center w-full h-fit mt-10 mb-10 mx-2">
        <div className="w-full md:w-4/5 lg:w-3/5 grid  sm:grid-cols-4 grid-cols-2 justify-center items-center  gap-1 sm:gap-4 relative p-4">
          {content.map((item, index) => (
            <MyBotton
              key={index}
              children={item.title}
              onClick={() => goToPage(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const Page = React.forwardRef(({ children, className }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex justify-center items-center w-full h-full text-8xl ${className}`}
    >
      {/* <img src="/leftPage.png" alt="Left Page" className="" height={500} /> */}
      {children}
    </div>
  );
});

const MyBotton = ({ children }) => {
  return (
    <div className="flex cursor-pointer justify-center items-center text-center text-nowrap px-4 py-2 bg-Button text-[#a89a84] font-orbitron font-bold">
      {children}
    </div>
  );
};

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

export const Tracks = ({ visible }) => {
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
        "Get ready to dive into the exciting ESports/Game Development Track, where you can unleash your creativity and build your very own 2D or 3D game! With no restrictions on game engines, themes, or genres, the possibilities are endless—whether you want to craft an epic adventure, a thrilling action game, or a visually stunning masterpiece. This is your chance to showcase your innovation and wow the judges with your indie creation.",
    },
    {
      title: "Transportation",
      content:
        "Step into the Transportation Track and create cutting-edge solutions to transform how we travel and transport goods. From optimizing urban mobility to enhancing logistics systems, this track is your chance to tackle real-world challenges like traffic congestion, safety, and sustainability. Whether it’s building smart navigation tools, AI-powered transport systems, or eco-friendly logistics solutions, let your innovation drive the future of transportation.",
    },
    {
      title: "Women Safety",
      content:
        "The Women Safety track in Vihaan 8.0 shines as a beacon of innovation, focusing on crucial issues like enhanced security systems, real-time safety alerts, self-defense technology, and reliable emergency response platforms. In today’s world, solutions addressing harassment, stalking, and digital safety are urgently needed to empower and protect women. Together, let’s design breakthroughs that foster independence and make the world safer and brighter for every woman!",
    },
    {
      title: "Sustainability",
      content:
        "Join the Sustainability Track to tackle pressing environmental challenges and create impactful solutions for a better tomorrow. Whether it’s reducing carbon footprints, improving recycling systems, or developing renewable energy innovations, this track is your opportunity to drive meaningful change. Use technology to address issues like climate change, biodiversity loss, and sustainable resource management. Let your ideas shape a cleaner, greener, and more sustainable world!",
    },
    {
      title: "Healthcare",
      content:
        "The Healthcare track in Vihaan 8.0 focuses on groundbreaking solutions to tackle pressing challenges like modern diagnostics, efficient patient care, telemedicine, mental health support, chronic disease management, and accessible treatment. Combining innovation with empathy, this track empowers participants to revolutionize healthcare systems and redefine standards of well-being. Let’s craft technologies that heal, protect, and pave the way for a healthier tomorrow for individuals and communities!",
    },
    {
      title: "Security",
      content:
        "In this world of the internet, the Security track  calls upon innovators to build innovative solutions that safeguard our digital world. This track challenges participants to tackle critical issues such as cyber threat detection, data privacy, secure communication, digital identity protection and physical safety systems. Whether it's protecting data against cyberattacks or protecting critical infrastructure, your ideas can become the shield that keeps our future safe.Let’s create technologies that protect, empower and inspire confidence!",
    },
    {
      title: "Education",
      content:
        "With education evolving in this digital era, the Education track invites young minds to craft impactful solutions that transform how we learn, teach, and grow by solving pressing challenges like accessible learning, personalized education, virtual classrooms, skill-based development and inclusive educational platforms.Whether it’s enhancing digital learning experiences or making education more engaging let’s build technologies that enlighten minds, unlock potential and lead the way for a bright future!",
    },
    {
      title: "Fintech",
      content:
        "Smooth transactions, accessible financial tools are redefining the way we interact with money. The Swift Commerce / Fintech track wants changemakers to solve problems with technology-driven solutions. Whether it's frictionless digital payments, AI-powered financial insights, blockchain-backed security , tools that promote financial inclusion, this is to innovate boldly.Let’s build the next wave of fintech that transforms how the world earns, spends, and saves",
    },
  ];

  const goToPage = (targetIndex) => {
    const book = flipBookRef.current.pageFlip();
    const currentPage = book.getCurrentPageIndex();
  
    let pageIndex = targetIndex;
  
    if (!isMobile) {
      //for desktop view
      pageIndex = targetIndex % 2 === 0 ? targetIndex : targetIndex - 1;
    }
    //otherwise js iterate normally 
    if (pageIndex !== currentPage) {
      book.flip(pageIndex);
    }
  };
  

  return (
    <>
    <div className={"overflow-hidden"}>
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
          mobileScrollSupport={false}
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

const MyBotton = ({ children,  onClick }) => {
  return (
    <div onClick={onClick} className="flex cursor-pointer justify-center items-center text-center text-nowrap px-4 py-2 bg-Button text-[#a89a84] font-orbitron font-bold select-none">
      {children}
    </div>
  );
};

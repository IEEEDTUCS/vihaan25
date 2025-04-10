import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
// import Book from "/Book.png";
// import MobileBook from "@/app/_components/Tracks/mobileTrack.png";
// import LeftPage from "@/app/_components/Tracks/leftPage.png";
// import RightPage from "@/app/_components/Tracks/rightPage.png";
import TrackButton from "./TrackButton";
export const Tracks = () => {
  const flipBookRef = useRef(null);

  const content = [
    {
      title: "Esports",
      content:
        "The hackathon targets COVID-19-related challenges in education, emphasizing solutions for digital literacy, personalized learning, and mental health support while ensuring feasibility, scalability, sustainability, and cultural sensitivity. Kaafi maza aane wala hai , tere baski ho toh compete karke dikha. Aaja bhidle",
    },
    {
      title: "Transportation",
      content:
        "The hackathon targets COVID-19-related challenges in education, emphasizing solutions for digital literacy, personalized learning, and mental health support while ensuring feasibility, scalability, sustainability, and cultural sensitivity. Kaafi maza aane wala hai , tere baski ho toh compete karke dikha. Aaja bhidle",
    },
    {
      title: "Women Safety",
      content:
        "The hackathon targets COVID-19-related challenges in education, emphasizing solutions for digital literacy, personalized learning, and mental health support while ensuring feasibility, scalability, sustainability, and cultural sensitivity. Kaafi maza aane wala hai , tere baski ho toh compete karke dikha. Aaja bhidle",
    },
    {
      title: "Sustainability",
      content:
        "The hackathon targets COVID-19-related challenges in education, emphasizing solutions for digital literacy, personalized learning, and mental health support while ensuring feasibility, scalability, sustainability, and cultural sensitivity. Kaafi maza aane wala hai , tere baski ho toh compete karke dikha. Aaja bhidle",
    },
    {
      title: "Healthcare",
      content:
        "The hackathon targets COVID-19-related challenges in education, emphasizing solutions for digital literacy, personalized learning, and mental health support while ensuring feasibility, scalability, sustainability, and cultural sensitivity. Kaafi maza aane wala hai , tere baski ho toh compete karke dikha. Aaja bhidle",
    },
    {
      title: "Security",
      content:
        "The hackathon targets COVID-19-related challenges in education, emphasizing solutions for digital literacy, personalized learning, and mental health support while ensuring feasibility, scalability, sustainability, and cultural sensitivity. Kaafi maza aane wala hai , tere baski ho toh compete karke dikha. Aaja bhidle",
    },
    {
      title: "Eduction",
      content:
        "The hackathon targets COVID-19-related challenges in education, emphasizing solutions for digital literacy, personalized learning, and mental health support while ensuring feasibility, scalability, sustainability, and cultural sensitivity. Kaafi maza aane wala hai , tere baski ho toh compete karke dikha. Aaja bhidle",
    },
    {
      title: "Fintech",
      content:
        "VIHAAN 008's Fintech track focuses on transforming finance globally through innovations in financial inclusion, digital payments, regulatory compliance, and sustainable finance, highlighting the potential of fintech to reshape the future of the financial sector. Fintech agar tujhe aata hota, toh tu DTU ka hackathon thodi kar raha hota. Ye wala rehne de , ja HTML seekh kar aa pehle.",
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
      <p className="md:text-7xl text-4xl tracking-widest font-bold  font-khinterference flex justify-center">
        Tracks
      </p>
      <div className="flex flex-col items-center justify-center w-full relative gap-4 mt-0 h-screen">
        <Image
          src="/Book.png"
          alt="Book"
          className="absolute h-[600] w-[1000] md:block hidden"
          width={1000}
          height={600}
        />
        <Image
          src="/MobileBook.png"
          alt="Book"
          className="absolute h-[400] w-[300] md:hidden block"
          width={500}
          height={600}
        />
        <HTMLFlipBook
          width={400}
          height={500}
          drawShadow
          showCover={false}
          className="shadow-2xl bg-none block -top-1"
          mobileScrollSupport={true}
          ref={flipBookRef}
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
      <div className="w-full grid  sm:grid-cols-4 grid-cols-2 justify-center items-center  gap-1 sm:gap-4 relative">
        {content.map((item, index) => (
          <TrackButton
            key={index}
            children={item.title}
            onClick={() => goToPage(index)}
          />
        ))}
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

import React, { useRef } from 'react'
import HTMLFlipBook from 'react-pageflip'
import Image from "next/image";
import Book from"@/app/_components/Tracks/Book.png"
import TrackButton from './TrackButton';
export const Tracks = () => {

  const flipBookRef = useRef(null);

  const content = [
    {title: "Esports", content: "The hackathon targets COVID-19-related challenges in education, emphasizing solutions for digital literacy, personalized learning, and mental health support while ensuring feasibility, scalability, sustainability, and cultural sensitivity. Kaafi maza aane wala hai , tere baski ho toh compete karke dikha. Aaja bhidle"},
    {title: "Transportation", content: "The hackathon targets COVID-19-related challenges in education, emphasizing solutions for digital literacy, personalized learning, and mental health support while ensuring feasibility, scalability, sustainability, and cultural sensitivity. Kaafi maza aane wala hai , tere baski ho toh compete karke dikha. Aaja bhidle"},
    {title: "Women Safety", content: "The hackathon targets COVID-19-related challenges in education, emphasizing solutions for digital literacy, personalized learning, and mental health support while ensuring feasibility, scalability, sustainability, and cultural sensitivity. Kaafi maza aane wala hai , tere baski ho toh compete karke dikha. Aaja bhidle"},
    {title: "Sustainability", content: "The hackathon targets COVID-19-related challenges in education, emphasizing solutions for digital literacy, personalized learning, and mental health support while ensuring feasibility, scalability, sustainability, and cultural sensitivity. Kaafi maza aane wala hai , tere baski ho toh compete karke dikha. Aaja bhidle"},
    {title: "Healthcare", content: "The hackathon targets COVID-19-related challenges in education, emphasizing solutions for digital literacy, personalized learning, and mental health support while ensuring feasibility, scalability, sustainability, and cultural sensitivity. Kaafi maza aane wala hai , tere baski ho toh compete karke dikha. Aaja bhidle"},
    {title: "Security", content: "The hackathon targets COVID-19-related challenges in education, emphasizing solutions for digital literacy, personalized learning, and mental health support while ensuring feasibility, scalability, sustainability, and cultural sensitivity. Kaafi maza aane wala hai , tere baski ho toh compete karke dikha. Aaja bhidle"},
    {title: "Eduction", content: "The hackathon targets COVID-19-related challenges in education, emphasizing solutions for digital literacy, personalized learning, and mental health support while ensuring feasibility, scalability, sustainability, and cultural sensitivity. Kaafi maza aane wala hai , tere baski ho toh compete karke dikha. Aaja bhidle"},
    {title: "Fintech", content: "VIHAAN 008's Fintech track focuses on transforming finance globally through innovations in financial inclusion, digital payments, regulatory compliance, and sustainable finance, highlighting the potential of fintech to reshape the future of the financial sector. Fintech agar tujhe aata hota, toh tu DTU ka hackathon thodi kar raha hota. Ye wala rehne de , ja HTML seekh kar aa pehle."}    
  ]

  const goToPage = (targetIndex) => {
    const book = flipBookRef.current.pageFlip();
    const currentPage = book.getCurrentPageIndex();
  
    if (targetIndex === currentPage) return;
  
    const direction = targetIndex > currentPage ? 1 : -1;
    const flipInterval = setInterval(() => {
      const newIndex = book.getCurrentPageIndex();
  
      if (newIndex === targetIndex) {
        clearInterval(flipInterval);
      } else {
        direction > 0 ? book.flipNext() : book.flipPrev();
      }
    }, 800); // Adjust speed here (ms)
  };
  


  return (
    <div className='flex flex-col items-center justify-center w-full relative gap-4 mt-[-200]' >
      <Image
        src={Book}
        alt="Book"
        className="absolute h-[600] w-[1000] "
      />
      <HTMLFlipBook width={400} height={500} drawShadow showCover={false} className='shadow-2xl relative top-10 left-5 z-10' mobileScrollSupport={true} ref={flipBookRef}>
      {content.map((item, i) => (
            <Page key={i} number={i + 1}>
              <div className="p-14 w-full h-full flex flex-col justify-start items-start ">
                <h2 className="text-2xl font-bold mb-4 text-blue-900">{item.title}</h2>
                <p className="text-sm text-gray-800 font-khinterference">{item.content}</p>
              </div>
            </Page>
          ))}         
      </HTMLFlipBook>

      <div className='buttons flex w-4/5 justify-center gap-4 relative top-30 flex-wrap'>
      {content.map((item, index) => (
      <TrackButton key={index} children={item.title} onClick={() => goToPage(index)} />
    ))}

      </div>
    </div>
  )
}

const Page = React.forwardRef(({ children }, ref) => {
  return (
    <div ref={ref} className="flex justify-center items-center h-full text-8xl ">
      {children}  
    </div>
  );
});

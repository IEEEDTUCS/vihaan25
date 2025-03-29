import HomePage from "./(pages)/Home";
import Sponser from "./(pages)/Sponser";
import About from "./_components/AboutVihaan/About";
import EventSchedule from "./_components/EventSchedule/EventSchedule";
import FAQ from "./_components/FAQ's/faq";
import Footer from "./_components/Footer/Footer";

export default function Home() {
  return (
    <>
      <HomePage/>
      <About/>
       <EventSchedule/>
{/* Event schedule is also comming soon */}
<Sponser/>      
      <FAQ/>
      <Footer/> 
    </>
  );
}
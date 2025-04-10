"use client"
import HomePage from "./(pages)/Home";
import Sponsor from "./_components/Sponsor";
import About from "./_components/AboutVihaan/About";
import EventSchedule from "./_components/EventSchedule/EventSchedule";
import FAQ from "./_components/FAQ/faq";
import Footer from "./_components/Footer/Footer";
import Countdown from "./_components/Countdown";
import AbtIEEE from "./_components/AboutVihaan/About-IEEE-Nav/IEEE";  
import AbtIEEE from "./_components/AboutVihaan/About-IEEE-Nav/IEEE";
import { Tracks } from "./_components/Tracks/Tracks";

export default function Home() {
  return (
    <>
      <div id="home" ><HomePage/></div>
      {/* <Countdown/> */}
      <div id="about"><About/></div>
      <div id="tracks" className="relative h-screen"><Tracks/></div>

      <div id="IEEEsection"><AbtIEEE/></div>
      <div ><EventSchedule/></div>
      {/* Id is given to it's component */}
      <div id="sponsor"><Sponsor/></div>
      <div id="faqs"><FAQ id="faqs"/></div>
      <Footer/> 
    </>
  );
}
"use client"
import HomePage from "./(pages)/Home";
import Sponsor from "./_components/Sponsor";
import About from "./_components/AboutVihaan/About";
import EventSchedule from "./_components/EventSchedule/EventSchedule";
import FAQ from "./_components/FAQ/faq";

import Footer from "./_components/FooterNew/footerNew";
import AbtIEEE from "./_components/AboutVihaan/About-IEEE-Nav/IEEE";

import { Tracks } from "./_components/Tracks/Tracks";

import Core_council from "./_components/Core_council";
import Chairperson from "./_components/Chairperson";


import Full_team from "./_components/Full_team";
// import Footer from "@questlabs/react-sdk/dist/src/componentsV2/components/getStarted/modular/Footer";

export default function Home() {
  return (
    <>
      <div id="home" ><HomePage/></div>
      {/* <Countdown/> */}
      <div id="about"><About/></div>
      {/* <div id="tracks" className="relative h-screen"><Tracks/></div>s */}
      <div id="IEEEsection"><AbtIEEE/></div>
      <div ><EventSchedule/></div>
      {/* <div id="reveal"><Reveal/></div> */}
      <div id="tracks" ><Tracks/></div>
      {/* Id is given to it's component */}
      <div id="team"><Core_council/></div>
      <div ><Chairperson/></div>
      <div id="sponsor"><Sponsor/></div>
      <div id="faqs"><FAQ id="faqs"/></div>
      <div id="team"><Full_team/></div>
      {/* <div ><Chairperson/></div> */}
      <div > <Footer/> </div>
      {/* <Footer/>  */}
      {/* <Footer/>  */}
    </>
  );
}

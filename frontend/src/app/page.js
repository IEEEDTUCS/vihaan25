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
      <div id="IEEEsection"><AbtIEEE/></div>
      <div ><EventSchedule/></div>
      {/* <div id="reveal"><Reveal/></div> */}
      <div id="tracks" ><Tracks/></div>
      <div id="sponsor"><Sponsor/></div>
      <div id="team"><Full_team/></div>
      <div id="faqs"><FAQ /></div>
      <div > <Footer/> </div>
    </>
  );
}

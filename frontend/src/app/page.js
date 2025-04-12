"use client"
import HomePage from "./(pages)/Home";
import Sponsor from "./_components/Sponsor";
import About from "./_components/AboutVihaan/About";
import EventSchedule from "./_components/EventSchedule/EventSchedule";
import FAQ from "./_components/FAQ/faq";
import Reveal from "./_components/Reveal/Reveal";
import Countdown from "./_components/Countdown";
import AbtIEEE from "./_components/AboutVihaan/About-IEEE-Nav/IEEE";
import FooterNew from "./_components/FooterNew/footerNew";
import { Tracks } from "./_components/Tracks/Tracks";
import Team from "./_components/Team"
import Core_council from "./_components/Core_council";
import Chairperson from "./_components/Chairperson";

export default function Home() {
  return (
    <>
      <div id="home" ><HomePage/></div>
      {/* <Countdown/> */}
      <div id="about"><About/></div>
      {/* <div id="tracks" className="relative h-screen"><Tracks/></div>s */}
      <div id="IEEEsection"><AbtIEEE/></div>
      <div ><EventSchedule/></div>
      <div id="reveal"><Reveal/></div>
      {/* <div id="tracks" ><Tracks/></div> */}
      {/* Id is given to it's component */}
      <div id="sponsor"><Sponsor/></div>
      <div id="faqs"><FAQ id="faqs"/></div>
      <div id="team"><Core_council/></div>
      <div ><Chairperson/></div>
      {/* <Footer/>  */}
      {/* <Footer/>  */}
      <div id="footer"><FooterNew/></div>
    </>
  );
}

import HomePage from "./(pages)/Home";
import EventSchedule from "./_components/EventSchedule/EventSchedule";
// import FAQ from "./FAQs/FAQ"; // Commented out for now

export default function Home() {
  return (
    <>
      <HomePage />
      <EventSchedule />
      {/* <FAQ /> */}
    </>
  );
}
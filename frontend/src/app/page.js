import HomePage from "./(pages)/Home";
import EventSchedule from "./_components/EventSchedule/EventSchedule";
import FAQ from "./_components/FAQ's/faq";

export default async function Home() {
  return (
    <>
      <HomePage/>
       <EventSchedule/>
      <FAQ/>
    </>
  );
}
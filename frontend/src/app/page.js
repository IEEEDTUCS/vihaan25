import HomePage from "./(pages)/Home";
import EventSchedule from "./_components/EventSchedule/EventSchedule";
import FAQ from "./_components/FAQ's/faq";
import PastSpeakers from "./(pages)/PastSpeakers/page";

export default async function Home() {
  return (
    // <HomePage/>
    // <EventSchedule/>
    // <FAQ />
    <PastSpeakers />
  );
}

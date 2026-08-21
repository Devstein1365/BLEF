import WaysWeConvene from "../components/media/Convene";
import EventsSection from "../components/media/EventsSection";
import FeaturedSummit from "../components/media/FeaturedSummit";
import MediaHero from "../components/media/MediaHero";
import MediaKit from "../components/media/MediaKit";

const MediaPage = () => {
  return (
    <>
      <MediaHero />
      <FeaturedSummit/>
      <EventsSection />
      <WaysWeConvene />
      <MediaKit />
    </>
  );
};

export default MediaPage;
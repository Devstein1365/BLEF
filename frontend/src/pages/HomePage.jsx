
import EventModalAlert from "../components/common/EventModal"
import HomeEventBanner from "../components/Home/EventBanner"
import Hero from "../components/Home/Hero"
import News from "../components/Home/News"
import OurProject from "../components/Home/OurProject"
import Testimonial from "../components/Home/Testimonial"
import Theme from "../components/Home/Theme"

const HomePage = ()=> {
    return (
        <>
        {/* Auto-popup dismissible modal */}
      <EventModalAlert />

      {/* Prominent top event strip */}
      <HomeEventBanner />
         <Hero />
         <Theme/>
         <OurProject/>
         <Testimonial/>
         <News/>
        </>
    )
}

export default HomePage

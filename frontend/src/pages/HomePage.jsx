
import Hero from "../components/Home/Hero"
import News from "../components/Home/News"
import OurProject from "../components/Home/OurProject"
import Testimonial from "../components/Home/Testimonial"
import Theme from "../components/Home/Theme"

const HomePage = ()=> {
    return (
        <>
         {/* <Header/>    */}
         <Hero />
         <Theme/>
         <OurProject/>
         <Testimonial/>
         <News/>
         {/* <Footer/> */}
        </>
    )
}

export default HomePage

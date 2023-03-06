// components 
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import OurMissionSection from "../components/OurMissionSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <Navbar />
            <AboutSection />
            <OurMissionSection />
            <ServicesSection />
            <Footer />
        </div>
    );
}

export default About;
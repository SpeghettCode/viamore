// components
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import MiniShopSection from "../components/MiniShopSection";
import FeelAmazingSection from "../components/FeelAmazingSection";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <HomeSection />
            <MiniShopSection />
            <FeelAmazingSection />
            <Footer />
        </div>
    );
}

export default Home;
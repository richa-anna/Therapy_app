import "./App.css";
import Footer from "./components/bar/Footer";
import TopBar from "./components/bar/TopBar";
import Community from "./components/sections/Community/Community";
import FeaturesSection from "./components/sections/FeaturesSection/FeaturesSection";
import HeroSection from "./components/sections/HeroSection/HeroSection";
import SelfHelpTools from "./components/sections/SelfHelpSection/SelfHelp";

function App() {
  return (
    <div className="App">
      <TopBar />
      <HeroSection />
      <FeaturesSection/>
      <SelfHelpTools/>
      <Community/>
      <Footer />
    </div>
  );
}

export default App;

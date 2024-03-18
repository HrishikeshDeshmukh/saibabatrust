import "./App.css";
import "./responsive.css";
import "./App1.css";
import Carousel from "./components/Carousel";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import SocialPage from "./components/SocialPage";
import Navbar from "./components/Navbar";
import LatestNews from "./components/LatestNews";
import GalleryComponent from "./components/GalleryComponent";
import Temples from "./components/Temples";
import NearbyPlaces from "./components/NearbyPlaces";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 4500); // Adjust the time as needed
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <SocialPage />
          <Carousel />
          <AboutSection />
          <Services />
          <LatestNews />
          <GalleryComponent />
          <Temples />
          <NearbyPlaces />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

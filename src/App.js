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
import Aos from "aos";
import DailyUpdate from "./components/Update";
import { Route, Router, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

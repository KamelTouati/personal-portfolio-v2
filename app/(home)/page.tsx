import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-black bg-grid-white/[0.05] bg-grid-black/[0.2]">
      <div className="relative">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar />
          <div className="w-[80%] mx-auto my-10">
            <HeroSection />
          </div>
        </div>
        {/* <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div> */}
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default page;

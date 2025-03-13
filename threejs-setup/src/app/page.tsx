import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rules from "./components/Rules";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Prizes from "./components/Prizes";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";


import Background from "./components/Background";

export default function Home() {
  return (
    <div className="absolute w-full h-full">
      <Navbar />
      <Hero />
      <Rules/>
      <About/>
      <Timeline />
      <Prizes />
      <Contacts />
      <Footer />
      <Background />
    </div>
  );
}

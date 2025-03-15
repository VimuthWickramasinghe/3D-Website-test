"use client";
import React, { use } from "react";

import Navbar from "./components/Navbar/Navbar";
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
    <div className="">
      <Navbar />
      <Background />
      {/* Slices */}
      <div className="w-full h-full z-40 absolute ">
        <Hero /> 
        <Rules />
        <About />
        <Timeline />
        <Prizes />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

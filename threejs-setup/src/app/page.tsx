import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import React from "react";
import ThreeScene from "./components/ThreeScene";
import dynamic from "next/dynamic";



export default function Home() {
  return (
    <div>
      <Navbar />
      <ThreeScene />
      {/* <Hero /> */}

    </div>
  );
}

"use client"; 
import ThreeScene from "@/app/components/ThreeScene";

export default function Hero() {
  return (
    <div id="Home" className="relative w-full h-full">
      
      <ThreeScene className={"bg-linear-to-b from-blue-700 to-blue-200 absolute w-full h-dvh overflow-hidden"} />
      <h1 className=" p-20 z-500  font-white relative">UOK ROBOT BATTLES 2025</h1>

    </div>
  );
}

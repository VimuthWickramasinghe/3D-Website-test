"use client";
import Image from "next/image";
import img from "@/public/logo.png";

const hoverColor = "hover:bg-blue-700";
const rounded = "rounded-xl";
const Animation = "transition-colors duration-300";

export default function Navbar() {
  return (
    <nav className="z-999  backdrop-blur-md fixed w-full flex justify-between box-border p-2">
      <div className="text-white flex items-center">
        <div className={`${hoverColor} ${rounded} py-2 px-4 mx-2 ${Animation} items-center justify-center`}>
          <Image className="w-auto h-12" src={img} alt="logo" />
        </div>
        <div>Robot Battles</div>
      </div>

      <div className={`md:hidden ${hoverColor} ${rounded} py-2 px-4 mx-2 ${Animation} flex items-center`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>

      <div className="md:inline-flex justify-between">
        <Navbar_Button link="#Home">Home</Navbar_Button>
        <Navbar_Button link="#Rules">Rules</Navbar_Button>
        <Navbar_Button link="#About">About</Navbar_Button>
        <Navbar_Button link="#Timeline">Timeline</Navbar_Button>
        <Navbar_Button link="#Prizes">Prizes</Navbar_Button>
        <Navbar_Button link="#Contact">Contact</Navbar_Button>
        <Navbar_Button link="#Register">Register</Navbar_Button>
      </div>
    </nav>
  );
}

interface NavbarButtonProps {
  link: string;
  children: React.ReactNode;
}

function Navbar_Button({ link, children }: NavbarButtonProps) {
  return (
    <a
      className="text-white hover:bg-blue-700 rounded-xl py-2 px-4 mx-2 transition-colors duration-300 flex items-center justify-center"
      href={link}
    >
      {children}
    </a>
  );
}

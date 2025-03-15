"use client";
import Image from "next/image";
import Link from "next/link";
import img from "@/public/logo.png";
import { useEffect, useState } from "react";

const hoverColor = "hover:bg-blue-700";
const rounded = "rounded-xl";
const Animation = "transition-colors duration-300";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <nav className="z-700 backdrop-blur-sm fixed w-full flex justify-between p-2">
        {/* brand */}
        <div className="flex items-center">
          <div
            className={`${hoverColor} ${rounded} py-2 px-4 mx-2 ${Animation} items-center justify-center`}
          >
            <Image className="w-auto h-12" src={img} alt="logo" />
          </div>
          <div>Robot Battles</div>
        </div>
        {/* Mobile button */}
        <button
          onClick={handleClick}
          className={`z-1000 ${hoverColor} ${rounded} py-2 px-4 mx-2 ${Animation} md:hidden flex items-center`}
        >
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        {/* desktop menu */}
        <Navbar_Buttons className="md:flex hidden navbarMenu justify-between" />
      </nav>

      {/* mobile menu */}
      {isMenuOpen ? (
        <div
          onClick={handleClick}
          className="fixed z-888 grid-cols-1 bg-blue-400 w-full h-full items-center p-2"
        >
          <button className="ml-auto h-12  grid-cols-1 bg-blue-200   hover:bg-blue-700 hover:text-white rounded-xl py-2 px-4 mx-2 transition-colors duration-300 flex items-center">
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Navbar_Buttons className="grid-cols-1 text-3xl p-auto" />
        </div>
      ) : null}
    </div>
  );
}

interface Navbar_ButtonsProps {
  className: string;
}
function Navbar_Buttons({ className }: Navbar_ButtonsProps) {
  return (
    <div className={className}>
      <Navbar_Button href="#Home">Home</Navbar_Button>
      <Navbar_Button href="#Rules">Rules</Navbar_Button>
      <Navbar_Button href="#About">About</Navbar_Button>
      <Navbar_Button href="#Timeline">Timeline</Navbar_Button>
      <Navbar_Button href="#Prizes">Prizes</Navbar_Button>
      <Navbar_Button href="#Contacts">Contacts</Navbar_Button>
      <Navbar_Button href="#Register">Register</Navbar_Button>
    </div>
  );
}

interface Navbar_ButtonProps {
  href: string;
  children: React.ReactNode;
}
function Navbar_Button({ href, children }: Navbar_ButtonProps) {
  if (href.includes("#")) {
    return (
      <button
        onClick={() => scrollToSection({ href })}
        className="hover:bg-blue-700 rounded-xl py-2 px-4 mx-2 transition-colors duration-300 flex items-center justify-center"
      >
        {children}
      </button>
    );
  } else {
    return <Link href={href}>{children}</Link>;
  }
}

interface ScrollToSectionProps {
  href: string;
}

const scrollToSection = ({ href }: ScrollToSectionProps) => {
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

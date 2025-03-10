import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="z-999 backdrop-blur-md fixed w-full flex justify-between box-border p-2">
      <div className="text-white hover:bg-amber-700 rounded-xl py-2 px-4 mx-2 transition-colors duration-300 flex items-center justify-center">
        <div>Robot Battle</div>
      </div>
      <div className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0  24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-white hover:bg-amber-700 rounded-xl py-2 px-4 mx-2 transition-colors duration-300 flex items-center justify-center"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
      </div>

      <div className="hidden md:inline-flex justify-between">
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
      className="text-white hover:bg-amber-700 rounded-xl py-2 px-4 mx-2 transition-colors duration-300 flex items-center justify-center"
      href={link}
    >
      {children}
    </a>
  );
}

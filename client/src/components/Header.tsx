import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full px-6 md:px-10 py-6 flex justify-between items-center 
      bg-[#7a3c3c] text-[#f5f5f5] border-b-4 border-black shadow-lg">
      
      {/* Logo */}
      <h1 className="font-DotLabs text-2xl sm:text-3xl font-extrabold tracking-wide 
        text-[#e0b38c] drop-shadow-[2px_2px_0px_#000]">
        DotLabs
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 text-lg font-semibold">
        <a href="#" className="hover:text-[#e0b38c] transition-colors">Linkedin</a>
        <a href="#" className="hover:text-[#e0b38c] transition-colors">Github</a>
        <a href="#" className="hover:text-[#e0b38c] transition-colors">Email</a>
        <a href="#" className="hover:text-[#e0b38c] transition-colors">Contact</a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#f5f5f5] focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-16 right-0 w-[70dvw] h-[100dvh] 
          bg-[#1a1a1a] text-[#f5f5f5] border-l-4 border-black shadow-xl 
          flex flex-col items-center space-y-6 py-8 text-xl font-bold z-50">
          <a href="#" onClick={toggleMenu} className="hover:text-[#e0b38c] transition-colors">
            Linkedin
          </a>
          <a href="#" onClick={toggleMenu} className="hover:text-[#e0b38c] transition-colors">
            Github
          </a>
          <a href="#" onClick={toggleMenu} className="hover:text-[#e0b38c] transition-colors">
            Email
          </a>
          <a href="#" onClick={toggleMenu} className="hover:text-[#e0b38c] transition-colors">
            Contact
          </a>
        </nav>
      )}
    </div>
  );
};

export default Header;

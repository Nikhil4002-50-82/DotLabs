import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-4 sm:py-6 mb-2 flex justify-between items-center shadow-md">
      <h1 className="font-DotLabs text-2xl sm:text-3xl text-gray-900 font-bold">
        DotLabs
      </h1>
      <nav className="hidden md:flex space-x-4 lg:space-x-6 text-gray-700 text-base lg:text-lg">
        <a href="#" className="hover:text-gray-900 transition-colors">
          Home
        </a>
        <a href="#" className="hover:text-gray-900 transition-colors">
          Services
        </a>
        <a href="#" className="hover:text-gray-900 transition-colors">
          Portfolio
        </a>
        <a href="#" className="hover:text-gray-900 transition-colors">
          Contact
        </a>
      </nav>

      <button
        className="md:hidden text-black focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>
      {isMenuOpen && (
        <nav className="md:hidden absolute top-16 right-0 w-[70dvw] h-[100dvh] bg-white shadow-md flex flex-col items-center space-y-4 py-4 text-gray-700 text-base">
          <a
            href="#"
            className="hover:text-gray-900 transition-colors text-xl"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-gray-900 transition-colors text-xl"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#"
            className="hover:text-gray-900 transition-colors text-xl"
            onClick={toggleMenu}
          >
            Portfolio
          </a>
          <a
            href="#"
            className="hover:text-gray-900 transition-colors text-xl"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </nav>
      )}
    </div>
  );
};

export default Header;

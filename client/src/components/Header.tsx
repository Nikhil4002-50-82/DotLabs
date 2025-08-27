import React, { useState, useEffect } from "react";
// import CursorTrail from "./CursorTrail";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  //Cursor
  //   useEffect(() => {
  //   const createParticle = (x: number, y: number) => {
  //     const particle = document.createElement("div");
  //     particle.className = "cursor-particle";
  //     document.body.appendChild(particle);

  //     // Randomize size & rotation
  //     const size = Math.random() * 8 + 6;
  //     particle.style.width = `${size}px`;
  //     particle.style.height = `${size}px`;
  //     particle.style.left = `${x - size / 2}px`;
  //     particle.style.top = `${y - size / 2}px`;
  //     particle.style.transform = `rotate(${Math.random() * 360}deg)`;

  //     // Trigger fade out
  //     setTimeout(() => {
  //       particle.style.opacity = "0";
  //       particle.style.transform += " scale(1.8)";
  //     }, 50);

  //     // Remove after fade
  //     setTimeout(() => {
  //       particle.remove();
  //     }, 1000);
  //   };

  //   const handleMouseMove = (e: MouseEvent) => {
  //     createParticle(e.pageX, e.pageY);
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);


  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        setScrolled(true); // after hero section
      } else {
        setScrolled(false); // in hero section
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full px-6 md:px-10 py-4 flex justify-between items-center transition-all duration-500 z-50 
      ${scrolled ? "bg-black/90 shadow-lg border-b border-gray-800" : "bg-transparent"} 
      text-[#f5f5f5]`}
    >
        {/* <CursorTrail /> */}

      {/* Logo */}
      <h1
        className="font-DotLabs text-2xl sm:text-3xl font-extrabold tracking-wide 
        text-[#e0b38c] drop-shadow-[2px_2px_0px_#000]"
      >
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
        <nav
          className="md:hidden absolute top-16 right-0 w-[70dvw] h-[100dvh] 
          bg-[#1a1a1a] text-[#f5f5f5] border-l-4 border-black shadow-xl 
          flex flex-col items-center space-y-6 py-8 text-xl font-bold z-50"
        >
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

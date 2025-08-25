import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div
      className="relative bottom-0 w-full px-6 md:px-10 py-6 
        flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0
        bg-[#1a1a1a] text-[#e0b38c] border-t-4 border-black
        shadow-[0_-6px_0px_#000]"
    >
      {/* Left: Logo / Name */}
      <h3 className="font-DotLabs text-lg sm:text-xl font-bold tracking-wider 
        drop-shadow-[2px_2px_0px_#000]">
        DotLabs
      </h3>

      {/* Right: Contact + Icons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        <p className="text-sm sm:text-base font-semibold tracking-wide 
          drop-shadow-[1px_1px_0px_#000]">
          Contact us for more info
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaGithub className="text-2xl sm:text-3xl drop-shadow-[2px_2px_0px_#000]" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaLinkedin className="text-2xl sm:text-3xl drop-shadow-[2px_2px_0px_#000]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

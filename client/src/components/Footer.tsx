import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="relative bottom-0 px-4 sm:px-6 md:px-10 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 shadow-custom">
      <h3 className="font-DotLabs text-base sm:text-lg font-bold">DotLabs</h3>
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
        <p className="text-sm sm:text-base">Contact us for more info</p>
        <div className="flex items-center gap-2 sm:gap-3">
          <FaGithub className="text-lg sm:text-xl" />
          <FaLinkedin className="text-lg sm:text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

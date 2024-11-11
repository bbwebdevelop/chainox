import React from "react";
import Image from "next/image";
import vectorfooter from "../../public/vectorfooter.svg";
import social1 from "../../public/social1.svg";
import social2 from "../../public/social2.svg";
import social3 from "../../public/social3.svg";
import logo from "../../public/logo.png";

export const Footer = () => {
  return (
    <div className="relative bg-[#090909] py-8">
      
      <div className="absolute top-0 left-0 w-full">
        <Image src={vectorfooter} alt="Vector Footer" className="w-full" />
      </div>

      <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row justify-between items-center">
        
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Logo" className="h-8" />
          <nav className="flex space-x-4 text-white z-10">
            <a href="#" className="relative hover:after:content-[''] hover:after:block hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-[#00C3FD] hover:after:via-[#0194FE] hover:after:to-[#04226B] hover:after:bottom-0 hover:after:left-0 transition-all duration-300 no-cursor">
              Home
            </a>
            <a href="#" className="relative hover:after:content-[''] hover:after:block hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-[#00C3FD] hover:after:via-[#0194FE] hover:after:to-[#04226B] hover:after:bottom-0 hover:after:left-0 transition-all duration-300 no-cursor">
              About
            </a>
            <a href="#" className="relative hover:after:content-[''] hover:after:block hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-[#00C3FD] hover:after:via-[#0194FE] hover:after:to-[#04226B] hover:after:bottom-0 hover:after:left-0 transition-all duration-300 no-cursor">
              Services
            </a>
            <a href="#" className="relative hover:after:content-[''] hover:after:block hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-[#00C3FD] hover:after:via-[#0194FE] hover:after:to-[#04226B] hover:after:bottom-0 hover:after:left-0 transition-all duration-300 no-cursor">
              Contact
            </a>
          </nav>
        </div>

        
        <div className="flex items-center mt-4 lg:mt-0 text-center justify-center space-x-2">
          <p className="text-white flex items-center">Follow us</p>
          <div className="flex items-center space-x-2 no-cursor z-10">
            <Image src={social1} alt="Facebook" className="h-12 w-12 mt-4 " />
            <Image src={social2} alt="Instagram" className="h-12 w-12 mt-4" />
            <Image src={social3} alt="LinkedIn" className="h-12 w-12 mt-4" />
          </div>
        </div>

        
        <button className="mt-4 lg:mt-0 px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-[#0194FE] to-[#01C3FD] shadow-md hover:scale-105 transform transition no-cursor">
          Connect wallet
        </button>
      </div>

      
      <div className="mt-8 flex justify-center">
        <p className="text-white text-sm">© crafted by <span className="text-white/50 cursor-pointer z-10">blinksy22</span></p>
      </div>
    </div>
  );
};

export default Footer;

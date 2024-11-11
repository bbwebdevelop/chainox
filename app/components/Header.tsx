'use client'
import React, { useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa"; // Import ikony hamburgera
import logo from "../../public/logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex px-4 py-4 items-center justify-between ">
        
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={40} height={40} />
          <h1 className="text-white text-2xl font-bold tracking-tight">Chainox</h1>
        </div>

        
        <div className="hidden lg:flex flex-1 justify-center space-x-8 z-10 text-white/60">
          <a href="#" className="relative hover:after:content-[''] hover:after:block hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-[#00C3FD] hover:after:via-[#0194FE] hover:after:to-[#04226B] hover:after:bottom-0 hover:after:left-0 transition-all duration-300 cursor-pointer no-cursor">
            Home
          </a>
          <a href="#" className="relative hover:after:content-[''] hover:after:block hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-[#00C3FD] hover:after:via-[#0194FE] hover:after:to-[#04226B] hover:after:bottom-0 hover:after:left-0 transition-all duration-300 cursor-pointer no-cursor">
            Our Work
          </a>
          <a href="#" className="relative hover:after:content-[''] hover:after:block hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-[#00C3FD] hover:after:via-[#0194FE] hover:after:to-[#04226B] hover:after:bottom-0 hover:after:left-0 transition-all duration-300 cursor-pointer no-cursor">
            Pricing
          </a>
          <a href="#" className="relative hover:after:content-[''] hover:after:block hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-[#00C3FD] hover:after:via-[#0194FE] hover:after:to-[#04226B] hover:after:bottom-0 hover:after:left-0 transition-all duration-300 cursor-pointer no-cursor">
            About Us
          </a>
        </div>

        
        <div className="hidden lg:flex items-center gap-4 cursor-pointer z-10">
          <button className="mt-4 lg:mt-0 px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-[#0194FE] to-[#01C3FD] shadow-md hover:scale-105 transform transition no-cursor">
            Connected wallet
          </button>
          <button className="-ml-10 px-6 py-2.5 rounded-full text-white font-semibold border border-1 shadow-md hover:scale-105 transform transition no-cursor">
            Connect wallet
          </button>
        </div>

        
        <div className="block lg:hidden" onClick={toggleMenu}>
          <FaBars size={24} style={{color: 'white'}} />
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="lg:hidden bg-transparent backdrop-blur-md py-2 px-4 ">
          <a href="#" className="block py-2 text-white no-cursor z-10 ">Home</a>
          <a href="#" className="block py-2 text-white no-cursor z-10">Our Work</a>
          <a href="#" className="block py-2 text-white no-cursor z-10">Pricing</a>
          <a href="#" className="block py-2 text-white no-cursor z-10">About Us</a>
          
          <button className="w-full mt-4 px-6 py-2.5 rounded-full text-white font-semibold bg-gradient-to-r from-[#0194FE] to-[#01C3FD] shadow-md hover:scale-105 transform transition no-cursor">
            Connected wallet
          </button>
          <button className="w-full mt-2 px-6 py-2.5 rounded-full text-white font-semibold border border-white shadow-md hover:scale-105 transform transition no-cursor">
            Connect wallet
          </button>
        </div>
      )}
    </div>
  );
};

'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import headerphone from "../../public/headerphone.svg";
import serpentyna from "../../public/serp.png";
import layerblur from "../../public/layerblur.png";

export const Hero = () => {
  return (
    <motion.div 
      className="relative max-w-screen-lg mx-auto lg:my-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      
      <motion.div 
        className="hidden lg:block absolute -top-20 -left-10 lg:-top-32 lg:-left-20 z-0"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image src={serpentyna} alt="decorative serpentine" />
      </motion.div>

      
      <div className="hidden lg:block absolute top-1/4 left-1/2 transform -translate-x-[80%] -translate-y-[-1%] z-0 opacity-10">
        <motion.h1 
          className="text-[8rem] font-bold text-white/60 select-none whitespace-nowrap tracking-tight z-11"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Tokens
        </motion.h1>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <motion.div 
          className="flex flex-col justify-center mt-20 z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <h1 className="text-center font-bold text-4xl lg:text-9xl mt-20 text-white tracking-tighter">
            Chainox
          </h1>
          <p className="text-center text-white mt-4 sm:mt-6 lg:mt-10 text-base sm:text-lg lg:text-xl">
            <span className="highlighted-word text-[#0194FE]">THE BEST</span> crypto smart-contract to make better future.
          </p>
          <p className="text-center text-white mt-2 sm:mt-4 lg:mt-2 text-base sm:text-lg lg:text-xl">
            Start building your smart contract with{" "}
            <span className="highlighted-word text-[#0194FE]">CHAINOX</span>.
          </p>
        </motion.div>

        
        <motion.div 
          className="relative flex mt-12 z-10 w-1/2 mx-auto lg:w-9/12 lg:h-9/12"
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <Image src={headerphone} alt="headerphoto" />
          
          <motion.div 
            className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <Image src={layerblur} alt="decorative layer blur" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

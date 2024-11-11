'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ad1 from "../../public/ad1.svg";
import ad2 from "../../public/ad2.svg";
import ad3 from "../../public/ad3.svg";
import vector1 from "../../public/vector1.png";
import vector2 from "../../public/vector2.png";

const Advantages = () => {
  return (
    <div className="relative max-w-screen-lg mx-auto py-8 bg-[#090909] rounded-3xl lg:my-32">
      <h1 className="text-3xl font-bold text-white lg:text-7xl text-center tracking-tight">
        ADVANTAGES
      </h1>
      <div className="hidden lg:block absolute top-1 left-1/2 transform -translate-x-[80%] -translate-y-[-45%] z-0 opacity-10">
        <h1 className="text-[6rem] font-bold text-white/60 select-none whitespace-nowrap">
          Chainox
        </h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
        {[ad1, ad2, ad3].map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image src={img} alt={`ad${index + 1}`} className="mx-auto mt-5" />
            <h1 className="text-white text-center text-xl tracking-tight mb-4">Smart Contract #{index + 1}</h1>
            <p className="text-white/80 text-center max-w-[80%] mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, necessitatibus facere esse error voluptate modi!
            </p>
          </motion.div>
        ))}
      </div>

      
      <motion.div 
        className="absolute bottom-4 left-[-10%] right-0 mx-auto w-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src={vector1} alt="vector1" className="w-full" />
      </motion.div>

      
      <motion.div 
        className="absolute bottom-0 left-[-10%] right-0 mx-auto w-full"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Image src={vector2} alt="vector2" className="w-full" />
      </motion.div>

      
      <motion.div 
        className="flex justify-center mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <button className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#0194FE] to-[#01C3FD] shadow-md hover:scale-105 transform transition no-cursor">
          Create project
        </button>
      </motion.div>
    </div>
  );
};

export default Advantages;

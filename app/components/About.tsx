'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import aboutcard from '../../public/aboutcard.svg';

export const About = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-12 px-4 lg:my-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        <motion.div 
          className="relative w-[90%] mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Image 
            src={aboutcard} 
            alt="About card background" 
            className="rounded-2xl w-full"
          />
          
          <motion.div 
            className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mt-4">
              <h1 className="text-white text-lg lg:text-3xl font-bold mb-1 lg:mb-2 tracking-tight">
                SMART CONTRACT
              </h1>
              <p className="text-white text-xs lg:text-lg italic">from Chainox</p>
            </div>
            <div className="flex justify-center mb-4">
              <motion.button
                className="px-4 py-2 lg:px-5 lg:py-2 rounded-full text-white font-semibold bg-gradient-to-r from-[#0194FE] to-[#01C3FD] shadow-md hover:scale-105 transform transition no-cursor"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Try for free
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

       
        <motion.div 
          className="text-white"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl text-center lg:text-left lg:text-4xl font-bold mb-4 tracking-tight">ABOUT COMPANY</h2>
          <p className="mb-4 text-sm lg:text-base">
            Everyday practice shows that the constant information and propaganda support of our activities plays an important role in shaping the personnel training system and meets urgent needs.
          </p>
          <p className="mb-4 text-sm lg:text-base">
            Everyday practice shows that the constant information and propaganda support of our activities plays an important role in shaping the personnel training system and meets urgent needs.
          </p>
          <p className="font-semibold mt-10 lg:mt-20 text-sm lg:text-base">
            <motion.span 
              className="text-gradient text-[#0194FE]"
              whileInView={{ opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              viewport={{ once: true }}
            >
              SMART - CONTRACT
            </motion.span> - is a decentralized blockchain application.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

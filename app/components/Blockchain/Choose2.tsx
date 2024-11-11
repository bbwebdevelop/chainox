'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import choosecard1 from '../../../public/choosecard1.svg';
import choosecard2 from '../../../public/choosecard2.svg';
import choosepic1 from '../../../public/choosepic1.svg';
import choosepic2 from '../../../public/choosepic2.svg';

export const Choose2 = () => {
  return (
    <div className="relative max-w-screen-lg mx-auto py-16 px-4 lg:my-32">
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center font-bold text-4xl lg:text-7xl mb-10 text-white tracking-tighter"
      >
        <span className='text-[#0194FE]'>CHOOSE</span> WHAT YOU WANT <span className='text-[#0194FE]'>TO CREATE?</span>
      </motion.h1>

      <div className="hidden lg:block absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-[50%] z-0 opacity-10">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[7rem] font-bold text-white/60 select-none whitespace-nowrap mb-9 tracking-tight"
        >
          Chainox
        </motion.h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center py-32">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative bg-cover bg-center rounded-2xl p-4 w-full lg:w-[420px] lg:h-[340px]"
          style={{
            backgroundImage: `url(${choosecard1.src})`
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center h-full">
            <div className="flex justify-center mb-4 lg:mb-0">
              <Image
                src={choosepic1}
                alt="choosepic1"
                className="w-1/2"
              />
            </div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-2xl font-bold text-white mb-2">ERC - 721</h1>
              <h2 className="text-lg text-[#00FFFF] mb-3">token</h2>
              <p className="text-white text-md">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, animi?
              </p>
            </motion.div>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative bg-cover bg-center rounded-2xl p-4 w-full lg:w-[420px] lg:h-[340px]"
          style={{
            backgroundImage: `url(${choosecard2.src})`
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center h-full">
            <div className="flex justify-center mb-4 lg:mb-0">
              <Image
                src={choosepic2}
                alt="choosepic2"
                className="w-1/2"
              />
            </div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-2xl font-bold text-white mb-2">XYZ - 981</h1>
              <h2 className="text-lg text-[#00FFFF] mb-3">NFT smart-contract</h2>
              <p className="text-white text-md">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, animi?
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-10 lg:mt-20"
      >
        <h2 className="text-2xl lg:text-5xl font-bold text-white mb-7 tracking-tight"><span className='text-[#0194FE]'>ABOUT</span> BLOCKCHAINS</h2>
        <p className="text-lg text-[#00FFFF] font-bold mb-5">CHAINOX - is a smart contract constructor for tokens.</p>
        <p className="text-white text-sm lg:text-base max-w-3xl mx-auto">
          Everyday practice shows that the constant information and propaganda support of our activities plays an important role in shaping the training system. 
          The provision of our activities plays an important role in shaping.
        </p>
      </motion.div>
    </div>
  );
};

export default Choose2;

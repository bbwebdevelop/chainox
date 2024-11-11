'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import card1 from "../../../public/card1.svg";
import card2 from "../../../public/card2.svg";
import card3 from "../../../public/card3.svg";
import card4 from "../../../public/card4.svg";
import circle1 from "../../../public/circle1.svg";
import circle2 from "../../../public/circle2.png";
import circle3 from "../../../public/circle3.svg";
import circle4 from "../../../public/circle4.png";

export const Choose = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-12 px-4 lg:my-32">
      
      <h1 className="text-center font-bold text-4xl lg:text-7xl mb-10 text-white tracking-tight">
        CHOOSE A BLOCKCHAIN
      </h1>
      <div className="flex flex-col lg:flex-row items-start lg:items-center">
       
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="lg:w-1/3 pr-4 mb-8 lg:mb-0 flex items-center"
        >
          <div>
            <h2 className="text-white text-3xl mb-4 font-medium">
              <span className="text-[#0194FE]">ABOUT</span> BLOCKCHAINS
            </h2>
            <p className="text-white/70 mb-4">
              <span className="text-[#0194FE]">CHAINOX</span> - is a smart contract constructor for tokens.
            </p>
            <p className="text-white/70">
              Everyday practice shows that constant outreach to our activities
              plays an important role in shaping the learning system ensuring our
              activities plays an <span className="text-[#0194FE]">important role in shaping</span>.
            </p>
          </div>
        </motion.div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-2/3">
          {[{ img: card1, circle: circle1 }, { img: card2, circle: circle2 }, { img: card3, circle: circle3 }, { img: card4, circle: circle4 }].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px rgba(1, 147, 253, 0.5)' }}
              className="relative bg-cover bg-center rounded-2xl shadow-lg hover:shadow-xl transition-transform"
              style={{
                backgroundImage: `url(${item.img.src})`,
                height: "370px",
              }}
            >
              <Image
                src={item.circle}
                alt={`Light effect ${index + 1}`}
                className="m-8 mx-auto"
              />
              <h1 className="text-2xl font-bold tracking-tight text-white text-center mb-3">
                BLOCKCHAIN {index + 1}
              </h1>
              <p className="text-white text-lg text-center m-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

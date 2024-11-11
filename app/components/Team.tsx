'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import people1 from '../../public/people1.svg';
import people2 from '../../public/people2.svg';
import people3 from '../../public/people3.svg';
import social1 from '../../public/social1.svg';
import social2 from '../../public/social2.svg';
import social3 from '../../public/social3.svg';
import light1 from '../../public/light1.svg';
import light2 from '../../public/light2.svg';
import light3 from '../../public/light3.svg';
import teamcard from '../../public/teamcard.png';

export const Team = () => {
  return (
    <div className="relative max-w-screen-lg mx-auto py-8 mb-10">
      <h1 className="text-3xl font-bold text-white lg:text-7xl text-center mb-16 tracking-tight">
        CHAINOX <span className='text-[#0194FE]'>TEAM</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 space-y-8 lg:space-y-0">
        {[{
          img: people1, name: 'ENRIQUE IGLESIAS', position: 'SECRETARY', light: light1
        }, {
          img: people2, name: 'ELONE MUSK', position: 'CTO', light: light2
        }, {
          img: people3, name: 'ELTON JOHN', position: 'CLEANER', light: light3
        }].map((member, index) => (
          <motion.div
            key={index}
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true }}
            className="relative bg-cover bg-center rounded-2xl shadow-lg"
            style={{ backgroundImage: `url(${teamcard.src})` }}
          >
            <Image src={member.img} alt={member.name} className="mx-auto mt-4 rounded-lg" />
            <h2 className="text-center text-white mt-4 mb-4 font-medium text-xl tracking-tight">{member.name}</h2>
            <p className="text-center text-white/70">{member.position}</p>
            <div className="flex justify-center mt-4 space-x-4">
              {[social1, social2, social3].map((icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12"
                >
                  <Image src={icon} alt={`Social icon ${i + 1}`} className="w-12 h-12" />
                </motion.div>
              ))}
            </div>
            <div className='mt-20'>
              <Image src={member.light} alt="Light effect" className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-48" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

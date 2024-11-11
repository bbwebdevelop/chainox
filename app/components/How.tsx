'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import g1 from '../../public/g1.svg'
import g2 from '../../public/g2.svg'
import g3 from '../../public/g3.svg'
import g4 from '../../public/g4.svg'
import g5 from '../../public/g5.svg'
import g6 from '../../public/g6.svg'
import cross from '../../public/cross.png'

export const How = () => {
  return (
    <div className='relative max-w-screen-lg mx-auto py-8'>
      <div className='bg-[#1B2B41] rounded-2xl p-8'>
        <div className='flex justify-between'>
          <h1 className='text-white text-3xl font-bold lg:text-5xl tracking-tight'>HOW IT WORKS</h1>
          <motion.button
            className='custom-button no-cursor'
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Check
          </motion.button>
        </div>

        
        <motion.div 
          className="hidden lg:block absolute top-[55%] left-[30%]"
          initial={{ rotate: 0 }}
          whileInView={{ rotate: 360 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Image src={cross} alt="cross" />
        </motion.div>
        <motion.div 
          className="hidden lg:block absolute top-[55%] left-[65%]"
          initial={{ rotate: 0 }}
          whileInView={{ rotate: -360 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Image src={cross} alt="cross" />
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 py-8'>
          {[g1, g2, g3, g4, g5, g6].map((img, index) => (
            <motion.div
              key={index}
              className='text-center'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <Image src={img} alt={`g${index + 1}`} className='mx-auto' />
              <h1 className='text-white text-center mb-4 text-lg'>Everyday Practice</h1>
              <p className='text-white/70 text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequatur atque natus nihil dolore maiores!
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default How;

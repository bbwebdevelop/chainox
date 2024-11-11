'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import layerblur1 from '../../public/layerblur1.png'
import profit from '../../public/profit.svg'

export const Profit = () => {
  return (
    <div className='max-w-screen-lg mx-auto py-12'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='flex flex-col'
        >
          <Image src={profit} alt='profit' />
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='px-4 flex flex-col'
        >
          <h1 className='text-white text-4xl text-center lg:text-left font-bold mb-8 tracking-tight'>PROFIT DISTRIBUTION</h1>
          <p className='text-white/80 mb-2'>
            <span className='text-[#01C3FD]'>20%</span> of <span className='text-[#01C3FD]'>CryptoDo</span> profits are distributed by CBO holders through our <span className='text-[#01C3FD]'>smart-contract</span>
          </p>
          <p className='text-white/80 mb-2'>
            It is accepted as a payment for the service, and also distributes the company's profits among the leaders.
          </p>
          <p className='text-white/80'>
            All tokens accepted as payment are burned and withdrawn from circulation.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Profit;

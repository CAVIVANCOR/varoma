/* eslint-disable no-unused-vars */
import React from 'react'
import {motion} from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation'
import {planning} from '../export'
const Working = () => {
  return (
    <div id='working' className='w-full bg-white'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'>
        <motion.h1 
          variants={slideUpVariants} className='text-yellow-500 text-2xl'>
            PASO A PASO</motion.h1>
        <motion.h1 
          variants={slideUpVariants} className='text-black uppercase text-[40px] font-bold text-center'>
            Como Trabajamos</motion.h1>
        <motion.div
          variants={slideUpVariants}
          className='w-[120px] h-[6px] bg-yellow-500'></motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}        
          className='w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-start gap-[20px] mt-[30px]'>
              {
                planning.map((item, index) => (
                  <motion.div
                  key={index}
                  variants={zoomInVariants}
                  className='flex flex-col justify-center items-center gap-5 border-2 border-yellow-500 rounded-mg p-6'>
                    <div>
                      <item.icon className='size-[80px] bg-yellow-500 hover:bg-black hover:fill-white p-4 rounded-full cursor-pointer' />
                    </div>
                    <motion.h1
                        variants={zoomInVariants} className='text-2xl font-bold uppercase'>
                        {item.title}</motion.h1>
                    <motion.p
                        variants={zoomInVariants} className='text-[20px] text-center text-gray-600'>
                        {item.about}</motion.p>
                  </motion.div>
                ))
              }
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Working
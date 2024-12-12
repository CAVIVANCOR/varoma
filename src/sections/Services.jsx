/* eslint-disable no-unused-vars */
import React from 'react'
import {motion} from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation'
import {allservices} from '../export'
const Services = () => {
  return (
    <div id='services' className='w-full bg-white'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'>
        <motion.h1 
          variants={slideUpVariants} className='text-yellow-500 text-2xl'>
            SERVICIOS</motion.h1>
        <motion.h1 
          variants={slideUpVariants} className='text-black uppercase text-[40px] font-bold text-center'>
            Nuestros Servicios</motion.h1>
        <motion.div
          variants={slideUpVariants}
          className='w-[120px] h-[6px] bg-yellow-500'></motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}        
          className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-[20px] mt-[30px]'>
            {
              allservices.map((item, index) => (
                <motion.div
                key={index}
                variants={zoomInVariants}
                className='flex justify-center items-start gap-5 p-8'>
                  <motion.img
                    variants={zoomInVariants}
                    src={item.icon}
                    alt={item.title}
                    className='w-[70px] border-2 border-yellow-500 hover:bg-yellow-500 rounded-lg p-2'/>
                  <motion.div className='flex flex-col justify-center items-start gap-3'>
                    <motion.h1
                      variants={zoomInVariants} className='text-xl font-bold text-black'>
                      {item.title}</motion.h1>
                    <motion.p
                      variants={zoomInVariants} className='text-[18px]'>
                      {item.about}</motion.p>
                  </motion.div>
                </motion.div>
              ))
            }
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Services
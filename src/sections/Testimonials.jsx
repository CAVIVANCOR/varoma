/* eslint-disable no-unused-vars */
import React from 'react'
import {motion} from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation'
import {clients} from '../export'
const Testimonials = () => {
  return (
    <div id='testimonials' className='lg:w-[80%] w-[100%] m-auto 
    lg:py-[80px] pt-[250px] pb-[50px] flex lg:flex-row flex-col justify-between items-start gap-[20px] bg-black'>
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideUpVariants}
      className='lg:w-[80%] w-[90%] m-auto py-[30px] flex flex-col justify-between items-center gap-[20px]'>
      <motion.h1 
        variants={slideUpVariants} className='text-white uppercase text-4xl font-bold text-center'>
          nuestros clientes</motion.h1>
      <motion.div
        variants={slideUpVariants}
        className='w-[120px] h-[6px] bg-yellow-500'></motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}        
        className='lg:w-full w-[90%] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-20 mt-20 mb-16'>
            {
              clients.map((item, index) => (
                <div key={index} className='flex flex-col justify-center items-center gap-20'>
                  <div className='flex flex-col justify-center items-center gap-[5px]'>
                    <img src={item.image} alt={item.name} className='mt-1 mb-2 hover:scale-125 rounded-xl bg-white border-8 border-[#4C6971] object-contain h-[100px] w-[300px]' />
                    <h1 className='text-white text-sm font-semibold uppercase'>{item.name}</h1>
                  </div>
                </div>
              ))
            }
      </motion.div>
    </motion.div>
  </div>
  )
}

export default Testimonials
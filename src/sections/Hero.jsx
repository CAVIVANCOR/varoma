/* eslint-disable no-unused-vars */
import React from 'react'
import heroimg from '../assets/heroimg.png'
import backgroundImage from '../assets/homeimg.webp'
import {motion} from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation'

const Hero = () => {
  return (
    <div id='hero' className='bg-black w-full lg:h-[700px] m-auto pt-[60px]
     lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between items-center
      lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center' 
      style={{backgroundImage: `url(${backgroundImage})`}}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4'>
            <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-2xl'>Varoma Group</motion.h1>
            <motion.h1 variants={slideUpVariants} className='text-white uppercase text-[40px] font-bold'>Lider en Electrificación Industrial</motion.h1>
            <div className='w-[120px] h-[6px] bg-yellow-500'></div>
            <p className='text-white text-[20px]'>
            Su socio estratégico para solucionar las dificultades de productividad, disponibilidad, fiabilidad, seguridad, costes, energía, emisiones, etc.
            Contribuimos a que las industrias funcionen a alto rendimiento, al tiempo que mejoran su eficiencia, productividad y sostenibilidad, para superar sus resultados y el buen uso de los recursos
            </p>
            <motion.div
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className='flex justify-center items-center gap-5'>
              <motion.button
              variants={zoomInVariants}
              className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold'>
                Leer más
              </motion.button>
              <motion.button
              variants={zoomInVariants}
              className='border-white hover:border-yellow-500 hover:text-yellow-500
              border-2 px-10 py-3 rounded-lg text-white font-bold'>
                Contactenos
              </motion.button>
            </motion.div>
        </motion.div>
        <motion.div className='w-[40%] flex flex-col justify-end items-end'>
          <motion.img
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          src={heroimg} 
          alt="heroimg" 
          className='md:max-w-md object-contain lg:h-[600px] h-[300px] lg:mb-[-100px]' />
        </motion.div>
    </div>
  )
}

export default Hero
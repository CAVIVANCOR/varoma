/* eslint-disable no-unused-vars */
import React from 'react'
import backgroundImage2 from '../assets/VaromaFondoEmpresarial2.jpg'
import {motion} from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation'
import { Link } from 'react-scroll'
const Hero = () => {
  return (
    <motion.div id='hero' className='bg-black w-full lg:h-[700px] lg:px-[150px] px-[10px] flex justify-between items-center
      lg:flex-row flex-col lg:gap-2 gap-[5px]'>
      <div className='absolute w-full h-[700px] left-0 bg-cover bg-center opacity-40' style={{backgroundImage: `url(${backgroundImage2})`}}></div>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[70%] w-full flex flex-col justify-center items-start lg:gap-8 gap-1 z-10 pt-12'>
        <motion.h1 className='text-white md:text-5xl text-4xl font-bold font-rubik'>VAROMA GROUP</motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-[#EADC80] uppercase text-3xl mt-5 font-bold'>Lider en Electrificación Industrial</motion.h1>
        <div className='w-[120px] h-[6px] bg-[#EADC80]'></div>
        <p className='text-white font-light lg:text-2xl mt-5'>
          Su socio estratégico para solucionar las dificultades de productividad, disponibilidad, fiabilidad, seguridad, costes, energía, emisiones, etc.
          Contribuimos a que las industrias funcionen a alto rendimiento, al tiempo que mejoran su eficiencia, productividad y sostenibilidad, para superar sus resultados y el buen uso de los recursos
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className='flex justify-center items-center mt-10 gap-5'>
            <Link to='about' spy={true} offset={-100} smooth={true} duration={500}>
              <motion.button
                variants={zoomInVariants}
                className='bg-[#EADC80] hover:bg-white px-10 py-3 rounded-lg text-black font-bold text-[12px] lg:text-lg'>
                Leer más
              </motion.button>
            </Link>
            <Link to='contact' spy={true} offset={-100} smooth={true} duration={500}>
              <motion.button
                variants={zoomInVariants}
                className='border-white hover:border-yellow-500 hover:text-yellow-500 border-2 px-10 py-3 rounded-lg text-white font-bold text-[12px] lg:text-lg'>
                Contactenos
              </motion.button>
            </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Hero
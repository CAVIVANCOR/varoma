/* eslint-disable no-unused-vars */
import React from 'react'
import {motion} from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation'
import logoVaroma from '../assets/logoVaromaAjustado.png'
const Contact = () => {
  return (
    <div id='contact' className='lg:w-[80%] w-[100%] m-auto 
      lg:py-[80px] pt-[150px] pb-[50px] flex lg:flex-row flex-col justify-between items-start gap-[20px] bg-white'>
      <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col
      justify-between items-star gap-[10px]' id='about'>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'>
          <motion.h1 variants={slideUpVariants} className='text-[#EADC80] uppercase text-4xl font-bold lg:text-6xl'>Contactenos</motion.h1>
          <motion-img 
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}>
            <img src={logoVaroma} alt='logoVaroma' className='w-[136px] h-[82px] object-cover top-0 ml-0' />
          </motion-img>
          <motion.h1 variants={slideUpVariants} className='text-black uppercase text-2xl lg:text-6xl font-bold'>Envíenos un correo electrónico</motion.h1>        
          <div className='w-[120px] h-[6px] bg-yellow-500'></div>
          <p className='lg:text-xl font-light italic text-gray-600 lg:mb-[60px]'>
          Siempre habra un miembro de nuestro equipo. Estaremos encantados de ayudarle.
          </p>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
          </motion.div>
          <motion.form 
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className='flex flex-col justify-center items-start gap-4 w-full'>
              <input type='text' placeholder='Nombre Completo' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
              <input type='email' placeholder='Correo Electronico' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
              <input type='text' placeholder='Telefono Celular' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
              <textarea type='text' placeholder='Ingrese su mensaje' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
              <motion.button
              variants={zoomInVariants}
              className='bg-yellow-500 hover:bg-black hover:text-white px-10 py-4 text-black font-bold rounded-lg w-full'>Enviar</motion.button>
          </motion.form>
      </div>
    </div>

  )
}

export default Contact
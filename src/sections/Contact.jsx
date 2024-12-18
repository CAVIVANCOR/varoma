/* eslint-disable no-unused-vars */
import React from 'react'
import {motion} from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation'
const Contact = () => {
  return (
    <div id='contact' className='bg-white w-full'>
      <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col
      justify-between items-star gap-[50px]' id='about'>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'>
          <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-2xl'>Contactenos</motion.h1>
          <motion.h1 variants={slideUpVariants} className='text-black uppercase text-[40px] font-bold'>Envíenos un correo electrónico</motion.h1>        
          <div className='w-[120px] h-[6px] bg-yellow-500'></div>
          <p className='text-3xl italic text-gray-600 mt-[60px]'>
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
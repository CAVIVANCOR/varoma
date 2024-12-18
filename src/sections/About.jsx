/* eslint-disable no-unused-vars */
import React from 'react'
import {motion} from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation'
const About = () => {
  return (
      <div id='about' className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col
      justify-between items-start gap-[50px]' >
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'>
          <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-2xl'>Nosotros</motion.h1>
          <motion.h1 variants={slideUpVariants} className='text-white uppercase text-[40px] font-bold'>Ingenieria y Construccion</motion.h1>        
          <div className='w-[120px] h-[6px] bg-yellow-500'></div>
          <p className='text-3xl italic text-gray-50 mt-[60px]'>En VAROMA GROUP nos especializamos en ingeniería y construcción, con un enfoque destacado en la ejecución de proyectos y la prestación de servicios dentro del sector eléctrico industrial.</p>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
            <p className='text-white text-lg text-justify'>
            Nuestro compromiso con la calidad, la seguridad y el respeto al medio ambiente nos permite ofrecer soluciones personalizadas que se adaptan a las necesidades específicas de cada cliente.
            Desde el diseño inicial hasta la instalación y el mantenimiento de sistemas eléctricos, nuestro equipo de profesionales altamente capacitados asegura la excelencia en cada etapa del proyecto. Nos dedicamos a proporcionar respuestas rápidas y efectivas, cumpliendo estrictamente con los plazos establecidos y los más altos estándares del sector.
            En VAROMA GROUP, trabajamos con pasión y dedicación para superar las expectativas de nuestros clientes, ofreciendo servicios personalizados de la más alta calidad. Nuestra prioridad es su satisfacción, y nos esforzamos por consolidarnos como un referente en el sector eléctrico industrial en Perú, contribuyendo activamente al desarrollo y crecimiento de sus operaciones.
            </p>
            <motion.button
            variants={zoomInVariants}
            className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold text-black '>
              Leer más
            </motion.button>
          </motion.div>
      </div>
  )
}

export default About
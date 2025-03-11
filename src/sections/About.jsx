/* eslint-disable no-unused-vars */
import React from 'react'
import {motion} from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation'
import { Link } from 'react-scroll'
import logoVaroma from '../assets/logoVaromaAjustado.png'
const About = () => {
  return (
      <div id='about' className='lg:w-[80%] w-[90%] m-auto
      lg:py-[100px] pt-[250px] pb-[50px] flex lg:flex-row flex-col justify-between items-start gap-[20px]'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='lg:w-[80%] w-[90%] m-auto flex flex-col justify-start items-start gap-5'>
          <motion.h1 variants={slideUpVariants} className='text-white uppercase text-center text-4xl'>Nosotros</motion.h1>
          <motion-img 
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}>
            <img src={logoVaroma} alt='logoVaroma' className='w-[136px] h-[82px] object-cover top-0 ml-0' />
          </motion-img>
          <motion.h1 variants={slideUpVariants} className='text-[#EADC80] uppercase text-[36px] font-bold'>Ingenieria y Construccion</motion.h1>        
          <div className='w-[120px] h-[6px] bg-[#EADC80]'></div>
          <p className='md:font-light lg:text-3xl italic text-gray-50 mt-[40px]'>En VAROMA GROUP nos especializamos en ingeniería y construcción, con un enfoque destacado en la ejecución de proyectos y la prestación de servicios dentro del sector eléctrico industrial.</p>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
            <p className='text-white font-light lg:text-xl'>
            Nuestro compromiso con la calidad, la seguridad y el respeto al medio ambiente nos permite ofrecer soluciones personalizadas que se adaptan a las necesidades específicas de cada cliente.
            Desde el diseño inicial hasta la instalación y el mantenimiento de sistemas eléctricos, nuestro equipo de profesionales altamente capacitados asegura la excelencia en cada etapa del proyecto. Nos dedicamos a proporcionar respuestas rápidas y efectivas, cumpliendo estrictamente con los plazos establecidos y los más altos estándares del sector.
            En VAROMA GROUP, trabajamos con pasión y dedicación para superar las expectativas de nuestros clientes, ofreciendo servicios personalizados de la más alta calidad. Nuestra prioridad es su satisfacción, y nos esforzamos por consolidarnos como un referente en el sector eléctrico industrial en Perú, contribuyendo activamente al desarrollo y crecimiento de sus operaciones.
            </p>
            <Link to='working' spy={true} offset={-100} smooth={true} duration={500}>
              <motion.button
                variants={zoomInVariants}
                className='bg-[#EADC80] hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold text-black '>
                Leer más
              </motion.button>
            </Link>
        </motion.div>
      </div>
  )
}

export default About
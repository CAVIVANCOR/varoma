/* eslint-disable no-unused-vars */
import React from 'react'
import {motion} from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'
import project5 from '../assets/project5.jpg'
import project6 from '../assets/project6.jpg'
import project7 from '../assets/project7.jpg'
import project8 from '../assets/project8.jpg'
const Portfolio = () => {
  return (
    <div id='projects' className='w-full'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'>
        <motion.h1 
          variants={slideUpVariants} className='text-yellow-500 text-2xl'>
            PROYECTOS REALIZADOS</motion.h1>
        <motion.h1 
          variants={slideUpVariants} className='text-black uppercase text-[40px] font-bold text-center'>
            Nuestros Proyectos</motion.h1>
        <motion.div
          variants={slideUpVariants}
          className='w-[120px] h-[6px] bg-yellow-500'></motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}        
          className='w-full m-auto grid lg:grid-cols-4 grid-cols-1'>
           <motion.img variants={zoomInVariants} src={project1} alt="project1" className='h-[250px] w-full' />
           <motion.img variants={zoomInVariants} src={project2} alt="project2" className='h-[250px] w-full' />
           <motion.img variants={zoomInVariants} src={project3} alt="project3" className='h-[250px] w-full' />
           <motion.img variants={zoomInVariants} src={project4} alt="project4" className='h-[250px] w-full' />
           <motion.img variants={zoomInVariants} src={project5} alt="project5" className='h-[250px] w-full' />
           <motion.img variants={zoomInVariants} src={project6} alt="project6" className='h-[250px] w-full' />
           <motion.img variants={zoomInVariants} src={project7} alt="project7" className='h-[250px] w-full' />
           <motion.img variants={zoomInVariants} src={project8} alt="project8" className='h-[250px] w-full' />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Portfolio
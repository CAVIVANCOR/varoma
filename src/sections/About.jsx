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
          <motion.h1 variants={slideUpVariants} className='text-white uppercase text-[40px] font-bold'>Prime Construction</motion.h1>        
          <div className='w-[120px] h-[6px] bg-yellow-500'></div>
          <p className='text-3xl italic text-gray-50 mt-[60px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestiae, velit odio rerum dicta odit tempore quo neque eos nihil incidunt cumque, praesentium iste fugit eaque, inventore animi maxime! Aliquid?
          </p>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
            <p className='text-white text-lg text-justify'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, fuga temporibus sint aspernatur molestiae esse quod? Deleniti, similique aliquam voluptatum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, fuga temporibus sint aspernatur molestiae esse quod? Deleniti, similique aliquam voluptatum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, fuga temporibus sint aspernatur molestiae esse quod? Deleniti, similique aliquam voluptatum
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, fuga temporibus sint aspernatur molestiae esse quod? Deleniti, similique aliquam voluptatum
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at voluptatum eveniet labore id incidunt, cupiditate delectus mollitia et sed a reiciendis odio quaerat qui facere voluptates. Necessitatibus, alias vel!
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
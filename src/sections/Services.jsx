/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation'
import {allservices} from '../export'
const Services = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div id='services' className='lg:w-[80%] w-[100%] m-auto 
    lg:py-[80px] pt-[250px] pb-[50px] flex lg:flex-row flex-col justify-between items-start gap-[20px] bg-white'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[80%] w-[100%] m-auto flex flex-col justify-between items-center gap-[5px]'>
        <motion.h1 variants={slideUpVariants} className='text-black uppercase text-4xl font-bold text-center'>Nuestros Servicios</motion.h1>
        <motion.div variants={slideUpVariants} className='w-[120px] h-[6px] bg-[#EADC80]'></motion.div>
        <motion.div    
          className='w-full grid sm:grid-cols-1 md:grid-cols-2 justify-center items-start gap-[5px] mt-[5px]'>
            {
              allservices.map((item, index) => (
                <>
                  {item.icons.length == 0 && (
                    <motion.div
                      key={index}
                      variants={zoomInVariants}
                      className='grid md:grid-cols-1 xl:grid-cols-2 justify-center items-start gap-5 p-8'>
                        <motion.img
                          variants={zoomInVariants}
                          src={item.icon}
                          alt={item.title}
                          className='w-[350px] h-[200px] object-cover border-2 border-[#EADC80] hover:bg-[#EADC80] cursor-pointer rounded-lg p-2'
                          onClick={() => {
                            const modal = document.createElement('div');
                            modal.className = 'fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center';
                            const imgContainer = document.createElement('div');
                            imgContainer.className = 'max-w-4xl max-h-4xl bg-white border-2 border-gray-300 rounded-lg p-4';
                            const img = document.createElement('img');
                            img.src = item.icon;
                            img.className = 'w-full h-full object-contain';
                            imgContainer.appendChild(img);
                            modal.appendChild(imgContainer);
                            document.body.appendChild(modal);
                            modal.addEventListener('click', () => {modal.remove();});
                          }}
                        />
                          <motion.div className='flex flex-col justify-center items-start gap-2'>
                            <motion.h1
                              variants={zoomInVariants} className='text-xl text-center font-bold text-black'>
                              {item.title}
                            </motion.h1>
                            <motion.p
                              variants={zoomInVariants} className='font-light'>
                              {item.about}
                            </motion.p>
                          </motion.div>
                    </motion.div>
                  )}
                </>
              ))
            }
        </motion.div>
        <motion.div    
          className='w-[90%] grid sm:grid-rows-1 xl:grid-rows-1 justify-center items-start gap-[5px] mt-[5px]'>
            {
              allservices.map((item, index) => (
                <>
                  {item.icons.length > 0 && (
                    <>
                        <motion.div className='grid md:grid-rows-1 xl:grid-cols-4 justify-around items-start gap-5'>
                          {item.icons.map((icon, index) => (
                            <motion.img
                              key={index}
                              variants={zoomInVariants}
                              src={icon}
                              alt={item.title}
                              className='w-[350px] h-[200px] object-cover border-2 border-[#EADC80] hover:bg-[#EADC80] cursor-pointer rounded-lg p-2'
                              onClick={() => {
                                const modal = document.createElement('div');
                                modal.className = 'fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center';
                                const imgContainer = document.createElement('div');
                                imgContainer.className = 'max-w-4xl max-h-4xl bg-white border-2 border-gray-300 rounded-lg p-4';
                                const img = document.createElement('img');
                                img.src = icon;
                                img.className = 'w-full h-full object-contain';
                                imgContainer.appendChild(img);
                                modal.appendChild(imgContainer);
                                document.body.appendChild(modal);
                                modal.addEventListener('click', () => {modal.remove();});
                              }}
                              />
                          ))}
                        </motion.div>
                        <motion.div className='grid md:grid-rows-1 xl:grid-rows-2 justify-center items-center gap-2'>
                          <motion.h1
                            variants={zoomInVariants} className='text-xl text-center font-bold text-black'>
                            {item.title}
                          </motion.h1>
                          <motion.p
                            variants={zoomInVariants} className='font-light'>
                            {item.about}
                          </motion.p>
                        </motion.div>
                    </>
                  )}
                </>
              ))
            }
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Services
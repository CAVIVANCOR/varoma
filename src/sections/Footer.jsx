/* eslint-disable no-unused-vars */
import React from 'react'
import { FaCopyright } from 'react-icons/fa6'
import {Link} from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <div className='bg-black text-white flex justify-center items-center'>
        <p className='font-extralight text-center italic'>www.varomagroup.com</p>
      </div>
      <div className='bg-black text-white flex justify-center items-center gap-2 p-5'>
        <FaCopyright className='fill-yellow-500 lg:size-5 size-8'/>
        <p className='font-extralight text-center'>Copyright 2024, VaromaGroup, Todos los Derechos Reservados</p>
      </div>
      <div id='icon-box' className='bg-yellow-500 text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg-bottom-6 right-6 bottom-6 z-50'>
        <Link to='hero' spy={true} offset={-100} smooth={true} duration={500}><FaArrowUp className='size-6'/></Link>
      </div>
    </>
  )
}

export default Footer
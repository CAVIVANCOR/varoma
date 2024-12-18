/* eslint-disable no-unused-vars */
import React,{ useState} from 'react'
import { FaXmark, FaBars } from 'react-icons/fa6'
import {Link} from 'react-scroll'
import { motion } from 'framer-motion';
import {slideUpVariants, zoomInVariants} from './animation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  const navItems = [
    {
      link: 'Inicio', path: 'hero'
    },
    {
      link: 'Nosotros', path: 'about'
    },
    {
      link: 'Servicios', path: 'services'
    },
    {
      link: 'Proyectos', path: 'projects'
    },
    {
      link: 'Contacto', path: 'contact'
    }
  ]
  return (
  <nav className='w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50'>
    <h1 className='text-black md:text-4xl text-3xl font-bold font-rubik'>Varoma<span className='text-yellow-500 italic'>Group</span></h1>
    <ul className='lg:flex justify-center items-center gap-6 hidden'>
      {
        navItems.map(({link, path}) => (
          <Link
          key={path}
          className='text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-yellow-500 hover:text-black text-[15px]'
          to={path}
          spy={true}
          offset={-100}
          smooth={true}
          >
            {link}
          </Link>
        ))
      }
    </ul>
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={zoomInVariants}
      className='fixed-bottom right-100 p-3 z-20 left-initial flex items-center'>
      <a href='https://wa.me/511949101509?text=Hola,%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n' target='_blank' className='flex items-center relative'>
        <motion.img 
          src='/src/assets/whatsapp.png' 
          alt='whatsapp' 
          className='w-10 h-10'
          whileHover={{ scale: 1.5, transition: { duration: 0.8, repeat: Infinity, ease: 'easeInOut' } }}/>
      </a>
    </motion.div>
    <div className='flex justify-between items-center lg:hidden mt-3' onClick={toggleMenu}>
      <div>
        {isMenuOpen ? <FaXmark className='text-yellow-500text-3xl cursor-pointer' onClick={closeMenu} /> : <FaBars className='text-yellow-500 text-3xl cursor-pointer'/>}
      </div>
    </div>
    <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-yellow-500 p-4 absolute top-[72px] left-0`} onClick={closeMenu}>
      <ul className='flex flex-col justify-center items-center gap-2 w-full'>
        {
          navItems.map(({link, path}) => (
            <Link
            key={path}
            className='text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center'
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
            >
              {link}
            </Link>
          ))
        }
      </ul>
    </div>
  </nav>
  )
}

export default Header
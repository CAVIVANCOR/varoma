/* eslint-disable no-unused-vars */
import React from 'react'
import {motion} from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation'
import logoVaroma from '../assets/logoVaromaAjustado.png'
import { useState } from 'react'
import axios from 'axios'
const urlBackend = import.meta.env.VITE_BACKEND_URL

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const handleEmailClick = async () => {
      try {
          const messageHtml = `
          <html>
            <body>
              <h2>Formulario de contacto Web CAVR</h2>
              <p>Nombre: ${formData.name}</p>
              <p>Correo electrónico: ${formData.email}</p>
              <p>Teléfono: ${formData.phone}</p>
              <p>Mensaje: ${formData.message}</p>
            </body>
          </html>
        `;
        const response = await axios.post(`${urlBackend}/send-email`, {
          name: formData.name,
          from: formData.email,
          subject: 'Formulario de contacto Web CAVR',
          phone: formData.phone,
          text: messageHtml,
        });
        console.log(response.data);
        alert('Correo electrónico enviado con éxito!',response.data);
      } catch (error) {
        console.error(error);
        alert('Error al enviar el correo electrónico',error);
      }
    };
  
  const handleChange = (event) => {
      event.preventDefault();
      setFormData({ ...formData, [event.target.name]: event.target.value });
  };
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
          Nuestro personal comercial@varomagroup.com estarán encantados de ayudarle.
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
              <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required placeholder='Nombre Completo' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
              <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required placeholder='Correo Electronico' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
              <input type='tel' id='phone' name='phone' value={formData.phone} onChange={handleChange} required placeholder='Telefono' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
              <textarea type='text' rows='4' id='message' name='message' value={formData.message} onChange={handleChange} required placeholder='Ingrese su mensaje' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
              <motion.button
              variants={zoomInVariants}
              onClick={handleEmailClick}
              className='bg-yellow-500 hover:bg-black hover:text-white px-10 py-4 text-black font-bold rounded-lg w-full'>Enviar</motion.button>
          </motion.form>
      </div>
    </div>

  )
}

export default Contact
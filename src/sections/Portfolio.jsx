/* eslint-disable no-unused-vars */
import React,{ useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'
import project5 from '../assets/project5.jpg'
import project6 from '../assets/project6.jpg'
import project7 from '../assets/project7.jpg'
import project8 from '../assets/project8.jpg';
import "./Portfolio.css";


function ProductImage({id, imgProject, onExpand}) {
  return (
    <motion.img
      src={imgProject}
      alt={imgProject}
      onClick={()=>onExpand(id)}
      className='related-product-image'
      layoutId={`Proyecto-${id}`}
    />
  );
}
const Portfolio = () => {
  const [productId, setProductId] = useState([2,3,4,5,6,7,8]);
  const [primaryProduct, setPrimaryProduct] = useState(1);
  function setAsPrimary(id) {
    const currentProductId = primaryProduct;
    const newProductIds=[...productId.filter((x)=> x !== id), currentProductId];
    setPrimaryProduct(id);
    setProductId(newProductIds);
  }
  return (
    <div id='projects' className='w-full mb-3 mt-0'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className='lg:w-[80%] w-[90%] m-auto py-[15px] flex flex-col justify-between items-center gap-[20px]'>
        <motion.h1 
          variants={slideUpVariants} className='text-yellow-500 text-2xl'>
            PROYECTOS REALIZADOS</motion.h1>
        <motion.h1 
          variants={slideUpVariants} className='text-white uppercase text-[40px] font-bold text-center'>
            Nuestros Proyectos</motion.h1>
        <motion.div variants={slideUpVariants} className='w-[120px] h-[6px] bg-yellow-500'></motion.div>
      </motion.div>
      <div className='container'>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className='primary-container'>
            <AnimatePresence>
              <motion.img 
                  key={primaryProduct}
                  layoutId={`Proyecto-${primaryProduct}`}
                  className='primary-product-image'
                  src={`/src/assets/project${primaryProduct}.jpg`}
                  alt={`${primaryProduct}`}>
              </motion.img>
            </AnimatePresence>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className='product-gallery'>
            <AnimatePresence>
              {productId.map((id) => (
                <ProductImage
                    key={id}
                    id={id}
                    imgProject={`/src/assets/project${id}.jpg`}
                    onExpand={setAsPrimary}
                />
              ))}
            </AnimatePresence>
          </motion.div>
      </div>
    </div>
  )
}

export default Portfolio


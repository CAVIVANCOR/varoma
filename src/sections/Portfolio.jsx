import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {motion} from 'framer-motion'
import {slideUpVariants} from './animation'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'
import project6 from '../assets/project6.jpg'
import project7 from '../assets/project7.jpg'
import project8 from '../assets/project8.jpg';
const allservices = [
  { url: project1, index:0, title: 'Proyecto 1', description: 'Descripción del proyecto 1' },
  { url: project2, index:1, title: 'Proyecto 2', description: 'Descripción del proyecto 2' },
  { url: project3, index:2, title: 'Proyecto 3', description: 'Descripción del proyecto 3' },
  { url: project4, index:3, title: 'Proyecto 4', description: 'Descripción del proyecto 4' },
  { url: project6, index:5, title: 'Proyecto 6', description: 'Descripción del proyecto 6' },
  { url: project7, index:6, title: 'Proyecto 7', description: 'Descripción del proyecto 7' },
  { url: project8, index:7, title: 'Proyecto 8', description: 'Descripción del proyecto 8' }
];
function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const handleNext = () => {
    if (currentImage === allservices.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentImage === 0) {
      setCurrentImage(allservices.length - 1);
    } else {
      setCurrentImage((prev) => prev - 1);
    }
  };

  return (
    <div id='projects' className='lg:w-[80%] w-[100%] m-auto 
    lg:py-[80px] pt-[250px] pb-[50px] flex lg:flex-row flex-col justify-between items-start gap-[20px] bg-black'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[80%] w-[100%] m-auto flex flex-col justify-between items-center gap-[5px]'>
        <motion.h1 variants={slideUpVariants} className='text-white uppercase text-4xl font-bold text-center'>Proyectos Concluidos</motion.h1>
        <motion.div variants={slideUpVariants} className='w-[120px] h-[6px] bg-[#EADC80]'></motion.div>
        <motion.div className="max-w-[800px] h-[550px] relative gap-[5px] mt-[25px]">
          <img
            onClick={() => {
              const modal = document.createElement('div');
              modal.className = 'fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center';
              const imgContainer = document.createElement('div');
              imgContainer.className = 'max-w-4xl max-h-4xl bg-white border-2 border-gray-300 rounded-lg p-4';
              const img = document.createElement('img');
              img.src = allservices[currentImage].url;
              img.className = 'w-full h-full object-contain';
              imgContainer.appendChild(img);
              modal.appendChild(imgContainer);
              document.body.appendChild(modal);
              modal.addEventListener('click', () => {modal.remove();});
            }}
            className="w-full h-full object-cover rounded-[20px] cursor-pointer aspect-video"
            src={allservices[currentImage].url}
            alt=""
          />
          <div
            onClick={handlePrev}
            className="absolute top-[50%] left-2 transform -translate-y-1/2 bg-white/90 rounded-[50%] cursor-pointer">
            <IoIosArrowBack size={30} />
          </div>
          <div
            onClick={handleNext}
            className="absolute top-[50%] right-2 transform -translate-y-1/2 bg-white/90 rounded-[50%] cursor-pointer">
            <IoIosArrowForward size={30} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
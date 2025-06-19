import React from 'react'
import { motion ,useMotionValue, useTransform,useSpring} from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";



const ServiceCard = ({card}) => {

    console.log(card)
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

  const springConfig = { stiffness: 300, damping: 20 };
  const rotateX = useSpring(useTransform(y, [0, 1], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-15, 15]), springConfig);
  const scale = useSpring(1.05, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };
  return (
   <motion.div
      className="relative w-[300px] h-[400px] bg-secondary hover:bg-secondary/30 rounded-xl shadow-2xl cursor-pointer"
      style={{
        rotateX,
        rotateY,
        scale: scale,
        transformPerspective: 1000,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
        <div className="">
            <div className='p-6 flex justify-between items-center'>
                <img src={card.icon} alt="" />
                <div className='w-12 h-12 bg-primary rounded-full flex justify-center items-center'>
                    <IoIosArrowForward size={24}/>
                </div>
            </div>
            <div className='text-center mt-6 '>
                    <p className='text-2xl text-gray-300'>{card.title}</p>
            </div>
                
            <div className='absolute bottom-0 '>
                <img src={card.image} alt="" className='rounded-xl w-full h-[200px]'/>
            </div>
        </div>
    </motion.div>
  )
}

export default ServiceCard

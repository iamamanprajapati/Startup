import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";

const ServiceCard = ({ card }) => {
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
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };
  return (
    <motion.div
      className="relative  w-full min-h-[480px] bg-secondary  shadow-2xl border-gray-600/50 hover:border-[1px] rounded-3xl shadow-3xl cursor-pointer overflow-hidden"
      style={{
        rotateX,
        rotateY,
        scale: scale,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient Overlay */}
      <div className="absolute  top-0 left-0 w-full h-full z-0 pointer-events-none" />

      <div className="">
        <div className="p-6  flex justify-center items-center mt-4">
          <img src={card.icon} alt="" className="w-24" />
          {/* <div className='w-12 h-12 bg-primary rounded-full flex justify-center items-center'>
                    <IoIosArrowForward size={24}/>
                </div> */}
        </div>
        <div className="text-center ">
          <p className="text-lg text-white mb-3">{card.title}</p>
          <p className="text-xs  px-6 text-gray-200 ">{card.description}</p>
        </div>
        <div className="mt-8">
          {card.listItem.map((item, index) => (
            <div
              key={index}
              className="px-6 mt-4 gap-x-3 flex justify-between items-center"
            >
              <div>
                <p className="text-sm text-gray-200">{item.title}</p>
                <p className="text-xs text-gray-400">{item.about}</p>
              </div>
              <div className="bg-secondary/70 w-8 h-8 flex items-center justify-center border-[1px] border-gray-600/50 rounded-md">
                <GoArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

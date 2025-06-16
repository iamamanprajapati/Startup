import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div className='bg-primary py-12'>

    <div className='max-w-7xl mx-auto  sm:py-7 px-6 text-white'>
      <div className='flex items-center justify-center gap-4 '>
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }} 
            viewport={{once:true}}   
            transition={{ duration: 1.2, ease: "easeOut" }}
        >
        <BsArrowRight size={24} className='text-colortext'/>
        </motion.div>
        <h3 className='text-colortext text-sm md:text-xl'>About Company</h3>
      </div>
      <p className='text-3xl md:text-5xl text-center py-3 font-semibold leading-[1.2]'>
        Our Main Goal to Satisfied <br/> Local & Global Clients
      </p>
      <p className=' w-full text-sm md:text-base font-light text-gray-300 md:w-2/3 mx-auto text-center'>At Vdigtech, we understand that your online presence is more than just code and graphics; it's the digital heartbeat of your brand. That's why we specialize in creating custom web solutions tailored to your unique needs.</p>
    </div>
    </div>

  )
}

export default About

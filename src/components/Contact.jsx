import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import {motion} from 'framer-motion'
import ContactForm from './ContactForm'
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { BsInfoCircleFill } from "react-icons/bs";





const Contact = () => {
  return (
    <div className="bg-primary py-12">
      <div className="max-w-7xl mx-auto  sm:py-7 px-6 text-white">
      
        <div className="text-center">
          <p className="text-3xl md:text-5xl text-center font-semibold mt-4">
            Contact
          </p>
          <p className="text-gray-300 text-center mx-auto mt-4 w-full md:w-1/2">
           Ready to transform your content? Let's discuss your project and create something amazing together.
          </p>
        </div>
        
        <div className='flex flex-col md:flex-row mt-12 gap-10'>
            {/* form */}
            <div className='w-full md:w-1/2 bg-secondary/50 p-8 rounded-xl'>
               <ContactForm/>
            </div>
            {/* info */}
            <div className='flex flex-col gap-4 w-full md:w-1/2'>
            <div className='w-full bg-secondary/50 p-8 rounded-xl'>
                <p className='text-gray-300 font-semibold text-xl'>Get In Touch</p>
                <div className='flex items-center gap-4 mt-6'>
                    <div className='w-9 h-9 rounded-full bg-colortext flex justify-center items-center'>
                    <MdEmail size={16}/>
                    </div>
                    <div>
                        <p className='text-gray-300 text-sm'>Email Us</p>
                        <p className='text-gray-600 text-xs'>hello@growth.com</p>
                    </div>
                </div>

                <div className='flex items-center gap-4 mt-6'>
                    <div className='w-9 h-9 rounded-full bg-colortext flex justify-center items-center'>
                    <FaClock size={16}/>
                    </div>
                    <div>
                        <p className='text-gray-300 text-sm'>Reponse Time</p>
                        <p className='text-gray-600 text-xs'>Within 24 hours</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 mt-6'>
                    <div className='w-9 h-9 rounded-full bg-colortext flex justify-center items-center'>
                    <FaClock size={16}/>
                    </div>
                    <div>
                        <p className='text-gray-300 text-sm'>Support</p>
                        <p className='text-gray-600 text-xs'>24/7 Available</p>
                    </div>
                </div>
            </div>
            {/* <div className='w-full bg-secondary/50 p-8 rounded-xl'>
            </div> */}
            </div>

        </div>

        </div>
        
        <div className="w-full h-screen"></div>

    </div>
  )
}

export default Contact

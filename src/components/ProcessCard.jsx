import React from 'react'
import { FaStar } from 'react-icons/fa'
import {motion} from 'framer-motion'

const ProcessCard = ({data}) => {
  return (
      <div className={`flex  flex-col md:flex-row ${data.id % 2 === 0 && 'flex-col md:flex-row-reverse'}  gap-8 justify-between items-center`}>
            {/* left */}
            <motion.div 
             initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className='w-full md:w-1/2 bg-secondary shadow-xl rounded-xl p-6'>
                <p className='text-xl'>{data.title}</p>
                <p className='text-sm text-gray-400 my-2'>{data.description}</p>
                <div className='mt-6'>
                {
                    data.listItems.map((item,index)=>(
                        <div key={item.id} className="flex mt-1 items-center gap-x-3 text-sm text-gray-400">
                            <FaStar className="text-orange-400"/>
                            <p className='text-xs'>{item.title}</p>
                        </div>
                    ))
                }
                </div>
            </motion.div>  

            {/* right */}

            <motion.div
             initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className='w-full md:w-1/2'>
            <div className='flex gap-x-4 justify-center'>
                    {
                        data.images.map((image,index)=>(
                            <div className='flex' key={index}>
                            <img src={image} alt=""  className='w-[304px] h-[171px] rounded-xl shadow-2xl'/>
                            </div>
                        ))
                    }
            </div>
            </motion.div>
      </div>
  )
}

export default ProcessCard

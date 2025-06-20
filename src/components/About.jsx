import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import globalteam from "../assets/globaltem.svg";
import { FaStar } from "react-icons/fa";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
import { FaRegCircleCheck } from "react-icons/fa6";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";


const About = () => {

  const [ref, inView] = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.3,     // Trigger when 30% is visible
  });

  return (
    <div className="bg-primary py-12">
      <div className="max-w-7xl mx-auto  sm:py-7 px-6 text-white">
        <div className="flex items-center justify-center gap-4 ">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <BsArrowRight size={24} className="text-colortext" />
          </motion.div>
          <h3 className="text-colortext text-sm md:text-xl">About Company</h3>
        </div>
        <p className="text-3xl md:text-5xl text-center py-3 font-semibold leading-[1.2]">
          Our Main Goal to Satisfied <br /> Local & Global Clients
        </p>
        <p className=" w-full text-sm md:text-base font-light text-gray-300 md:w-2/3 mx-auto text-center">
          At Vdigtech, we understand that your online presence is more than just
          code and graphics; it's the digital heartbeat of your brand. That's
          why we specialize in creating custom web solutions tailored to your
          unique needs.
        </p>

        <div className="mt-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }} // Start from left and hidden
            whileInView={{ scale: 1, opacity: 1 }} // Animate to original position
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center w-full"
          >
            <img src={globalteam} alt="" />
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-12 mt-8">

          {/* left */}
          <motion.div
            initial={{ x: -200, opacity: 0 }} // Start from left and hidden
            whileInView={{ x: 0, opacity: 1 }} // Animate to original position
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          className="w-full md:w-1/2 flex flex-col gap-8">
            <div className="bg-secondary shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold">Our Mission</h3>
              <p className="text-sm text-gray-400 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quo officiis, consequuntur repellat cupiditate dignissimos sunt facilis rerum reprehenderit unde? Nostrum quos labore unde repellendus alias aspernatur fuga totam nam.</p>
            </div>

            <div className="bg-secondary shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
              {
                ["Expert team with 5+ years experience"
                  ,"24/7 support and quick turnaround",
                  "Proven track record with top creators"
                ].map((item,index)=>(
                  <div key={index} className="flex mt-2 items-center gap-x-3 text-sm text-gray-400">
                    <FaStar className="text-orange-400"/>
                    <p>{item}</p>
                  </div>
                ))
              }
            </div>
            <div className="bg-secondary shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold">Our Mission</h3>
              <p className="text-sm text-gray-400 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quo officiis, consequuntur repellat cupiditate dignissimos sunt facilis rerum reprehenderit unde? Nostrum quos labore unde repellendus alias aspernatur fuga totam nam.</p>
            </div>
          </motion.div>

          {/* right */}
          <motion.div
           initial={{ x: 200, opacity: 0 }} // Start from left and hidden
            whileInView={{ x: 0, opacity: 1 }} // Animate to original position
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          className="w-full md:w-1/2 flex gap-6 justify-center">
            <div className="flex flex-col   gap-4 ">
              {
            [image1,image2,image3].map((image,index)=>(
              <div key={index} >
                  <img src={image} alt="" className="rounded-lg w-[304px] h-[171px] object-cover shadow" />
              </div>
            ))
          }
          </div>
           <div className="flex flex-col  gap-4 mt-12">
              {
            [image4,image5,image6].map((image,index)=>(
              <div key={index} >
                  <img src={image} alt="" className="rounded-lg w-[304px] h-[171px] object-cover shadow" />
              </div>
            ))
          }
          </div>
              
          </motion.div>

        </div>

        {/* featured section */}

        <div 
          ref={ref}
        className="flex flex-col md:flex-row gap-12  items-center justify-around  mt-44 overflow-x-hidden">

          <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
           >
            <FaRegCircleCheck size={24} className="text-orange-400"/>
            <h3 className="outline-text-gray text-9xl text-gray-800 font-semibold my-2 min-w-[250px]">{inView && <CountUp end={250} duration={2} />}</h3>
            <p className="text-lg uppercase text-gray-300">project</p>
          </motion.div>
          <motion.div 
           initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          >
            <FaRegCircleCheck size={24} className="text-orange-400"/>
            <h3 className="text-9xl font-semibold text-orange-400 my-2 min-w-[250px] ">{inView && <CountUp end={125} duration={2} />}</h3>
            <p className="text-lg uppercase text-gray-300">Clients</p>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
            <FaRegCircleCheck size={24} className="text-orange-400"/>
            <h3 className="outline-text-gray text-gray-400 text-9xl font-semibold my-2 min-w-[250px]">{inView && <CountUp end={20} duration={2} />}+</h3>
            <p className="text-lg uppercase text-gray-300">Exprets</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

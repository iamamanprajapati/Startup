import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

import {servicesDataDevelopment,mediaData} from "../assets/data"
import ServiceCard from "./ServiceCard";

const Services = () => {


    const [developmentData,setDevelopmentData] = useState([]);
    const[media,setMediaData] = useState([]);

    const [tab,setTab] = useState("Development");

    const fetchData = async()=>
    {
        setMediaData(mediaData);
        setDevelopmentData(servicesDataDevelopment);
    }

    useEffect(()=>{ 
        fetchData();
    },[tab])


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
          <h3 className="text-colortext text-sm md:text-xl">All Services</h3>
        </div>

        <div className="text-center">
          <p className="text-3xl md:text-5xl text-center font-semibold mt-4">
            Our Services
          </p>
          <p className="text-gray-300 text-center mx-auto mt-4 w-full md:w-1/2">
            Comprehensive Website Services to Ignite Your Online Success.
            Empower Your Business with Powerful Online Services from our
            Website.
          </p>
        </div>

        {/* cards sections  */}

        <div className="flex transition-all duration-300 gap-x-6 bg-secondary w-fit py-2 px-3 rounded-full text-sm my-16">
          <button
          onClick={()=>setTab("Development")}
          className={`transition-all duration-300 ${tab === "Development" ? "bg-colortext py-1 px-3 rounded-full" : "py-1 px-3 rounded-full"}`}>Development</button>
          <button 
            onClick={()=>setTab("Media")}
          className={`transition-all duration-300 ${tab === "Media" ? "bg-colortext py-1 px-3 rounded-full" : "py-1 px-3 rounded-full"}`}>Media</button>
        </div>

        <div className="grid px-2 transition-all duration-200 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-10">
            {
                tab === "Development" ? developmentData.map((item,index)=>(
                    <ServiceCard key={item.id} card={item}/>
                ))  : 
                 tab === "Media" && media.map((item,index)=>(
                    <ServiceCard key={item.id} card={item}/>
                )) 
            }
        </div>

      </div>

    </div>
  );
};

export default Services;

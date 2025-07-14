import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { processData } from "../assets/data";
import ProcessCard from "./ProcessCard";

const Proccess = () => {
  const [data, setData] = useState([]);

  const fetchProcessData = () => {
    setData(processData);
  };

  useEffect(() => {
    fetchProcessData();
  }, []);
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
          <h3 className="text-colortext text-sm md:text-xl">Process</h3>
        </div>
        <div className="text-center">
          <p className="text-3xl md:text-5xl text-center font-semibold mt-4">
            Our Process
          </p>
          <p className="text-gray-300 text-center mx-auto mt-4 w-full md:w-1/2">
            Comprehensive Website Services to Ignite Your Online Success.
            Empower Your Business with Powerful Online Services from our
            Website.
          </p>
        </div>

        {/* process card */}
        <div className="flex flex-col gap-12 mt-16">
          {data.map((item, index) => (
            <ProcessCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proccess;

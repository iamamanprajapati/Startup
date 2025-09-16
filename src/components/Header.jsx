import React from "react";
import headerImage from "../assets/headerImage.svg";
import home_banner from "../assets/main.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="w-full  bg-primary">
      <div className="relative max-w-7xl mx-auto  py-3 sm:py-7 px-6 text-white flex flex-col md:flex-row gap-8 justify-between md:items-center">
        <h1 className="z-10 uppercase text-5xl sm:text-7xl leading-14 sm:leading-18 md:text-[100px] lg:text-[125px] font-bold md:leading-30">
        BEST
          <motion.div
            initial={{ x: -400, opacity: 0 }} // Start from left and hidden
            animate={{ x: 0, opacity: 1 }} // Animate to original position
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="outline-text"
          >
            VIDEO
          </motion.div>
          PRODUCTION
          <motion.div
            initial={{ x: 400, opacity: 0 }} // Start from left and hidden
            animate={{ x: 0, opacity: 1 }} // Animate to original position
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="outline-text "
          >
            & EDITING
          </motion.div>
          SERVICES
        </h1>
        <div className="flex md:absolute  right-0 z-1 max-w-[400px]">
          <img src={headerImage} alt="Design image" />
        </div>
      </div>

      <div className="relative md:-mt-22 mt-10 md:pr-24 w-full z-6">
        <img
          src={home_banner}
          alt=""
          className="shadow-lg rounded z-5 w-full max-h-[700px]"
        />
        <motion.div
          className=" absolute -top-0 right-10 -z-10  md:w-[200px] md:h-[200px] blur-3xl rounded-full bg-button"
          animate={{
            y: [0, 300],
            x: [0, 15],
          }}
          transition={{
            y: {
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            x: {
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Header;

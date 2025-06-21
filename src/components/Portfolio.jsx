import React, { useState } from "react";
import { categories, protfolioData } from "../assets/data.js";
import ProtfolioCard from "./ProtfolioCard.jsx";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  return (
    <div className="bg-primary py-12">
      <div className="max-w-7xl mx-auto  sm:py-7 px-6 text-white">
        <div className="text-center">
          <p className="text-3xl md:text-5xl text-center font-semibold mt-4">
            Portfolio
          </p>
          <p className="text-gray-300 text-center mx-auto mt-4 w-full md:w-1/2">
            Discover our creative work, with top on the internet, From awarding
            website to stunning apps see how we bring ideas to life
          </p>
        </div>

        <div className="flex justify-center">
          <div className="flex transition-all duration-300 bg-secondary w-fit gap-x-4 py-2 px-3 rounded-full text-sm my-16">
            {categories.map((category) => (
              <button
                key={category.id}
                className={` ${
                  category.title === selectedCategory
                    ? "bg-colortext py-1 px-3 md:py-1 md:px-6 rounded-full text-white "
                    : "py-1 px-3 md:py-2 md:px-6 rounded-full text-gray-400"
                } transition-all duration-300 text-xs md:text-base`}
                onClick={() => setSelectedCategory(category.title)}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 place-items-center  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {protfolioData
            .filter((data) =>
              selectedCategory === "All Projects"
                ? true
                : data.category === selectedCategory
            )
            .map((data) => (
              <motion.div
                key={data.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ProtfolioCard data={data} />
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

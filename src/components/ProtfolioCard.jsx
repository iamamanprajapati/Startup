import React from "react";

const ProtfolioCard = ({ data }) => {
  return (
    <div className="bg-secondary rounded-2xl p-6 shadow-2xl group hover:bg-colortext transition-all duration-300 cursor-pointer" key={data.id}>
      <div className="text-center">
        <h3 className="text-sm md:text-base">{data.title}</h3>
        <p className="text-xs md:text-sm text-gray-600  group-hover:text-gray-200 mt-4">{data.description}</p>
        <div className="text-center py-6">
          <img src={data.icon} alt="" className=" mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default ProtfolioCard;

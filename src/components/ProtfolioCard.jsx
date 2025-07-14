import React from "react";

const ProtfolioCard = ({ data }) => {
  return (
    <div
      className="bg-secondary   rounded-2xl  shadow-2xl group hover:bg-colortext transition-all duration-300 cursor-pointer"
      key={data.id}
    >
      <div className="text-center ">
        <img
          src={data.image}
          alt=""
          className="rounded-xl min-h-[240px]  w-full hover:scale-105 transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default ProtfolioCard;

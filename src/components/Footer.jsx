import React from "react";
import { footerData } from "../assets/data";

const Footer = () => {
  return (
    <div className="bg-secondary py-12 border-t-[1px] border-secondary ">
      <div className="max-w-7xl mx-auto  sm:py-7 px-6 text-white">
        <div className="flex flex-col md:flex-row px-8 sm:px-0 justify-between gap-12  ">
          <div className="w-[300px] ">
            <p className="text-3xl">Logo</p>
            <p className="text-xs text-gray-600 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto temporibus culpa a adipisci, soluta ipsam repellat nostrum labore natus mollitia cupiditate nisi fuga quod libero unde ipsa repudiandae? Accusantium, totam?</p>
            
          </div>
          <div className="flex flex-1 flex-col sm:flex-row justify-around ">
            {
                footerData.map((data,index)=>(
                    <div key={index}>
                        <div>
                        <h2 className="mb-4 mt-6 sm:mt-0">
                             {data.title}
                        </h2>
                       
                        {data.items.map((item)=>(
                            <div>
                            <p></p>
                            <p className="text-sm text-gray-400 hover:underline cursor-pointer mt-1">{item}</p>

                            </div>
                        ))}
                        </div>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

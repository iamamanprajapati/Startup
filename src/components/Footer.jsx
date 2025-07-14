import React from "react";
import { footerData } from "../assets/data";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-secondary py-6 border-t-[1px] border-secondary rounded-tl-2xl rounded-tr-2xl ">
      <div className="max-w-7xl mx-auto  sm:py-7 px-6 text-white">
        <div className="flex flex-col md:flex-row px-8 sm:px-0 justify-between gap-12  ">
          <div className="w-[300px] ">
            <img src={logo} alt="" className="w-24" />
            <p className="text-sm text-gray-400 mt-3">
              We craft bold brand identities and develop scalable software
              solutions that help businesses grow, connect, and stand out in
              digital spaces.
            </p>
          </div>
          <div className="flex flex-1 flex-col sm:flex-row justify-around ">
            {footerData.map((data, index) => (
              <div key={index}>
                <div>
                  <h2 className="mb-4 mt-6 sm:mt-0">{data.title}</h2>

                  {data.items.map((item, index) => (
                    <div key={index}>
                      <p></p>
                      <p className="text-sm text-gray-400 hover:underline cursor-pointer mt-1">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-sm text-gray-500">
          Copyright © 2025. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

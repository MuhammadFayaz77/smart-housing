import React from "react";
import Image from "next/image";
import FastMarquee from "react-fast-marquee";

import { MarqueeArry } from "@/app/utils/marquee";

const Marquee = () => {
  return (
    <div className="w-full  overflow-hidden bg-[#FFFFFF] text-center">
      <h1 className="lg:p-12 p-6 text-[14px] text-[#808080]">
        Trusted by 100+ Companies across the globe!
      </h1>
       <FastMarquee >
      <div className="flex whitespace-nowrap ">
         
        {MarqueeArry.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center  gap-4 lg:mr-24  mr-16 pb-4 "
          >
            <Image
              src={item.image}
              width={150}
              height={150}
              alt="Sales Chart"
              className=""
            />
          </div>
        ))}
       
      </div>
 </FastMarquee>
    </div>
  );
};

export default Marquee;

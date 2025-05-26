import React from "react";
import Image from "next/image";

function Statistic() {
  return (
    <div className="w-full flex justify-center items-center bg-[#F0F4F5] py-12">
      <div className="w-[90%]  lg:gap-16 flex flex-col md:flex-row justify-center items-center ">
   
        <div className="w-full md:w-[60%] flex flex-col justify-start  bg-[#FFFFFF] rounded-3xl mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl py-5 px-4 md:px-9  text-black ">Sales Statistic</h1>
          <div className="px-4">
            <Image
              src="/Housing/Chart.svg"
              width={705}
              height={705}
              alt="Sales Chart"
              className="w-full md:w-auto"
            />
          </div>
        </div>

     
        <div className="w-full md:w-[35%] flex flex-col justify-start items-center bg-[#FFFFFF] rounded-3xl  text-center md:text-left px-6 lg:py-14">
          <div className="mb-4">
            <Image
              src="/Housing/Chart1.svg"
              width={405}
              height={405}
              alt="Chart Icon"
              className="mx-auto"
            />
          </div>
          <h1 className="text-xl md:text-2xl mb-2 lg:w-[90%] text-[#565656] font-semibold">Find Analytics and gain rapid access to it.</h1>
          <p className="text-sm md:text-base lg:w-[90%] text-[#8F8F8F] font-inter">
            A comprehensive set of solutions, called one platform, will be the first step in the digitalization of your company.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Statistic;

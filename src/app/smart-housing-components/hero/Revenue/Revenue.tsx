import React from "react";
import RevenuePro from "./RevenuePro";


function Deals() {
  return (
    <div className="bg-[#9BDCDF] w-full md:w-[60%] lg:w-[28%] rounded-2xl mx-auto md:mx-0">
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center py-6 w-full">
          <h1 className="pb-6 pt-6 text-[#787272] lg:mr-36 text-[20px] font-normal text-center">
          Top Revenue
          </h1>
          <RevenuePro />
        </div>
      </div>
    </div>
  );
}

export default Deals;
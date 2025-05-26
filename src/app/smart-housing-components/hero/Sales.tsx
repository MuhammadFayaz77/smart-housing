import React from "react";

export default function Sales() {
  return (
    <div className="bg-[#F0F4F5] pt-12 px-4">
      <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 ml-[5%]">
        <div>
          <p className="text-[#787272] text-sm sm:text-base font-light pb-2 sm:pb-4">
            Number of Sales
          </p>
          <h1 className="text-[#565656] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-2 sm:pb-4">
            $15,200
          </h1>
        </div>
        <div className="ml-[8%]">
          <p className="text-[#787272] text-sm sm:text-base font-light pb-2 sm:pb-4 ">
            Property Viewer
          </p>
          <h1 className="text-[#565656] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-2 sm:pb-4">
            47.3%
          </h1>
        </div>
      </div>
    </div>
  );
}

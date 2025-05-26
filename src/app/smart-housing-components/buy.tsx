import React from "react";
import Image from "next/image";

export default function Buy() {
  return (
    <div className="flex justify-center bg-[#F0F4F5] py-4 px-2">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[90%] gap-4">
        
      
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <h1 className="text-[#787272] text-sm md:text-base whitespace-nowrap">
            Monday, 19 August, 2024 |
          </h1>

       
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md">
            <Image src="/Housing/mynaui_filter.svg" width={20} height={20} alt="Filter Icon" />
          </div>

       
          <div className="flex bg-white p-2 rounded-full w-full md:w-auto items-center shadow-md">
            <Image src="/Housing/sir.svg" width={15} height={15} alt="Location Icon" />
            <input
              type="text"
              placeholder="Lahore Gulberg"
              className="outline-none placeholder:text-[12px] px-3 text-sm w-full md:w-auto"
            />
          </div>
        </div>

       
        <div className="flex bg-white px-2 py-1 rounded-full gap-2 shadow-md">
          <button className="flex items-center px-3 py-1 rounded-full text-sm text-black hover:bg-black hover:text-white transition">
            <Image src="/Housing/home.svg" width={12} height={12} alt="Buy" />
            <span className="px-2">Buy</span>
          </button>
          <button className="flex items-center px-3 py-1 rounded-full text-sm text-black hover:bg-black hover:text-white transition">
            <Image src="/Housing/home.svg" width={12} height={12} alt="Sell" />
            <span className="px-2">Sell</span>
          </button>
        </div>
      </div>
    </div>
  );
}

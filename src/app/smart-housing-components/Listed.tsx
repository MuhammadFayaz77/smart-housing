import React from 'react';

function Listed() {
  return (
    <div className="bg-[#F0F4F5] py-10 px-5">
      <div className=" flex flex-wrap items-center justify-between lg:w-[80%] ml-10 mx-auto gap-6">
        
       
        <div className="w-full md:w-1/2">
          <p className="text-[16px] text-[#0FB4BA] ">CHECKOUT OUR NEW</p>
          <h1 className="text-[26px] md:text-[32px] font-semibold text-gray-900">Latest Listed Properties</h1>
          <p className="text-[14px] md:text-[16px] text-[#808080] w-full md:w-[80%] ">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.
          </p>
        </div>

     
        <div className="flex  gap-3 justify-center md:justify-end w-full md:w-auto">
          <button className="p-2 px-6 rounded-full bg-[#FFFFFF] hover:bg-[#0FB4BA] border border-[#0FB4BA] text-[#0FB4BA] hover:text-white transition">
            All
          </button>
          <button className="p-2 px-5 rounded-full bg-[#FFFFFF] hover:bg-[#0FB4BA] border border-[#0FB4BA] text-[#0FB4BA] hover:text-white transition">
            Sell
          </button>
          <button className="p-2 px-5 rounded-full bg-[#FFFFFF] hover:bg-[#0FB4BA] border border-[#0FB4BA] text-[#0FB4BA] hover:text-white transition">
            Rent
          </button>
        </div>

      </div>
    </div>
  );
}

export default Listed;

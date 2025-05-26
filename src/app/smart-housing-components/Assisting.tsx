import React from 'react'
import Image from 'next/image'
function Assisting() {
  return (
    <div className=' justify-center flex justify-items-center bg-[#F0F4F5] pt-32'>
        <div className='w-[90%] lg:grid grid-cols-2 '>
<div className=''>
 <h1 className='text-[#0FB4BA] py-3'>WHO ARE WE</h1>
<h1 className='lg:text-5xl text-2xl lg:w-[100%]  font-semibold'>Assisting individuals in locating the appropriate real estate.</h1>
<p  className='w-[80%] text-[#808080]  lg:pt-3 text-[12px] lg:text-[16px]'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.</p>
<div className="lg:w-[70%] max-w-lg  flex flex-wrap md:flex-nowrap justify-center items-center rounded-2xl bg-white mt-6 mb-8 p-4 shadow-md">
  <div className="px-4 flex-shrink-0">
    <Image
      src="/Housing/Group1.svg"
      width={40}
      height={40}
      alt="Icon"
    />
  </div>
  <div className="flex flex-col justify-center items-start p-2 text-center md:text-left">
    <h1 className="font-semibold text-[#0FB4BA] text-lg md:text-xl">Donec porttitor euismod</h1>
    <p className="text-[#808080] text-sm md:text-base w-full md:w-[70%]">
      Nullam a lacinia ipsum, nec dignissim purus. Nulla
    </p>
  </div>
</div>
<div className="lg:w-[70%] max-w-lg border flex flex-wrap md:flex-nowrap justify-center items-center rounded-2xl bg-white mt-6 mb-8 p-4 shadow-md">
  <div className="px-4 flex-shrink-0">
    <Image
      src="/Housing/user.svg"
      width={40}
      height={40}
      alt="Icon"
    />
  </div>
  <div className="flex flex-col justify-center items-start p-2 text-center md:text-left">
    <h1 className="font-semibold text-[#0FB4BA] text-lg md:text-xl">Donec porttitor euismod</h1>
    <p className="text-[#808080] text-sm md:text-base w-full md:w-[70%]">
      Nullam a lacinia ipsum, nec dignissim purus. Nulla
    </p>
  </div>
</div>

</div>



<div className="flex flex-col md:flex-row gap-6 md:gap-8">
  {/* Left Large Image */}
  <div className="mt-10 md:mt-24 w-full md:w-auto">
    <Image
      src="/Housing/main.png"
      width={240}
      height={200}
      alt="Icon"
      className="w-full md:w-[240px] h-[470px] border object-cover rounded-[26px]"
    />
  </div>

  {/* Right Side Images */}
  <div className="mt-6 flex flex-col gap-6">
    <div>
      <Image
        src="/Housing/main2.png"
        width={300}
        height={200}
        alt="Icon"
        className="w-full md:w-[300px] h-[250px] border object-cover rounded-[26px]"
      />
    </div>
    <div>
      <Image
        src="/Housing/main1.png"
        width={300}
        height={200}
        alt="Icon"
        className="w-full md:w-[300px] h-[170px] border object-cover rounded-[26px]"
      />
    </div>
  </div>
</div>

           
        </div>
    </div>
  )
}

export default Assisting
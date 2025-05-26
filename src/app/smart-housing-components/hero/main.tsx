import React from 'react';
import Deals from './deals/Deals';
import Revenue from './Revenue/Revenue';
import Image from 'next/image';

function Main() {
  return (
    <div className='bg-[#F0F4F5] p-4 '>
      <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start ml-[5%] overflow-hidden'>
        <Deals />
        <Revenue />
      </div>
      <div className='flex justify-center md:justify-around mt-6'>
        <Image 
          src='/Housing/house.svg' 
          width={450} 
          height={400} 
          alt='Logo' 
          className='relative md:absolute md:bottom-0 md:-right-[0%]   ' 
        />
      </div>
    </div>
  );
}

export default Main;

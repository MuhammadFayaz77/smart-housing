import { PropertiesArry } from "@/app/utils/properties";
import Image from "next/image";
import React from "react";




const Property = () => {
  return (
    <div className="bg-[#F0F4F5]">
        <div className="ml-[5%] ">
        <p className="text-[#0FB4BA] font-sans leading-10 text-[20px]">AREAS  ACROSS THE TOWN</p>
        <h1 className="lg:text-5xl text-4xl font-semibold overflow-hidden py-2 text-black"> Neighborhood Properties</h1>
      </div>
      <div className="flex justify-center items-center bg-[#F0F4F5]">
    
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-[90%] gap-4 py-4 mb-16">
      {PropertiesArry.map((property) => (
        <div
          key={property.id}
          className={`relative rounded-[26px] overflow-hidden shadow-lg mt-9 ${
            property.id === 3 ? " lg:col-span-1 col-span-2 lg:w-[100%]" : 
            property.id === 1 || property.id === 2 ? "lg:col-span-1 col-span-2 md:w-[89%]" : 
            property.id === 4 ? "lg:w-[100%] lg:col-span-1 col-span-2   " : 
            property.id === 5 ? "lg:col-span-2 lg:w-[90%] col-span-2 lg:mx-[10%] w-full overflow-hidden " : ""
          }`}
        >
          <Image
          width={20}

height={20}          src={property.image}
            alt={property.city}
            className="w-full    object-cover bg-center  "
          />
          <div className="absolute   inset-0 p-4   flex flex-col justify-end  text-white">
            <h2 className="text-6xl px-4 font-bold ">{property.count}</h2>
            <p className="text-lg px-4 ">{property.city}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
    </div>
  );
};

export default Property;
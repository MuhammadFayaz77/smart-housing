"use client";

import Image from "next/image";

import FooterHousing from "./footerHousing";
import { footerHousingArry, footerHousingArry1 } from "@/app/utils/footer";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="bg-[#F5F9F9]  w-full p-8 ">
      <div className=" w-[80%] mx-auto">
        <form className="grid grid-cols-1 md:grid-cols-4 gap-8    ">
          <div className="">
            <Image
              src="\Housing\logo.svg"
              width={150}
              height={100}
              alt="LinkedIn Icon"
            />
            <p className="text-[14px] w-[70%] mt-5">
              2728 Hickory StreetSalt Lake City, UT 84104
            </p>
            <div className="flex pt-6">
              <Image
                src="\Housing\phone_.svg"
                width={20}
                height={20}
                alt="LinkedIn Icon"
              />
              <p className="text-[14px] px-3 p-3 ">+1 206-214-2298</p>
            </div>

            <div className=" flex w-full ">
              <Image
                src="\Housing\mail_.svg"
                width={20}
                height={20}
                alt="LinkedIn Icon"
              />
              <p className="text-[13px] px-3">support@Smart Housing.com</p>
            </div>
          </div>

          <div className="w-full">
            <h1 className="font-bold text-[#0B090A] text-lg md:text-xl  lg:mt-16 ">
              Quick Links
            </h1>
            <div className="flex flex-col w-full mt-5   gap-6">
              {footerHousingArry.map((items, index) => (
                <FooterHousing key={index} heading={items.heading} />
              ))}
            </div>
          </div>

          <div className="w-full">
            <h1 className="font-bold text-[#0B090A] text-lg md:text-xl lg:mt-16 ">
              Discovery
            </h1>
            <div className="flex flex-col w-full mt-5 gap-6">
              {footerHousingArry1.map((items, index) => (
                <FooterHousing key={index} heading={items.heading} />
              ))}
            </div>
          </div>

          <div className="w-full ">
            <h1 className="font-bold text-[#0B090A] text-lg md:text-xl lg:mt-16 pb-6  ">
              Subscribe to our Newsletter!
            </h1>
          <div className="flex relative ">
          <div className="flex bg-white p-3 rounded-full w-full md:w-auto items-center shadow-md ">
                    
                    <input
                      type="email"
                      placeholder="Email address"
                      className="outline-none placeholder:text-[12px] px-3 text-sm w-full md:w-auto"
                    />
                    
                  </div>
                  <Image src="/Housing/Arrow.svg" width={40} height={40} alt="Location Icon" className="bg-[#0FB4BA] p-3 rounded-full absolute  ml-[78%]  lg:ml-[83%]  top-[3px] " />
                 
          </div>

          <div className="py-7" >
          Follow Us on
          <div className="flex gap-4  md:mt-7">
              
              <FaLinkedin />

            <FaInstagram />
              <FaFacebook />
            </div>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;

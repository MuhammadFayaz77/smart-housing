"use client";

import React, { useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import StarRate from "@/app/utils/star";
import { testimonialsArry } from "@/app/utils/testimonial";
import Slider from "react-slick";


export default function TestimonialSlider() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // Custom arrows below
  };

  return (
    <div className="bg-[#F0F4F5] lg:py-16 pt-24">
      <div className="relative w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="w-full lg:w-[40%]">
          <h3 className="text-teal-500 uppercase lg:text-start text-center">Testimonials</h3>
          <h2 className="text-3xl font-bold mt-2  lg:text-start text-black  text-center">Look What Our Customers Say!</h2>
          <p className="text-gray-500 lg:mt-4  lg:text-start  text-center ">Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.</p>

          <div className="flex justify-center lg:justify-start gap-8 mt-5 lg:gap-6 lg:mt-6">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full border-teal-500 border transition text-teal-500"
            >
              <GoArrowRight />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full border-teal-500 border transition text-teal-500 "
            >
              <GoArrowLeft />
            </button>
          </div>
        </div>
        <div className="absolute -top-6 left-[47%] rounded-full ">   <Image
                    src="Housing/background.svg"
                    alt="Icon"
                    width={50}
                    height={50}
                     
                    /></div>

        <div className="w-full lg:w-[50%] relative bg-white p-6 rounded-xl ">
        
        <div className="absolute lg:top-[-120px] lg:right-[-120px]  rounded-full  ">
        <Image
                    src="Housing/background.svg"
                    alt="Icon"
                    width={100}
                    height={100}
                    />
        </div>

          <Slider ref={sliderRef} {...settings} className="relative ">
            {testimonialsArry.map((testimonial) => (
              <div key={testimonial.id} className=" bg-white  rounded-xl relative ">
                <div className="relative text-teal-500">
                  <Image
                    src="Housing/k.svg"
                    alt="Icon"
                    width={40}
                    height={40}
                    className="absolute mb-9 left-4 text-teal-500"
                  />
                </div>

                <p className="p-4 text-gray-700 text-lg mt-3">{testimonial.quote}</p>

                <div className="border-t my-4"></div>

                <div className="flex items-center gap-4 px-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="lg:flex lg:gap-16 ">
                    <h4 className="font-semibold ">{testimonial.name}</h4>
                    <div className=" gap-1 text-sm">
                      <StarRate  />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

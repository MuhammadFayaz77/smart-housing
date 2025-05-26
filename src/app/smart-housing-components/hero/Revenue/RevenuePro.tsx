"use client";
import React, { useState } from "react";

const RevenuePro = () => {
  const [progress, setProgress] = useState(0);

  const Clicked = (event: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX } = event;
    const { left, width } = currentTarget.getBoundingClientRect();
    setProgress(Math.round(((clientX - left) / width) * 100));
  };
  const mappedNumber = Math.round((progress / 9) * 1000);

  return (
    <div className="flex flex-col items-center justify-center w-[30%]">
      <div className="mt-4 -ml-[160%] text-[30px] lg:text-[40px]    lg:-ml-[165%] font-semibold text-[#565656] ">
        ${mappedNumber}k
      </div>
      <div className="relative flex items-center">
        <div
          className="lg:w-72 w-52 mx-auto sm:w-72 bg-[#FFFFFF] rounded-full h-2 "
          onClick={Clicked}
        >
          <div
            className="bg-[#6CA6FF] h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className=" absolute  bottom-3 left-[90%] text-[#787272]">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default RevenuePro;

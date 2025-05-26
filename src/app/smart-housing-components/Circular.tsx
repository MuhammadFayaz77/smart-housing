import React from "react";

const textArray = "Real Estate Since 2022 - Real Estate Since 2022 -".split("");

const CircularText = () => {
  return (
    <div>
      
      <div className="flex  items-center justify-center lg:absolute lg:left-[65%] lg:top-[246%]    ">
      <div className="relative  flex items-center justify-center animate-spin">
        {textArray.map((char, i) => (
          <span
            key={i}
            className="absolute text-[#0FB4BA] text-lg"
            style={{
              transform: `rotate(${i *7 }deg) translate(130px)`,
              transformOrigin: "center",
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CircularText;

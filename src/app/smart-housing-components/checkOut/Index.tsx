import { CheckOutArry } from "@/app/utils/CheckOut";
import CheckOutCard from "./checkOutCard";

import FastMarquee from "react-fast-marquee";
function CheckOut() {
  return (
    <div className="w-full flex justify-center items-center py-10 px-4 bg-[#F0F4F5]  ">
         <FastMarquee >
      <div className="flex gap-8   whitespace-nowrap">
        
          {CheckOutArry.map((items, index) => (
            <CheckOutCard
              key={index}
              view={items.view}
              price={items.price}
              categories={items.categories}
              image={items.image}
              icon={items.icon}
              bg={items.bg}
              bed={items.bed}
              bath={items.bath}
              address={items.address}
            />
          ))}
          </div>
         
          </FastMarquee>
    </div>
  );
}

export default CheckOut;

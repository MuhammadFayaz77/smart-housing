import { ServicesArry } from "@/app/utils/Services";
import ServicesCard from "./servicesCard";

function Services() {
  return (
    <div className="w-full flex justify-center items-center bg-[#C8E9EA] py-16 px-4">
      <div className="w-[90%] md:w-[80%] text-center">
        <p className="text-[#0FB4BA] text-sm md:text-base ">OUR SERVICES</p>
        <h1 className="text-2xl md:text-4xl font-bold p-4 md:p-6 mb-4 text-black">
          Until the porter,s merit is achieved.
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6  ">
          {ServicesArry.map((items, index) =>(
            <ServicesCard
              key={index}
              name={items.name}
              discription={items.discription}
              image={items.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

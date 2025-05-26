import Image from "next/image";

const ServicesCard = ({
  name,
  discription,
  image,
}: {
  image: string;
  discription: string;
  name: string;
}) => (
  <div className="rounded-[20px] border bg-[#FFFFFF] p-4 text-center shadow-lg lg:w-[80%] ">
    <div className="flex flex-col items-center mb-4 mt-6">
    <div className="bg-[#0FB4BA] shadow-[#0FB4BA] shadow-md p-3 rounded-full ">
    <Image
        src={image}
        width={30}
        height={30}
        alt=""
        className=" "
      />
    </div>
      <h1 className="text-base  text-black  mt-6 mb-2">{name}</h1>
      <p className="text-sm  w-[70%] text-[#808080]">{discription}</p>
    </div>
  </div>
);

export default ServicesCard;

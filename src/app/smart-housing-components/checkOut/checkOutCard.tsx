import Image from "next/image";

interface CheckOutCardProps {
  price: string;
  icon: string;
  bath: number;
  address: string;
  bed: number;
  view: string;
  image: string;
  bg?: string;
  categories: string;
}

const CheckOutCard = ({
  price,
  icon,
  bg,
  address,
  bed,
  view,
  image,
  categories,
}: CheckOutCardProps) => (
  <div>
    <div className="mb-4 relative  ">
      <div className={`absolute top-[80%] left-6 flex  px-4 rounded-full    text-[#FF1111]  p-1 gap-3 ${bg} `} >
        <Image
          src={icon}
          width={20}
          height={20}
          alt="Property Image"
          className={`${bg}`}
        />
        <button className={`${bg}`}>{categories}</button>
      </div>
      <Image
        src={image}
        width={300}
        height={200}
        alt="Property Image"
        className="rounded-lg "
      />
    </div>
    <div>
      <div className="text-2xl text-black  font-bold">$ {price}</div>
      <span className="font-semibold text-gray-700">{view}</span>
      <div className="text-[13px] text-[#808080] pt-2">{address}</div>
    </div>

    <div className="flex gap-10 pt-2">
      <div className="text-sm text-[#808080] ">
        <span className="flex gap-2">
          <Image
            src="Housing/bed1.svg"
            width={20}
            height={20}
            alt="Property Image"
            className=""
          />{" "}
          {bed} Beds
        </span>
      </div>
      <div className="text-sm text-[#808080] ">
        <span className="flex gap-2">
          <Image
            src="Housing/bathroom.svg"
            width={20}
            height={20}
            alt="Property Image"
            className=" "
          />{" "}
          {bed} Beds
        </span>
      </div>
    </div>
  </div>
);

export default CheckOutCard;

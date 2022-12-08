import Image from "next/image";
import { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";

export const Product = ({ item, offer = false }) => {
  const [off, setOff] = useState();
  useEffect(() => {
    setOff(Math.floor(Math.random() * 20));
  }, []);
  return (
    <div className="relative overflow-hidden h-[295px] w-[180px] md:h-[300px] md:w-[230px] lg:h-[350px] lg:w-[250px] bg_four m-2 rounded-md border-[1px] border-transparent flex justify-center items-center  flex-col  hover:border-main-clr transition-all duration-300 shadow-md">
      {/* offer */}
      {offer && (
        <div className="absolute left-0 top-[14px] h-10 w-24 bg-main-clr text-slate-200 flex justify-center items-center z-30 rounded-r-md uppercase">
          <span>{`${off}% off`}</span>
        </div>
      )}

      {/* image */}
      <div className=" relative h-[160px] w-[160px] md:h-[150px] md:w-[190px] lg:h-[200px] lg:w-[210px] rounded-md overflow-hidden cursor-pointer">
        <Image src={item?.image} alt="product" sizes="" layout="fill" />
      </div>
      {/* name */}
      <div className="mt-2 w-full px-5 capitalize text-main-clr font-semibold truncate">
        <span>{item.name}</span>
      </div>
      {/* bottom section price add cart */}
      <div className={` w-full px-5 flex justify-between items-center py-5`}>
        <div>
          <div className="w-full">
            <span
              className={`text-slate-400 ${
                offer
                  ? "relative before:absolute before:left-0 before:top-[43%] before:w-full before:h-[2px] before:bg-main-clr  opacity-50"
                  : ""
              }`}
            >
              $ {Math.floor(item?.price / 20)}
            </span>
          </div>
          {offer && (
            <div className="">
              {/* offer price  */}
              <span className="text-slate-400">
                $ {Math.floor(((item?.price / 10) * 39) / 100)}
              </span>
            </div>
          )}
        </div>
        {/* add to cart */}
        <div className="p-2 md:px-3 md:py-[6px] rounded-full md:rounded-sm bg-main-clr text-slate-100 cursor-pointer">
          <span className="text-sm hidden md:block">Add to cart</span>
          <span className="md:hidden">
            <BsCart3 />
          </span>
        </div>
      </div>
    </div>
  );
};

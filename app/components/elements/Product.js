import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";

export const Product = ({ item, offer = false, col = false }) => {
  const router = useRouter();
  const [off, setOff] = useState();
  const routing = (item) => {
    console.log("hii");

    router.push(`product/${item.id}`);
  };
  useEffect(() => {
    setOff(Math.floor(Math.random() * 20));
  }, []);
  return (
    <div
      className={` relative overflow-hidden   ${
        col
          ? "w-[100%] h-full"
          : "w-[195px] md:w-[245px] lg:w-[280px] h-[295px]  md:h-[300px]  lg:h-[370px]"
      } transition-all duration-300 shadow-md p-2`}
    >
      <div
        className={`relative py-4 bg_four rounded-md border-[1px] border-transparent flex justify-center items-center ${
          col ? "flex-row gap-20" : "flex-col"
        }   hover:border-main-clr`}
      >
        {/* offer */}
        {offer && (
          <div className="absolute left-0 top-[14px] h-10 w-24 bg-main-clr text-slate-200 flex justify-center items-center z-30 rounded-r-md uppercase">
            <span>{`${off}% off`}</span>
          </div>
        )}

        {/* image */}
        <Link href={`product/${item.id}`}>
          <div
            className=" relative h-[160px] w-[160px] md:h-[150px] md:w-[185px] lg:h-[200px] lg:w-[210px] rounded-md overflow-hidden cursor-pointer"
            onClick={() => routing(item)}
          >
            <Image src={item?.image} alt="product" layout="fill" />
          </div>
        </Link>
        {/* // ----------  details ---------- */}
        <div
          className={`flex flex-col items-start ${col ? "w-auto" : "w-full"}`}
        >
          {/* name */}
          <div className="mt-2 w-full px-5 capitalize text-main-clr font-semibold truncate">
            <span>{item.name}</span>
          </div>
          {/* bottom section price add cart */}
          <div
            className={` w-full px-5 flex gap-3  ${
              col ? "justify-start" : "justify-between"
            } items-center py-5`}
          >
            <div>
              <div className="w-full">
                <span
                  className={`text-slate-400 ${
                    offer
                      ? "relative before:absolute before:left-0 before:top-[43%] before:w-full before:h-[2px] before:bg-main-clr  opacity-50"
                      : ""
                  }`}
                >
                  $ {item?.price}
                </span>
              </div>
              {offer && (
                <div className="">
                  {/* offer price  */}
                  <span className="text-slate-400">
                    $ {item.price - Math.floor((item?.price / 100) * off)}
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
      </div>
    </div>
  );
};

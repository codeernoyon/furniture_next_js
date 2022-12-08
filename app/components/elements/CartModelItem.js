import Image from "next/image";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
const CartModelItem = () => {
  return (
    <div className="py-3 border-b-[1px] border-opacity-30 border-gray-500 flex space-x-3 justify-between items-center font-normal">
      {/* image */}
      <Image
        src="/assets/category/hanbag.webp"
        alt="photo"
        loading="lazy"
        height={60}
        width={60}
        className="rounded-md"
      />
      {/* item name */}
      <div className="text-sm text-slate-500 truncate w-[150px]">
        <span>Albany Sectional</span>
      </div>
      <div className="text-slate-300">
        <span>$50 (x1)</span>
      </div>
      {/* delete item */}
      <span className="text-main-clr cursor-pointer text-2xl">
        <AiFillDelete />
      </span>
    </div>
  );
};

export default CartModelItem;

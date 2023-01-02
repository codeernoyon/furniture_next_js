import Image from "next/legacy/image";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const CartProduct = () => {
  const [updateQuantity, setUpdateQuantity] = useState(1);

  // increment
  const increment = () => {
    setUpdateQuantity((prv) => prv + 1);
  };
  // decrement
  const decrement = () => {
    if (updateQuantity === 0) return;
    setUpdateQuantity((prv) => prv - 1);
  };
  return (
    <div
      className={`w-full flex items-center justify-between  px-5 py-2 rounded-md ${
        1 % 2 === 0 ? "bg_tow" : "bg_three"
      }`}
    >
      <div className="flex items-center gap-5 text-slate-300">
        <div className="relative w-20 h-20">
          <Image src={"/assets/category/bag.jpg"} layout="fill" />
        </div>
        {/* name title */}
        <span className="max-w-[300px]  truncate">
          jhfdfhadjs hadsbfasdfhja jsdhfdsdssddsfdxcdfsdsd xscd
        </span>
        <span className="text-slate-400 text-xl font-semibold w-[40px]">
          $60
        </span>
      </div>
      {/* counter */}
      <div className="bg_four bg-opacity-40 h-[50px] w-[100px] flex justify-center items-center text-slate-300">
        <span
          className="font-bold cursor-pointer h-full hover:text-main-clr bg_three flex justify-center items-center w-16"
          onClick={() => decrement()}
        >
          -
        </span>
        <input
          type="text"
          value={updateQuantity}
          onChange={(e) => e.target.value}
          className="h-6 w-10 bg-transparent text-center "
        />
        <span
          className="font-bold cursor-pointer h-full hover:text-main-clr bg_three flex justify-center items-center w-16"
          onClick={() => increment()}
        >
          +
        </span>
      </div>
      {/* totalamount */}
      <div className="text-slate-400 text-xl font-semibold w-[60px]">
        <span>{`$${updateQuantity * 60}`}</span>
      </div>
      {/* Delete*/}
      <span className="text-[30px] text-main-clr cursor-pointer">
        <AiFillDelete />
      </span>
    </div>
  );
};

export default CartProduct;

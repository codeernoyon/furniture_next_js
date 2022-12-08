import React from "react";
import Button from "../../utils/Button";
import CartModelItem from "../elements/CartModelItem";

const CartModel = ({ cartModelOpen }) => {
  return (
    <div
      className={`absolute flex flex-col bg top-0 ${
        cartModelOpen ? "right-0" : "right-[-100%]"
      } h-screen w-screen md:w-2/4 lg:w-2/6 bg-slate-500 z-[-2] pt-[120px] px-5 transition-all duration-700`}
    >
      {/* top title */}
      <span className="block  w-full text-center text-sm text-gray-400 border-b-[1px] border-neutral-400 border-opacity-10 pb-3">
        Your added cart items{" "}
      </span>
      {/* ----==== card items ====---- */}
      <div className="flex-1 h-auto overflow-y-auto scrollbar-hide scroll-smooth">
        <CartModelItem />
        <CartModelItem />
        <CartModelItem />
        <CartModelItem />
        <CartModelItem />
        <CartModelItem />
        <CartModelItem />
        <CartModelItem />
        <CartModelItem />
        <CartModelItem />
        <CartModelItem />
      </div>
      {/* button  */}
      <Button
        title="Checkout"
        dClass="py-5"
        className="bg-main-clr py-2 px-24 rounded-md "
      />
    </div>
  );
};

export default CartModel;

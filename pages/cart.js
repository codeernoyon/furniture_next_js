import React from "react";
import CartProduct from "../app/components/cart/CartProduct";
import Total from "../app/components/cart/Total";

const cart = () => {
  return (
    <div className="bg pt-[120px] px-5 w-full">
      <div className="flex w-full flex-col lg:flex-row">
        {/* product */}
        <div className="flex-1 flex flex-col gap-2">
          <CartProduct />
          <CartProduct />
        </div>
        {/* total checkout */}
        <div className="w-[35%]">
          <Total />
        </div>
      </div>
    </div>
  );
};

export default cart;

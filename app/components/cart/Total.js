import React, { useState } from "react";

const Total = () => {
  const [coupon, setCoupon] = useState();
  const [pPrice, setPPrice] = useState(500);
  const [shipping, setShipping] = useState(60);
  return (
    <div className="full px-5 ">
      <div className="text-slate-200 capitalize border-[1px] border-main-clr px-5 py-10 rounded-md">
        <span className="text-2xl font-semibold text-main-clr">cart total</span>
        <div className="font-[500] mt-2 border-t-[1px] border-main-clr pt-2">
          <span>product price: </span>
          <span className="text-main-clr">{`$${pPrice}`}</span>
        </div>

        <div className="mt-2">
          <span>shipping price: </span>
          <span className="text-main-clr">{`$${shipping}`}</span>
        </div>

        <div className="text-2xl mt-2 border-t-[1px] border-main-clr pt-2">
          <span>total price: </span>
          <span className="font-bold text-main-clr">{`$${
            pPrice + shipping
          }`}</span>
        </div>
      </div>
    </div>
  );
};

export default Total;

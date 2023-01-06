import React, { useState } from "react";

const Total = () => {
  const [coupon, setCoupon] = useState();
  const [pPrice, setPPrice] = useState(500);
  const [shipping, setShipping] = useState(60);
  return (
    <div className="full px-5 ">
      {/* promo  */}
      <div className="w-full">
        <h3 className="text-xl text-main-clr font-[500] capitalize">
          using a promo code!
        </h3>
        <div className="flex mt-2 rounded-md overflow-hidden">
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Coupon code"
            className="flex-1 h-full py-3 px-5 bg_tow text-slate-200"
          />
          <span className="w-[120px] py-3 text-center h-full bg-main-clr text-slate-300 cursor-pointer hover:text-slate-200">
            Apply
          </span>
        </div>
      </div>
      {/* details */}
      <div className="text-slate-200 mt-5 capitalize border-[1px] border-main-clr px-5 py-10 rounded-md">
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

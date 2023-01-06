import React from "react";
import { FormBtn } from "../shared/Form";

const PurchaseDetails = ({ placeOrder }) => {
  return (
    <div className="text-slate-200 flex-1 px-10 bg_four py-3">
      <span className="text-xl font-[500] mt-2">Your Orders</span>
      <div className="mt-2 pt-3 pb-8 border-b-[1px] border-main-clr">
        {/* products */}
        <div className="flex bg_tow px-5 py-3 rounded-md mt-2 ">
          {/* product name */}
          <div className="flex-1">
            <span>
              Apple Watch<span>(x2)</span>
            </span>
          </div>
          {/* price */}
          <span className="w-150px">$499</span>
        </div>
        <div className="flex bg_tow px-5 py-3 rounded-md mt-2">
          {/* product name */}
          <div className="flex-1">
            <span>
              Apple Watch<span>(x2)</span>
            </span>
          </div>
          {/* price */}
          <span className="w-150px">$499</span>
        </div>
        <div className="flex bg_tow px-5 py-3 rounded-md mt-2">
          {/* product name */}
          <div className="flex-1">
            <span>
              Apple Watch<span>(x2)</span>
            </span>
          </div>
          {/* price */}
          <span className="w-150px">$499</span>
        </div>
      </div>
      {/* price details */}
      <div className="py-5 px-5">
        <div className="flex w-full">
          <span className="flex-1">Subtotal price :</span>
          <span className="w-[80px] text-center">$500</span>
        </div>
        <div className="flex w-full mt-3 border-b-[1px] border-main-clr pb-5">
          <span className="flex-1">Shipping price :</span>{" "}
          <span className="w-[80px] text-center">$500</span>
        </div>
        {/* total */}
        <div className="flex w-full mt-2">
          <span className="flex-1">Total Price :</span>{" "}
          <span className="w-[80px] text-center text-main-clr font-bold">
            $500
          </span>
        </div>
      </div>
      {/* button */}
      <FormBtn
        title="Place Order"
        onClick={placeOrder}
        className="bg-main-clr w-full py-3"
      />
    </div>
  );
};

export default PurchaseDetails;

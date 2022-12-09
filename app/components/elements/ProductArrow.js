import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function ProductArrow({ className, rightArrow, leftArrow }) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <span
        className="px-1 py-3 bg-main-clr text-slate-100 rounded-l-md !cursor-pointer"
        onClick={rightArrow}
      >
        <AiOutlineLeft />
      </span>
      <span
        className="px-1 py-3 bg-main-clr text-slate-100 rounded-r-md  !cursor-pointer"
        onClick={leftArrow}
      >
        <AiOutlineRight />
      </span>
    </div>
  );
}

export default ProductArrow;

import React, { useRef, useState } from "react";
import ProductArrow from "../../elements/ProductArrow";
import { Product } from "./Product";

function LatestProduct({ products }) {
  const ref = useRef();
  const [transitionV, setTransitionV] = useState(0);

  const rightArrow = () => {
    if (transitionV < 0) {
      setTransitionV((prv) => prv + 200);
    } else {
      setTransitionV(0);
    }
  };
  const leftArrow = () => {
    const dWidth = ref?.current.offsetWidth;
    const sWidth = ref?.current.scrollWidth;
    if (sWidth - dWidth > -transitionV) {
      setTransitionV((prv) => prv - 200);
    } else {
      setTransitionV((prv) => prv - 0);
    }
  };
  return (
    <div className="py-5">
      {/* products top bar */}
      <div className="flex justify-between">
        {/* ========-- Product title --======== */}
        <div className="relative top-[0px] left-[0px] text-center ">
          <span className="absolute top-[28px] left-[53%]  bg-main-clr h-[2px] w-[130px]"></span>
          <span className="relative text-[35px] font-medium text-main-clr ">
            Latest Product
          </span>
        </div>
        {/* ---- icons ----- */}
        <ProductArrow rightArrow={rightArrow} leftArrow={leftArrow} />
      </div>
      {/* ------ Product ------- */}
      <div className="w-auto container m-auto overflow-x-hidden">
        <div
          ref={ref}
          className={`relative  left-0  flex pt-5 transition-all duration-700`}
          style={{
            transform: `translateX(${transitionV}px)`,
          }}
        >
          {/* ---------- item  ---------- */}
          {products?.map((item, index) => (
            <div key={index}>
              <Product item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestProduct;

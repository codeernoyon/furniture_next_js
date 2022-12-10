import Image from "next/image";
import React, { useRef, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { brand } from "../../data/brand";
import ProductArrow from "../../elements/ProductArrow";
function FeatureBrand({ products }) {
  const ref = useRef();
  const [transitionV, setTransitionV] = useState(0);

  const rightArrow = () => {
    let dWidth = ref?.current.offsetWidth;

    if (dWidth > 768) {
      if (transitionV < 0) {
        setTransitionV((prv) => prv + 350);
      } else {
        setTransitionV(0);
      }
    }
    if (dWidth < 768 && dWidth > 420) {
      if (transitionV < 0) {
        setTransitionV((prv) => prv + 239);
      } else {
        setTransitionV(0);
      }
    }
    if (dWidth < 420) {
      if (transitionV < 0) {
        setTransitionV((prv) => prv + 195);
      } else {
        setTransitionV(0);
      }
    }
  };
  const leftArrow = () => {
    let dWidth = ref?.current.offsetWidth;
    const sWidth = ref?.current.scrollWidth;
    // ----------  lg device ----------
    if (dWidth > 768) {
      dWidth = ref?.current.offsetWidth + 200;
      if (sWidth - dWidth > -transitionV) {
        setTransitionV((prv) => prv - 350);
      } else {
        setTransitionV((prv) => prv - 0);
      }
    }
    // ----------  mid device ----------
    if (dWidth < 768 && dWidth > 420) {
      dWidth = ref?.current.offsetWidth + 45;
      if (sWidth - dWidth > -transitionV) {
        setTransitionV((prv) => prv - 245);
      } else {
        setTransitionV((prv) => prv - 0);
      }
    }
    // ----------  small device ----------
    if (dWidth < 420) {
      dWidth = ref?.current.offsetWidth + 45;
      if (sWidth - dWidth > -transitionV) {
        setTransitionV((prv) => prv - 195);
      } else {
        setTransitionV((prv) => prv - 0);
      }
    }
  };
  return (
    <div className="py-5">
      {/* products top bar */}
      <div className="flex justify-between md:px-2 pr-2">
        {/* ========-- Product title --======== */}
        <div className="relative top-[0px] left-[0px] text-center flex-1 flex justify-start items-center space-x-5">
          <span className="absolute top-[50%] md:top-[28px] left-[15%] md:left-[10%]  bg-main-clr h-[2px] w-[130px]"></span>
          <span className="relative text-[20px] md:text-[35px] font-medium text-main-clr ">
            Featured Brands
          </span>
          <span className="flex space-x-1 items-center text-sm md:text-xl text-slate-500 cursor-pointer">
            All Brands <AiOutlineRight />
          </span>
        </div>
        {/* ---- icons ----- */}
        <ProductArrow rightArrow={rightArrow} leftArrow={leftArrow} />
      </div>
      {/* ------ Product ------- */}
      <div className="w-auto overflow-x-hidden">
        <div
          ref={ref}
          className={`relative flex justify-start items-center pt-5 transition-all duration-700`}
          style={{
            transform: `translateX(${transitionV}px)`,
          }}
        >
          {/* ---------- item  ---------- */}
          {brand?.map((item, index) => (
            <div key={index}>
              <div className="relative overflow-hidden h-[295px] w-[195px] md:h-[300px] md:w-[245px] lg:h-[370px] lg:w-[350px] transition-all duration-300 shadow-md p-2 group cursor-pointer bg">
                {/* image */}
                <div className="relative">
                  <Image src={item.img} width={350} height={200} />
                </div>
                {/* content */}
                <div className="flex flex-col pt-8">
                  <span className="text-slate-400">{item.title}</span>
                  <span className="font-semibold text-md text-slate-300 group-hover:text-main-clr">
                    {item.subTitle}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureBrand;

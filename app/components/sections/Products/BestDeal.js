import React, { useEffect, useRef, useState } from "react";
import ProductArrow from "../../elements/ProductArrow";
import { Product } from "./Product";

function BestDeal({ products }) {
  const ref = useRef();
  const [transitionV, setTransitionV] = useState(0);
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  const rightArrow = () => {
    let dWidth = ref?.current.offsetWidth;

    if (dWidth > 768) {
      if (transitionV < 0) {
        setTransitionV((prv) => prv + 280);
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
        setTransitionV((prv) => prv - 280);
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
      console.log(dWidth);
      dWidth = ref?.current.offsetWidth + 45;
      if (sWidth - dWidth > -transitionV) {
        setTransitionV((prv) => prv - 195);
      } else {
        setTransitionV((prv) => prv - 0);
      }
    }
  };
  // ----------  countdown ----------
  let interval;
  const startTimer = () => {
    const countDownDay = new Date("December 23, 2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      // ----------  distance days ----------
      const distance = countDownDay - now;

      const d = Math.floor(distance / (24 * 60 * 60 * 1000));
      const h = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const m = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const s = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // ----------  stop inter`vel ----------
        clearInterval(interval);
      } else {
        setDay(d);
        setHour(h);
        setMinute(m);
        setSecond(s);
      }
    });
  };
  useEffect(() => {
    startTimer();
  });
  return (
    <div className="relative py-5 flex w-full flex-col lg:flex-row justify-center items-center space-x-2">
      <div className="w-full lg:w-[60%]">
        {/* products top bar */}
        <div className="flex justify-between px-2">
          {/* ========-- Product title --======== */}
          <div className="relative top-[0px] left-[0px] flex justify-start items-start lg:items-center flex-col lg:flex-row lg:gap-10 flex-1">
            <span className="absolute top-[28px] left-[14%]  bg-main-clr h-[2px] w-[130px]"></span>
            <span className="relative text-[35px] font-medium text-main-clr ">
              Best Deal today
            </span>
            {/* ----- countdown ----- */}
            <div className="flex space-x-3 pl-0 lg:pl-5 text-slate-300 items-center mt-3">
              {/* day */}
              <span className="w-10 h-10 bg-main-clr rounded-md flex justify-center items-center">
                {day}
              </span>
              <span>:</span>
              {/* hour */}
              <span className="w-10 h-10 bg-main-clr rounded-md flex justify-center items-center">
                {hour}
              </span>
              <span>:</span>
              {/* minute */}
              <span className="w-10 h-10 bg-main-clr rounded-md flex justify-center items-center">
                {minute}
              </span>
              <span>:</span>
              {/* second */}
              <span className="w-10 h-10 bg-main-clr rounded-md flex justify-center items-center">
                {second}
              </span>
            </div>
          </div>
          {/* ---- icons ----- */}
          <ProductArrow rightArrow={rightArrow} leftArrow={leftArrow} />
        </div>
        {/* ------ Product ------- */}
        <div className="w-full overflow-x-hidden">
          <div
            ref={ref}
            className={`relative flex justify-start items-center pt-5 transition-all duration-700`}
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
      {/* right side */}
      <div className="px-3 w-[100%] lg:w-[40%] h-auto border-[1px]">hi</div>
    </div>
  );
}

export default BestDeal;

import React from "react";
import { setBackgroundImage } from "../../../utils/helper";
import { promo } from "../../data/promo";
const Promo = () => {
  return (
    <div className="w-full bg px-5 py-10">
      <div className="flex justify-between gap-3 md:gap-0 items-center flex-col md:flex-row">
        {promo?.map((item, index) => (
          <div
            key={index}
            className="w-[100%]  md:w-[32%] h-[300px] rounded-md px-5 pt-5 pb-8 flex flex-col justify-between"
            style={setBackgroundImage(item.img)}
          >
            {/* top */}
            <div>
              <h3 className="text-2xl w-[160px] font-semibold">{item.title}</h3>
              <span>{item.subTitle}</span>
            </div>
            {/* bottom */}
            <div>
              <span className="w-[100px]">{item.bottomText}</span>
              <div className="flex gap-3 items-center">
                <span className="text-xl font-semibold">{item.price}</span>
                <span className="relative opacity-50 mr-5 before:absolute before:w-full before:h-[2px] before:bg-black before:top-[45%] before:left-0">
                  {item.offerPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promo;

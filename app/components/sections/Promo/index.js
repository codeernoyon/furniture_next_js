import React from "react";
import { promo } from "../../data/promo";
const Promo = () => {
  return (
    <div className="w-full bg px-5 py-10">
      <div className="flex justify-between items-center">
        {promo?.map((item, index) => (
          <div
            key={index}
            className={`w-[32%] h-[250px]`}
            style={{ background: url(item?.img) }}
          >
            {/* top */}
            <div>hi</div>
            {/* bottom */}
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promo;

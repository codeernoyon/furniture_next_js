import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { service } from "../../data/service";
import BackStyle from "../../elements/BckStyle";

function Service() {
  const [width, setWidth] = useState(0);
  const scrollItem = useRef();

  useEffect(() => {
    setWidth(
      scrollItem.current.scrollWidth - scrollItem.current.offsetWidth + 2
    );
  }, [setWidth]);
  return (
    <motion.div
      ref={scrollItem}
      whileTap={{ cursor: "grabbing" }}
      className=" pb-4  relative w-auto cursor-grab lg:cursor-pointer"
    >
      <BackStyle />
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className=" m-auto relative w-auto space-x-3  flex flex-row z-[2] px-5 justify-start lg:justify-center py-3"
      >
        {service?.map((item, index) => (
          <div
            key={index}
            className="p-4 !min-w-[300px] !h-[200px] bg_tow flex justify-center items-center rounded-[5%] text-slate-400"
          >
            <div className="mr-6">
              <div className=" text-main-clr text-[50px]">{item.icon}</div>
            </div>
            <div>
              <span className="text-lg font-bold text-main-clr">
                {item.title}
              </span>
              <p className="mt-[10px]">{item.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Service;

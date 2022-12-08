import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { category } from "../../data/category";
import BackStyle from "../../elements/BckStyle";

const Category = () => {
  const [width, setWidth] = useState(0);

  const scrollItem = useRef();

  useEffect(() => {
    setWidth(
      scrollItem.current.scrollWidth - scrollItem.current.offsetWidth + 2
    );
  }, [setWidth]);
  return (
    <div className="relative w-screen h-auto">
      <BackStyle />
      <div className="relative container m-auto z-[3]">
        {/* ========-- Product title --======== */}
        <div className="relative top-[0px] left-[0px] text-start">
          <span className="absolute top-[20px] left-[13%]  bg-main-clr h-[2px] w-[80px]"></span>
          <span className="relative text-[25px] font-medium text-main-clr ">
            Category items
          </span>
        </div>
        {/* ------ Category item ------ */}
        <motion.div
          ref={scrollItem}
          whileTap={{ cursor: "grabbing" }}
          className=" w-screen mt-5 "
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex space-x-4"
          >
            {category?.map((item, index) => (
              <div
                key={index}
                className="h-[250px] min-w-[180px] bg_three rounded-md flex flex-col justify-center items-center space-y-5 cursor-pointer border-[1px] border-transparent shadow-md hover:border-main-clr "
              >
                <div className="">
                  <div className="rounded-md bg-slate-400 overflow-hidden  h-[120px] w-[120px]">
                    <Image
                      src={item?.image}
                      alt="categoryImage"
                      width={120}
                      height={120}
                    />
                  </div>
                </div>
                <div>
                  <span className="capitalize text-main-clr">
                    {item?.title}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Category;

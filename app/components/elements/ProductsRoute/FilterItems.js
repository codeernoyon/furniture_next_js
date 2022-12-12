import React from "react";

const FilterItems = ({ title, items }) => {
  return (
    <div className="pb-5">
      <span className="text-2xl text-main-clr font-[500]">{title}</span>
      <ul className="mt-5 ">
        {items?.map((item, index) => (
          <li
            key={index}
            className="py-2 border-[1px] border-main-clr text-center border-opacity-50 my-1 rounded-md text-slate-400 cursor-pointer hover:text-slate-200 hover:bg-main-clr transition-all duration-300 "
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterItems;

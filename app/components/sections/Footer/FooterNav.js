import React from "react";
import FooterRightTop from "./FooterRightTop";

const FooterNav = ({ title, items }) => {
  return (
    <div className="w-full h-full md:w-[100%] lg:w-[20%] bg_three px-5 py-16 rounded-sm text-slate-200">
      <FooterRightTop title={title} />
      <ul>
        {items?.map((item, index) => (
          <li
            className=" py-[7px] cursor-pointer hover:translate-x-2 hover:text-main-clr transition-all duration-300 "
            key={index}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNav;

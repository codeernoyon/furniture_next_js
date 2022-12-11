import React from "react";

const FooterRightTop = ({ title }) => {
  return (
    <div className="w-full">
      <span className="text-xl font-[500] text-slate-400">{title}</span>
      <div className="w-[100%] h-[3px] bg-slate-600 relative before:absolute before:w-[40%] before:h-full before:bg-main-clr mt-3 left-0"></div>
    </div>
  );
};

export default FooterRightTop;

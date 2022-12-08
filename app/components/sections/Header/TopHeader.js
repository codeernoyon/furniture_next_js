import React from "react";

const TopHeader = ({ topHeader, className }) => {
  return (
    <div
      className={`flex justify-between items-center text-[12px] pb-2 border_b space-x-12 md:space-x-0 px-3 ${className}`}
    >
      <div>
        <span>{topHeader.email} / </span>
        <span>{topHeader.number}</span>
      </div>
      <div>
        <span>{topHeader.open} - </span>
        <span>{topHeader.close}</span>
      </div>
    </div>
  );
};

export default TopHeader;

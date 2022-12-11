import React from "react";

const Button = ({ title, className, dClass, onClick }) => {
  return (
    <div className={`w-full flex justify-center items-center  ${dClass}`}>
      <button
        className={`${className} py-3 rounded-md text-slate-100 hover:shadow-md transition-all duration-300`}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;

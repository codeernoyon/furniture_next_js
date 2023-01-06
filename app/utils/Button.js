import React from "react";

const Button = ({ title, className, dClass, onClick }) => {
  return (
    <div className={`w-full flex justify-center items-center  ${dClass}`}>
      <button
        className={`${className} rounded-md text-slate-100 hover:shadow-md transition-all duration-300`}
        onClick={onClick}
        type="button"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;

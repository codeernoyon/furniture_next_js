import React from "react";

const Button = ({ title, className, dClass, onClick }) => {
  return (
    <div
      className={`w-full flex justify-center items-center py-3 bg-slate-800 ${dClass}`}
    >
      <button
        className={`${className} hover:shadow-md transition-all duration-300`}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;

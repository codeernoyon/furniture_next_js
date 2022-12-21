import React from "react";

const SingleProducts = ({ productsDetails, className }) => {
  const {
    name,
    description,
    category,
    price,
    reviews,
    stars,
    company,
    id,
    stock,
  } = productsDetails;
  return (
    <div>
      <div className={`${className} h-auto`}></div>
    </div>
  );
};

export default SingleProducts;

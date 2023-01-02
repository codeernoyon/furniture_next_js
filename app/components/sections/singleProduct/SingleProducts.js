import { useState } from "react";
import Button from "../../../utils/Button";
const SingleProducts = ({ productsDetails, className }) => {
  const [updateQuantity, setUpdateQuantity] = useState(0);
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
  // increment
  const increment = () => {
    if (updateQuantity >= stock) return;
    setUpdateQuantity((prv) => prv + 1);
  };
  // decrement
  const decrement = () => {
    if (updateQuantity === 0) return;
    setUpdateQuantity((prv) => prv - 1);
  };
  return (
    <div className="text-slate-400 md:pl-5 md:border-l-[1px] md:border-main-clr">
      <div className={`${className} h-auto`}>
        {/* product details */}
        <div className="pb-10 border-b-[1px] border-main-clr">
          <h3 className="text-xl font-semibold capitalize">{name}</h3>
          <span className="font[500] my-5">category: {category}</span>
          <p className="py-2">
            {stars}
            <span> ({reviews} customer review)</span>
          </p>
          <span className="py-5">
            Price: <span className="font-semibold text-main-clr">${price}</span>
          </span>
          <div className="w-[250px] bg_four border-[1px] border-main-clr my-3 rounded-md py-3 px-5">
            <span>
              availability:{" "}
              <span
                className={`${
                  stock === 0 ? "text-red-500" : "text-emerald-500"
                }`}
              >
                in stoke({stock})
              </span>
            </span>
          </div>
        </div>
        {/* cart */}
        <div className="py-5 border-b-[1px] border-main-clr">
          {/* quantity */}
          Quantity:
          <div className="mt-3 flex justify-start gap-5 w-full ">
            {/* counter */}
            <div className="bg_four bg-opacity-40 w-[100px] flex justify-center items-center">
              <span
                className="font-bold cursor-pointer h-full hover:text-main-clr bg_three flex justify-center items-center w-16"
                onClick={() => decrement()}
              >
                -
              </span>
              <input
                type="text"
                value={updateQuantity}
                className="h-6 w-10 bg-transparent text-center "
              />
              <span
                className="font-bold cursor-pointer h-full hover:text-main-clr bg_three flex justify-center items-center w-16"
                onClick={() => increment()}
              >
                +
              </span>
            </div>
            {/* button */}
            <Button
              title="Add Cart"
              dClass="w-auto"
              className="bg-main-clr py-3 px-16 rounded-md "
            />
          </div>
        </div>
        {/* description */}
        <div className="py-5">
          <span className="font-[500] text-xl">Description:</span>
          <p className="mt-2 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;

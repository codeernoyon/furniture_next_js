import { useRouter } from "next/router";
import React from "react";
import { GiCrossMark } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { selectOpen, setOpen } from "../../redux/slices/cartModelSlice";
import Button from "../../utils/Button";
import CartModelItem from "../elements/CartModelItem";
const CartModel = () => {
  const dispatch = useDispatch();
  const cartModelOpen = useSelector(selectOpen);
  const router = useRouter();
  const handleRoute = (path) => {
    dispatch(setOpen(false));
    router.push(path);
  };
  return (
    <div
      className={`absolute flex flex-col bg top-0 ${
        cartModelOpen ? "right-0" : "right-[-100%]"
      } h-screen w-screen md:w-2/4 lg:w-2/6 bg-slate-500 z-[-2] pt-[120px] px-5 transition-all duration-700`}
    >
      {/* top title */}
      <div className="flex justify-between items-center border-b-[1px] border-neutral-400 border-opacity-10 pb-3 text-gray-400">
        <span className="text-sm ">Your added cart items</span>
        <span className="font-semibold text-slate-300">$80.00</span>
        <span
          className="text-2xl hover:text-main-clr cursor-pointer transition-all duration-200"
          onClick={() => dispatch(setOpen(false))}
        >
          <GiCrossMark />
        </span>
      </div>
      {/* ----==== card items ====---- */}
      <div className="flex-1 h-auto overflow-y-auto scrollbar-hide scroll-smooth">
        <CartModelItem />
        <CartModelItem />
        <CartModelItem />
        <CartModelItem />
        <CartModelItem />
        <CartModelItem />
        <CartModelItem />
        <CartModelItem />
        <CartModelItem />
        <CartModelItem />
        <CartModelItem />
      </div>
      {/* button  */}
      <div className="flex flex-col gap-3 py-3">
        <Button
          title="Cart"
          dClass=""
          className="bg-main-clr py-3 px-16 rounded-md uppercase"
          onClick={() => handleRoute("cart")}
        />
        <Button
          title="Checkout"
          dClass=""
          className="bg-main-clr py-3 px-20 rounded-md "
          onClick={() => handleRoute("checkout")}
        />
      </div>
    </div>
  );
};

export default CartModel;

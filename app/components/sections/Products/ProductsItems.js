import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import * as Yup from "yup";
import { Product } from "../../elements/Product";
import ProductArrow from "../../elements/ProductArrow";
import { AppForm, FormBtn, FormInput } from "../../shared/Form";

function ProductsItems({
  countDown = false,
  title,
  products,
  discountFrom = false,
  offer,
}) {
  const router = useRouter();
  const ref = useRef();
  const [transitionV, setTransitionV] = useState(0);
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();
  // ----------  slider ----------
  const rightArrow = () => {
    let dWidth = ref?.current.offsetWidth;

    if (dWidth > 768) {
      if (transitionV < 0) {
        setTransitionV((prv) => prv + 280);
      } else {
        setTransitionV(0);
      }
    }
    if (dWidth < 768 && dWidth > 420) {
      if (transitionV < 0) {
        setTransitionV((prv) => prv + 239);
      } else {
        setTransitionV(0);
      }
    }
    if (dWidth < 420) {
      if (transitionV < 0) {
        setTransitionV((prv) => prv + 195);
      } else {
        setTransitionV(0);
      }
    }
  };
  const leftArrow = () => {
    let dWidth = ref?.current.offsetWidth;
    const sWidth = ref?.current.scrollWidth;
    // ----------  lg device ----------
    if (dWidth > 820) {
      dWidth = ref?.current.offsetWidth + 200;
      if (sWidth - dWidth > -transitionV) {
        setTransitionV((prv) => prv - 280);
      } else {
        setTransitionV((prv) => prv - 0);
      }
    }
    // ----------  mid device ----------
    if (dWidth < 820 && dWidth > 420) {
      dWidth = ref?.current.offsetWidth + 45;
      if (sWidth - dWidth > -transitionV) {
        setTransitionV((prv) => prv - 245);
      } else {
        setTransitionV((prv) => prv - 0);
      }
    }
    // ----------  small device ----------
    if (dWidth < 420) {
      console.log(dWidth);
      dWidth = ref?.current.offsetWidth + 45;
      if (sWidth - dWidth > -transitionV) {
        setTransitionV((prv) => prv - 195);
      } else {
        setTransitionV((prv) => prv - 0);
      }
    }
  };
  // ----------  countdown ----------
  let interval;
  const startTimer = () => {
    const countDownDay = new Date("December 23, 2023").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      // ----------  distance days ----------
      const distance = countDownDay - now;

      const d = Math.floor(distance / (24 * 60 * 60 * 1000));
      const h = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const m = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const s = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // ----------  stop inter`vel ----------
        clearInterval(interval);
      } else {
        setDay(d);
        setHour(h);
        setMinute(m);
        setSecond(s);
      }
    });
  };
  // ----------  validated schema ----------

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required()
      .label("Please enter Email"),
    password: Yup.string()
      .required()
      .min(8, "password should be 8")
      .label("Enter Password"),
  });
  // ----------  handle input ----------
  const handleInput = (values) => {
    console.log(values);
  };

  useEffect(() => {
    startTimer();
  });
  return (
    <div className="relative py-5 flex w-full flex-col lg:flex-row justify-center items-start gap-5 lg:gap-0 space-x-2">
      <div className={`${!discountFrom ? "w-full" : "lg:w-[80%]"}`}>
        {/* products top bar */}
        <div className="flex justify-between px-2">
          {/* ========-- Product title --======== */}
          <div className="relative top-[0px] left-[0px] flex justify-start items-start lg:items-center flex-col lg:flex-row lg:gap-10 flex-1">
            <span className="relative text-[25px] md:text-[35px] font-medium text-main-clr before:absolute before:h-[2px] before:w-[60%] before:bg-main-clr before:top-[50%] before:left-[50%] capitalize">
              {title}
            </span>

            {/* all products */}
            <Link href={"products"}>
              <span className="flex space-x-1 items-center text-xl text-slate-500 cursor-pointer">
                All Products <AiOutlineRight />
              </span>
            </Link>

            {/* ----- countdown ----- */}
            {countDown && (
              <div className="flex space-x-3 pl-0 lg:pl-5 text-slate-300 items-center mt-3">
                {/* day */}
                <span className="w-10 h-10 bg-main-clr rounded-md flex justify-center items-center">
                  {day}
                </span>
                <span>:</span>
                {/* hour */}
                <span className="w-10 h-10 bg-main-clr rounded-md flex justify-center items-center">
                  {hour}
                </span>
                <span>:</span>
                {/* minute */}
                <span className="w-10 h-10 bg-main-clr rounded-md flex justify-center items-center">
                  {minute}
                </span>
                <span>:</span>
                {/* second */}
                <span className="w-10 h-10 bg-main-clr rounded-md flex justify-center items-center">
                  {second}
                </span>
              </div>
            )}
          </div>

          {/* ---- icons ----- */}
          <ProductArrow rightArrow={rightArrow} leftArrow={leftArrow} />
        </div>
        {/* ------ Product ------- */}
        <div className="w-full overflow-x-hidden">
          <div
            ref={ref}
            className={`relative flex justify-start items-center pt-5 transition-all duration-700`}
            style={{
              transform: `translateX(${transitionV}px)`,
            }}
          >
            {/* ---------- item  ---------- */}
            {products?.map((item, index) => (
              <div key={index}>
                <Product item={item} offer={offer} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* right side */}
      {discountFrom && (
        <div className="w-[95%] lg:w-[20%] h-auto border-[1px] border-main-clr rounded-md px-3 md:px-10 lg:px3 flex justify-center lg:items-center flex-col  pb-16 py-10">
          <div className="flex flex-col items-start">
            <span className="text-3xl text-left text-slate-400 font-semibold">
              15% off
            </span>
            <span className="text-slate-500">
              For new member sign up at the first time
            </span>
          </div>
          <div className="mt-10 w-full">
            <AppForm
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleInput}
            >
              <FormInput name="email" placeholder="Enter email" />
              <FormInput
                name="password"
                placeholder="Enter Password"
                type="password"
              />
              <FormBtn
                title="Register"
                onClick={handleInput}
                className="w-full bg-main-clr py-3"
              />
            </AppForm>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsItems;

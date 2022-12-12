import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsCart3, BsPerson } from "react-icons/bs";
import { GiCrossedSwords } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { setOpen } from "../../../redux/slices/cartModelSlice";
import CartModel from "../../cart/CartModel";
import { HEADER } from "../../data";
import Search from "../../elements/Search";
import Nav from "./Nav";
import TopHeader from "./TopHeader";

function Header() {
  const [searchClick, setSearchClick] = useState(false);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  // ========-- data of header --===========
  const { topHeader, logo, menus } = HEADER;
  // ----------  Handle toggle ----------
  const handleToggle = () => {
    setToggle((prv) => !prv);
  };
  return (
    <header className="bg fixed !z-[999] w-screen  top-0 left-0 px-3 md:pl-10 md:pr-8 pt-2 pb-4 text-slate-50">
      {/* =========-- top header --============ */}
      <TopHeader topHeader={topHeader} />
      <div className=" flex justify-between items-center pt-2">
        {/*---------- Logo -------------*/}
        <div className="text-main-clr">
          <Link href="/">
            {logo.src ? (
              <div>
                <Image src={logo.src} layout="fill" />
              </div>
            ) : (
              <div>
                <h3 className="logo text-[35px] font-black ">{logo.alt}</h3>
              </div>
            )}
          </Link>
        </div>
        {/* =======-- Nav area --======== */}
        <Nav menus={menus} toggle={toggle} />
        {/* Icons */}
        <div className="flex flex-1 justify-center md:justify-end">
          {/* ======== search ======== */}
          <div className="mr-7 mt-2 text-[30px] cursor-pointer ">
            {/* ------- Search Area ------- */}
            <div
              className={`${
                searchClick
                  ? "absolute top-[0px] left-0 flex items-center justify-center  w-screen h-[150px] z-[1000] transition-all bg_tow"
                  : "absolute top-[-360px] left-[-80vw] flex items-center justify-center bg_tow w-screen h-[150px] z-[1000] transition-all"
              }`}
            >
              {/* search */}
              <Search
                className={`pt-2 pb-2 pl-5 pr-3 text-[15px] w-[250px] md:w-[400px] h-[50px] text-main-clr `}
              />
              <div className="relative top-[2px] w-[80px] h-[53px] bg flex items-center justify-center hover:text-main-clr">
                <BiSearchAlt className="" />
              </div>
              <GiCrossedSwords
                className="absolute top-[15px] lg:top-[20px]  right-[50px] hover:text-main-clr hover:rotate-[180deg] transition-all"
                onClick={() => setSearchClick(!searchClick)}
              />
            </div>
            <BiSearchAlt
              className="hover:text-main-clr"
              onClick={() => setSearchClick(!searchClick)}
            />
          </div>

          {/*  ============ Cart =========== */}
          <div
            className="relative p-2 rounded-[50%] border-[2px] mr-7 text-[20px] cursor-pointer hover:border-main-clr hover:text-main-clr"
            onClick={() => dispatch(setOpen(true))}
          >
            <span className="absolute top-[-15px] right-[-5px] text-[15px]">
              0
            </span>
            <BsCart3 />
          </div>
          {/*  ===========-- User --========== */}
          <div className="mr-7 relative top-[8px] text-[30px] cursor-pointer hover:text-main-clr">
            <BsPerson />
          </div>
        </div>
        {/* -----====== toggle button ----======= */}
        <div
          className={`flex justify-center items-start flex-col space-y-2  h-10 w-auto cursor-pointer overflow-hidden`}
          onClick={() => handleToggle()}
        >
          <div
            className={`relative ${
              toggle ? "w-10 rotate-45 top-[10px]" : "w-6"
            } h-1  rounded-full bg-main-clr transition-all duration-300 `}
          ></div>
          <div
            className={`relative ${
              toggle ? "left-[100%]" : "left-[0%]"
            } h-1 w-10 rounded-full bg-main-clr transition-all duration-300`}
          ></div>
          <div
            className={`relative ${
              toggle ? "w-10 rotate-[135deg] bottom-[14px]" : "w-9"
            } h-1 rounded-full bg-main-clr transition-all duration-300 `}
          ></div>
        </div>
      </div>
      {/* cart model */}
      <div>
        <CartModel />
      </div>
    </header>
  );
}

export default Header;

import Image from "next/image";
import React from "react";
import { FiPhoneCall, FiSend } from "react-icons/fi";
import { FooterN } from "../../data/footer";
import { Service } from "../../sections";
import FooterNav from "./FooterNav";
import FooterRightTop from "./FooterRightTop";
function Footer() {
  const { Information, Services } = FooterN;
  return (
    <footer className="pt-10 bg min-h-[50vh] lg:h-[50vh] ">
      <Service />
      <div className="h-full grid md:grid-cols-2 px-2 md:px-5 bg lg:flex justify-center items-center">
        <div className="w-full h-full pt-16 md:w-[100%] lg:w-[35%] bg_tow px-5 rounded-sm text-slate-200">
          <h2 className="text-4xl text-slate-400 font">Furniture</h2>
          <p className="mt-5 mb-2 w-[90%] text-sm">
            We are a team of designers and developers that create high quality
            Magento, Prestashop, Opencart.
          </p>
          {/* phone */}
          <div className="flex space-x-2 items-center mt-5">
            {/* icon */}
            <span className="text-5xl text-main-clr">
              <FiPhoneCall />
            </span>
            {/* number */}
            <div className="flex flex-col gap-1">
              <span className="text-md">Need help!</span>
              <span className="text-2xl">(+800) 345 678, (+800) 123 456</span>
            </div>
          </div>
          {/* bottom */}
          <span className="block mt-10">
            Powered By{" "}
            <a
              href="https://noyon-islam.netlify.app"
              className="hover:underline text-main-clr"
            >
              Plazathemes
            </a>
            . Organic 1 © 2022
          </span>
        </div>
        {/* right */}
        <FooterNav title={"Information"} items={Information} />
        <FooterNav title={"Customer Service"} items={Services} />
        <div className="w-full h-full md:w-[100%] lg:w-[35%] bg_three px-5 py-16 rounded-sm text-slate-200">
          <FooterRightTop title={"Join Our Newsletter"} />
          <div className="mt-4">
            <span className="!mt-3">Join with us with subscribe</span>
            <div className="w-full flex justify-center items-center rounded-full border-[2px] border-main-clr overflow-hidden mt-5">
              <input
                type="text"
                placeholder="Enter your email for subscribe"
                className="w-full py-3 px-3 bg-transparent text-main-clr"
              />
              <span className="w-[100px] py-[13px] bg-slate-600 cursor-pointer flex justify-center items-center text-2xl text-slate-400 hover:text-slate-300">
                <FiSend />
              </span>
            </div>
            <div className="mt-5">
              <span className="text-slate-400">Available</span>
              <div className="relative flex space-x-3 mt-3">
                <div className="bg-slate-400 w-[128px] rounded-[10px] flex justify-center items-center cursor-pointer">
                  <Image
                    src={"/assets/footer/apple_store.png"}
                    alt="image"
                    width={130}
                    height={50}
                  />
                </div>
                <div className="bg-slate-400 w-[128px] rounded-[10px] flex justify-center items-center cursor-pointer">
                  <Image
                    src={"/assets/footer/google_play.png"}
                    alt="image"
                    width={130}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* left */}
    </footer>
  );
}

export default Footer;

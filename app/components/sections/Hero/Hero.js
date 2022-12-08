import Image from "next/image";
import { useEffect, useState } from "react";
import { HERO } from "../../data/hero";
import BackStyle from "../../elements/BckStyle";

function Hero({ slides }) {
  // ======= Slider Animation Data ==========

  // =====------ React Hooks ------=============
  const [currentSlide, setCurrentSlide] = useState(0);

  // ======== Slider Data ==================
  const { slider } = HERO;
  let length = slides.length;
  const slideStart = false;
  let slideInterval;

  // ----------  next slide ----------
  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };
  // ----------  prv slide ----------
  const prvSlide = () => {
    console.log("prv");
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };
  // ----------  auto slide ----------
  const autoSlide = () => {
    slideInterval = setInterval(nextSlide, 5000);
  };
  useEffect(() => {
    setCurrentSlide(0);
  }, []);
  useEffect(() => {
    autoSlide();
    return () => clearInterval(slideInterval);
  }, [currentSlide]);
  return (
    <div className="relative h-screen w-screen flex justify-center items-center">
      <BackStyle />
      {/* ---- Arrows ------ */}
      {/* left */}
      <div
        onClick={() => prvSlide()}
        className="absolute top-[57%] md:top-[50%] left-5 h-5 w-auto group  cursor-pointer z-30"
      >
        <div className="relative h-[2px] w-16 bg-slate-400 before:absolute before:h-[2px] before:w-7 before:bg-slate-400 before:rotate-[35deg] before:left-[-2px] before:top-[8px] group-hover:bg-main-clr group-hover:before:bg-main-clr z-30"></div>
      </div>
      {/* right next slide */}
      <div
        onClick={() => nextSlide()}
        className="absolute top-[57%] md:top-[50%] right-10 h-5 w-auto group  cursor-pointer z-30"
      >
        <div className="relative h-[2px] w-16 bg-slate-400 before:absolute before:h-[2px] before:w-7 before:bg-slate-400 before:rotate-[35deg] before:right-[-2px] before:bottom-[8px] group-hover:bg-main-clr group-hover:before:bg-main-clr z-30"></div>
      </div>
      {/* ----- Slider ------ */}
      <div className="relative text-slate-400  container px-5 m-auto pb-5 min-h-screen w-screen pt-[200px] md:pt-[500px] lg:pt-[320px]">
        <div className="w-full h-full relative ">
          {slider?.map((slide, index) => (
            <div
              key={index}
              className={`absolute h-full w-full flex flex-col md:flex-row items-center  ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              } `}
            >
              {currentSlide === index && (
                // ----------  content ----------
                <>
                  <div className={`flex-1 pl-3 md:pl-10 `}>
                    <span
                      className={`relative block text-[20px]  font-semibold  ${
                        index === currentSlide ? "contentAnim" : "opacity-0"
                      }`}
                    >
                      {slide?.product}
                    </span>
                    <span
                      className={`block text-5xl mt-2 ${
                        index === currentSlide
                          ? "contentAnim delay1"
                          : "opacity-0"
                      }`}
                    >
                      {slide?.title}
                    </span>
                    <span
                      className={`block mt-3 md:[80%] lg:w-[60%] ${
                        index === currentSlide
                          ? "contentAnim delay2"
                          : "opacity-0"
                      }`}
                    >
                      {slide?.description}
                    </span>

                    <div
                      className={`relative left-10 mt-10 ${
                        index === currentSlide
                          ? "contentAnim delay3"
                          : "opacity-0"
                      }`}
                    >
                      <span className="relative text-sm text-zinc-400  before:absolute before:h-12 before:w-12 before:rounded-full before:border-l-2 before:border-t-2 before:border-b-2 before:border-slate-400 before:left-[-20%] before:top-[-65%] before:z-0 !z-10 cursor-pointer hover:text-slate-300 hover:before:border-slate-300">
                        View More
                      </span>
                    </div>
                  </div>
                  {/* ---------- image ---------- */}
                  <div className="flex-1 flex justify-center items-center">
                    <div
                      className={`relative h-[250px] w-[250px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px]  ${
                        index === currentSlide && "imageAnim"
                      }`}
                    >
                      <Image src={slide?.img} alt="photo" layout="fill" />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;

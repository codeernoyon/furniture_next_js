import { AiOutlineLeft, AiOutlinePicCenter } from "react-icons/ai";
import { BsColumnsGap } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProductNav,
  setProductNav,
} from "../../../redux/slices/productsSlice";
const TopBer = ({ handleCol, handleRow }) => {
  const navOpen = useSelector(selectProductNav);
  const dispatch = useDispatch();
  // ----------  handle nav open close ----------
  const handleNav = () => {
    dispatch(setProductNav(!navOpen));
  };
  return (
    <div>
      <div className="bg_four px-5 gap-5 py-4 capitalize flex flex-col items-start  lg:items-center">
        <div className="flex-1 flex gap-5 ">
          <div
            className="w-12 flex justify-center items-start px-2 flex-col bg-main-clr py-[5px] gap-[3px] rounded-md cursor-pointer lg:hidden"
            onClick={() => handleNav()}
          >
            {navOpen ? (
              <>
                <div
                  className={` relative top-[3px] h-1 w-[100%] bg-slate-300 rounded-full rotate-[45deg]`}
                ></div>
                <div
                  className={`relative bottom-[3px] h-1 w-[100%] bg-slate-300 rounded-full rotate-[135deg]`}
                ></div>
              </>
            ) : (
              <>
                <div className={`h-1 w-[60%] bg-slate-300 rounded-full`}></div>
                <div className={`h-1 w-[70%] bg-slate-300 rounded-full`}></div>
                <div className={`h-1 w-[90%] bg-slate-300 rounded-full `}></div>
                <div className={`h-1 w-[80%] bg-slate-300 rounded-full`}></div>
              </>
            )}
          </div>
          <span className="text-3xl text-slate-300 ">Products</span>
        </div>

        {/* short, view */}
        <div className="flex flex-col md:flex-row items-start gap-5 md:items-center md:space-x-10">
          {/* short */}
          <div className="flex items-center space-x-3 text-slate-300">
            <span>Short by: </span>
            <div className="flex items-center space-x-3 border-[1px] border-main-clr rounded-md px-5 py-2">
              <span>Default sorting </span>
              <span className=" -rotate-[90deg]">
                <AiOutlineLeft />
              </span>
            </div>
          </div>
          {/* view */}
          <div className="flex justify-center gap-5 items-start md:items-center md:space-x-2 text-slate-300 ">
            <span className="font-[500]">view:</span>
            <div className="flex items-center space-x-3 text-3xl">
              <span
                className="cursor-pointer hover:text-main-clr"
                onClick={() => handleRow()}
              >
                <BsColumnsGap />
              </span>
              <span
                className="cursor-pointer hover:text-main-clr"
                onClick={() => handleCol()}
              >
                <AiOutlinePicCenter />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBer;

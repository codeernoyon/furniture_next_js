import { AiOutlineLeft, AiOutlinePicCenter } from "react-icons/ai";
import { BsColumnsGap } from "react-icons/bs";
const TopBer = ({ handleCol, handleRow }) => {
  return (
    <div>
      <div className="bg_four px-5  py-4 capitalize flex items-center">
        <span className="text-3xl text-slate-300 flex-1">Products</span>
        {/* short, view */}
        <div className="flex items-center space-x-10">
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
          <div className="flex items-center space-x-2 text-slate-300">
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

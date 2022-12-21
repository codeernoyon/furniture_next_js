import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setFilerItem,
  setProductNav,
} from "../../../redux/slices/productsSlice";

const FilterItems = ({ title, items }) => {
  const [allProduct, setAllProduct] = useState();

  const dispatch = useDispatch();

  // ----------  handle filter products ----------
  const handleFilter = (itemTitle) => {
    dispatch(setProductNav(false));

    // ----------  filter with category ----------
    if (title === "catagories") {
      if (itemTitle === "all") {
        return dispatch(setFilerItem(allProduct));
      }
      const products = allProduct.filter(
        (item) => item?.category === itemTitle
      );
      dispatch(setFilerItem(products));
    }

    // ----------  filter with category ----------
    if (title === "price") {
      const products = allProduct.filter(
        (item) => item?.category === itemTitle
      );
      dispatch(setFilerItem(products));
    }

    // ----------  filter with company ----------
    if (title === "company") {
      const products = allProduct.filter((item) => item?.company === itemTitle);
      dispatch(setFilerItem(products));
    }
  };
  // ----------  allProducts ----------
  useEffect(() => {
    setAllProduct(JSON.parse(localStorage.getItem("allItem")));
  }, []);
  return (
    <div className="pb-5">
      <span className="text-2xl text-main-clr font-[500]">{title}</span>
      <ul className="mt-5 ">
        {items?.map((item, index) => (
          <li
            key={index}
            className="py-2 border-[1px] border-main-clr text-center border-opacity-50 my-1 rounded-md text-slate-400 cursor-pointer hover:text-slate-200 hover:bg-main-clr transition-all duration-300 "
            onClick={() => handleFilter(item?.title)}
          >
            {item?.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterItems;

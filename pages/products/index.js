import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { products } from "../../app/components/data/products";
import { Product } from "../../app/components/elements/Product";
import FilterItems from "../../app/components/elements/ProductsRoute/FilterItems";
import TopBer from "../../app/components/elements/ProductsRoute/TopBer";
import {
  selectFilterItem,
  selectProductNav,
} from "../../app/redux/slices/productsSlice";
const product = () => {
  const filterProducts = useSelector(selectFilterItem);
  const [col, setCol] = useState(false);
  const [allProduct, setAllProduct] = useState();
  const navOpen = useSelector(selectProductNav);

  const { catagories, price, company } = products;
  // ----------  handle col ----------
  const handleCol = () => {
    setCol(true);
  };
  // ----------  handle row ----------
  const handleRow = () => {
    setCol(false);
  };
  // ----------  allProducts ----------
  useEffect(() => {
    if (filterProducts === null) {
      setAllProduct(JSON.parse(localStorage.getItem("allItem")));
    } else {
      setAllProduct(filterProducts);
    }
  }, [filterProducts]);
  return (
    <div className="bg pt-[120px] pb-10 md:px-2 lg:px-5 lg:pr-10">
      {/* top ber */}
      <TopBer handleCol={handleCol} handleRow={handleRow} />
      <div className="relative flex h-[1100px] overflow-y-hidden">
        {/* left */}
        <div
          className={`absolute ${
            navOpen ? "left-0" : "left-[-100%]"
          } lg:left-0 lg:relative  w-[70%] md:w-[40%] lg:w-[17%]  text-slate-300 capitalize bg_tow px-3 py-5 pb-10 z-30 transition-all duration-300`}
        >
          {/* catagories */}
          <FilterItems title="catagories" items={catagories} />

          {/* price */}
          <FilterItems title="price" items={price} />

          {/* company */}
          <FilterItems title="company" items={company} />
        </div>
        {/* right */}
        <div className="lg:px-2 pt-2 flex-1 overflow-y-scroll scrollbar-hide">
          <div className="w-full flex justify-start flex-wrap scroll-smooth">
            {allProduct?.map((product, index) => (
              <div className={`${col && "w-[100%]"}`} key={index}>
                <Product item={product} col={col} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default product;

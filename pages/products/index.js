import React, { useEffect, useState } from "react";
import { products } from "../../app/components/data/products";
import { Product } from "../../app/components/elements/Product";
import FilterItems from "../../app/components/elements/ProductsRoute/FilterItems";
import TopBer from "../../app/components/elements/ProductsRoute/TopBer";
const product = () => {
  const [col, setCol] = useState(false);
  const [productsItems, setProductsItems] = useState();

  const { catagories, price, company } = products;
  // ----------  handle col ----------
  const handleCol = () => {
    setCol(true);
  };
  // ----------  handle row ----------
  const handleRow = () => {
    setCol(false);
  };
  useEffect(() => {
    setProductsItems(JSON.parse(localStorage.getItem("allItem")));
  }, []);
  return (
    <div className="bg pt-[120px] pb-10 px-5 pr-10">
      {/* top ber */}
      <TopBer handleCol={handleCol} handleRow={handleRow} />
      <div className="flex">
        {/* left */}
        <div className="w-[20%] text-slate-300 capitalize bg_tow px-3 py-5 pb-10">
          {/* catagories */}
          <FilterItems title="catagories" items={catagories} />

          {/* price */}
          <FilterItems title="price" items={price} />

          {/* company */}
          <FilterItems title="company" items={company} />
        </div>
        {/* right */}
        <div className="px-3 py-5 flex-1 ">
          <div className="w-full flex justify-center gap-5 flex-wrap">
            {productsItems?.map((product, index) => (
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

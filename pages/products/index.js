import React, { useState } from "react";
import { products } from "../../app/components/data/products";
import FilterItems from "../../app/components/elements/ProductsRoute/FilterItems";
import TopBer from "../../app/components/elements/ProductsRoute/TopBer";
const product = () => {
  const [col, setCol] = useState(true);
  const [row, setRow] = useState(false);
  const { catagories, price, company } = products;
  // ----------  handle col ----------
  const handleCol = () => {};
  // ----------  handle row ----------
  const handleRow = () => {};
  return (
    <div className="bg py-[120px] px-5 pr-10">
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
        <div className="px-3 py-5">right</div>
      </div>
    </div>
  );
};

export default product;

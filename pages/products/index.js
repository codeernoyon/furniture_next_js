import React, { useState } from "react";
import TopBer from "../../app/components/elements/ProductsRoute/TopBer";

const product = () => {
  const [col, setCol] = useState(true);
  const [row, setRow] = useState(false);

  // ----------  handle col ----------
  const handleCol = () => {};
  // ----------  handle row ----------
  const handleRow = () => {};
  return (
    <div className="bg py-[120px] px-5 pr-10">
      {/* top ber */}
      <TopBer handleCol={handleCol} handleRow={handleRow} />
      <div>
        {/* left */}
        <div className="w-[20%] bg-slate-500">hi</div>
        {/* right */}
        <div>right</div>
      </div>
    </div>
  );
};

export default product;

import axios from "axios";
import React, { useEffect, useState } from "react";
import BackStyle from "../../elements/BckStyle";
import Promo from "../Promo";
import BestDeal from "./BestDeal";
import Essential from "./Essential";
import FeatureBrand from "./FeatureBrand";
import LatestProduct from "./LatestProduct";
import OfferProduct from "./OfferProduct";

const Products = () => {
  const [all, setAll] = useState(null);
  const [office, setOffice] = useState(null);
  const [livingRoom, setLivingRoom] = useState(null);
  const [bedroom, setBedroom] = useState(null);
  const [kitchen, setKitchen] = useState(null);
  const [dining, setDining] = useState(null);

  //  reference element

  // ----------  Api data ---------
  useEffect(() => {
    const fetchData = async () => {
      const api = `https://course-api.com/react-store-products`;
      const { data } = await axios.get(api);
      setAll(data);
      data.map((product) => {
        if (product?.category === "office") {
          const office = data.filter((item) => item?.category === "office");
          setOffice(office);
        }
        if (product?.category === "living room") {
          const livingRoom = data.filter(
            (item) => item?.category === "living room"
          );
          setLivingRoom(livingRoom);
        }
        if (product?.category === "bedroom") {
          const bedroom = data.filter((item) => item?.category === "bedroom");
          setBedroom(bedroom);
        }
        if (product?.category === "kitchen") {
          const kitchen = data.filter((item) => item?.category === "kitchen");
          setKitchen(kitchen);
        }
        if (product?.category === "dining") {
          const dining = data.filter((item) => item?.category === "dining");
          setDining(dining);
        }
      });
    };
    fetchData();
  }, []);

  return (
    <div className="relative w-screen h-auto ">
      <BackStyle />
      <div className="relative z-[3] pt-10 md:px-5">
        <FeatureBrand />
        <BestDeal products={office} />
        <OfferProduct products={livingRoom} />
        <LatestProduct products={all} />
        <Promo />
        <Essential products={bedroom} />
      </div>
    </div>
  );
};

export default Products;

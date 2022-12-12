import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BackStyle from "../../elements/BckStyle";
import Promo from "../Promo";
import FeatureBrand from "./FeatureBrand";
import ProductsItems from "./ProductsItems";

const Products = () => {
  const [all, setAll] = useState(null);
  const [office, setOffice] = useState(null);
  const [livingRoom, setLivingRoom] = useState(null);
  const [bedroom, setBedroom] = useState(null);
  const [kitchen, setKitchen] = useState(null);
  const [dining, setDining] = useState(null);
  const dispatch = useDispatch();

  //  reference element

  // ----------  Api data ---------
  useEffect(() => {
    const fetchData = async () => {
      const api = `https://course-api.com/react-store-products`;
      const { data } = await axios.get(api);
      localStorage.setItem("allItem", JSON.stringify(data));
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
    <section className="relative w-screen h-auto ">
      <BackStyle />
      <div className="relative z-[3] pt-10 md:px-5">
        <FeatureBrand />
        <ProductsItems
          products={office}
          countDown
          title="brand Products"
          discountFrom
        />
        <ProductsItems products={office} offer title="Best offer for you" />
        <ProductsItems products={livingRoom} title="Latest Product" />
        <Promo />
        <ProductsItems products={kitchen} title="Essential Products" />
      </div>
    </section>
  );
};

export default Products;

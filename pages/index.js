import Head from "next/head";
import { HERO } from "../app/components/data/hero";
import { Hero, Service } from "../app/components/sections";
import Category from "../app/components/sections/Category/Category";
import Products from "../app/components/sections/Products/Products";
// import Promo from "../app/components/sections/Promo";

export default function Home() {
  const { slider } = HERO;

  return (
    <div className="m-auto overflow-hidden">
      <Head>
        <title> Furniture </title>
      </Head>
      <Hero slides={slider} />
      <Service />
      <Category />
      <Products />
      {/* <Promo /> */}
    </div>
  );
}

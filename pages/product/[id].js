import axios from "axios";
import LeftImage from "../../app/components/sections/singleProduct/LeftImage";
import SingleProducts from "../../app/components/sections/singleProduct/SingleProducts";

export async function getStaticPaths() {
  const api = `https://course-api.com/react-store-products`;
  const { data } = (await axios.get(api)) || {};
  const paths = data.map((product) => ({ params: { id: `${product?.id}` } }));
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const api = `https://course-api.com/react-store-single-product?id=${id}`;
  const product = await fetch(api).then((res) => res.json());
  return {
    props: {
      product: [product],
    },
    revalidate: 5,
  };
}

const SingleProduct = ({ product }) => {
  const {
    name,
    description,
    category,
    price,
    images,
    reviews,
    stars,
    company,
    id,
    stock,
  } = product[0];

  return (
    <div className="pt-[120px] px-5 bg w-screen">
      <div className="w-full flex flex-col md:flex-row gap-5 md:gap-0">
        {/* image */}
        <div className="flex-1">
          <LeftImage images={images} />
        </div>
        {/* product details */}
        <div className="flex-1">
          <SingleProducts productsDetails={product[0]} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

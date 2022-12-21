import axios from "axios";
import LeftImage from "../../app/components/sections/singleProduct/LeftImage";
import SingleProducts from "../../app/components/sections/singleProduct/SingleProducts";

export async function getStaticPaths() {
  const api = `https://course-api.com/react-store-products`;
  const { data } = (await axios.get(api)) || {};
  const paths = data.map((product) => ({ params: { id: `${product?.id}` } }));
  return {
    paths: paths,
    fallback: true,
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
    <div className="pt-[120px] px-5 bg">
      <div>
        {/* image */}
        <LeftImage images={images} />
        {/* product details */}
        <SingleProducts productsDetails={product[0]} />
      </div>
    </div>
  );
};

export default SingleProduct;

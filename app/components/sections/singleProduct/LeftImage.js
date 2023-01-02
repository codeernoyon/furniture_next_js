import Image from "next/legacy/image";
const LeftImage = ({ images }) => {
  const url = images[0].thumbnails.large.url;
  return (
    <div className="w-full  flex justify-center items-center">
      <div className="h-full w-[350px] py-7">
        <div className="relative w-[300px] h-[400px] rounded-md overflow-hidden cursor-pointer">
          <Image src={url} alt="product image" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default LeftImage;

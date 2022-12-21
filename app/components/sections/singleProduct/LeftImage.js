import Image from "next/image";
const LeftImage = ({ images }) => {
  const url = images[0].thumbnails.large.url;
  return (
    <div className="h-full w-full">
      <div className="relative w-20 h-20">
        <Image
          src={url}
          alt="product image"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
    </div>
  );
};

export default LeftImage;

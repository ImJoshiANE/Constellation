import Image from "next/image";
import { FC } from "react";
import { Button } from "../ui/button";
import ProductImg from "../../../../public/ProductImages/BiCycle.jpg";
import profileImg from "../../../../public/ProfileImages/profile.jpg";

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {}

const ProductCard: FC<ProductCardProps> = ({className, ...props }) => {
  const product = {
    title: "Bicycle 6 month old",
    price: 2000,
    image: ProductImg,
    seller: "Dheeraj Kumar",
    sellerImg: profileImg,
  };

  return (
    <div
      className={`flex flex-col items-start p-5 border border-solid border-purple-700 rounded-xl ${className} `}
    >
      <Image
        className=" rounded-lg "
        src={product.image}
        alt={`image of ${product.title}`}
        width={200}
        height={200}
      ></Image>

      <h3 className="mt-4 capitalize font-semibold">{product.title}</h3>
      <div className="flex flex-row mt-1">
        <Image
          className=" rounded-xl "
          src={product.sellerImg}
          alt={`image of ${product.title}`}
          width={22}
          height={22}
        ></Image>
        <h3 className="px-2 pt-[2px] capitalize text-xs">{product.seller}</h3>
      </div>
      <div className=" mt-8 flex flex-row items-center justify-between w-[100%]">
        <h3 className=" font-semibold"> ₹ {product.price} </h3>
        <Button className="bg-purple-700">See Details</Button>
      </div>
    </div>
  );
};

export default ProductCard;

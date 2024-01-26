import { FC } from "react";
import ProductCard from "./ProductCard";

interface ToPurchaseProps extends React.HTMLAttributes<HTMLDivElement> {}

const ToPurchase: FC<ToPurchaseProps> = ({className}) => {
  // const [products, setProducts] = useState();

  const products = [
    {
      name: "BiCycle 6 month old",
      price: "20/H",
      seller: "Dheeraj Kumar",
      category: "transport",
    },
    {
      name: "BiCycle 6 month old",
      price: "20/H",
      seller: "Dheeraj Kumar",
      category: "transport",
    },
    {
      name: "BiCycle 6 month old",
      price: "20/H",
      seller: "Dheeraj Kumar",
      category: "transport",
    },
    {
      name: "BiCycle 6 month old",
      price: "20/H",
      seller: "Dheeraj Kumar",
      category: "transport",
    },
  ];

  return (
    <div className={`mt-10  bg-[#1C1A24] rounded-xl ${className}`}>
      <h3 className=" capitalize text-xl font-bold p-5 pb-2 ">for purchase from students</h3>
      <div className=" flex items-center justify-center flex-wrap ">
        <ProductCard className=" mr-5 my-5 " />
        <ProductCard className=" mx-5 my-5 " />
        <ProductCard className=" my-5 ml-5 " />
      </div>
    </div>
  );
};

export default ToPurchase;

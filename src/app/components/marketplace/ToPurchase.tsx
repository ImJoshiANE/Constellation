import { FC } from "react";

interface ToPurchaseProps {}

const ToPurchase: FC<ToPurchaseProps> = ({}) => {
  // const [products, setProducts] = useState();

  const products = [
    {
      name: "BiCycle 6 month old",
      price: 2000,
      seller: "Dheeraj Kumar",
      category: "transport",
    },
    {
      name: "BiCycle 6 month old",
      price: 2000,
      seller: "Dheeraj Kumar",
      category: "transport",
    },
    {
      name: "BiCycle 6 month old",
      price: 2000,
      seller: "Dheeraj Kumar",
      category: "transport",
    },
    {
      name: "BiCycle 6 month old",
      price: 2000,
      seller: "Dheeraj Kumar",
      category: "transport",
    },
  ];

  return <div>ToPurchase</div>;
};

export default ToPurchase;

import { FC, useState } from "react";
import ToPurchase from "../components/marketplace/ToPurchase";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {

  return (
    <div className=" col-span-8">
      <div>
        <h2 className="text-xl mx-10 mt-10 font-bold">Buy or Rent what you need!</h2>
        <p className="mx-10 my-3 text-sm ">Unlocking the OLX for you canmpus National Institute of Technology Tiruchirapalli.</p>
      </div>
      <ToPurchase/>
    </div>
  );
};

export default Page;

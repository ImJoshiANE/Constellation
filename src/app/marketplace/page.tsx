import { FC, useState } from "react";
import ToPurchase from "../components/marketplace/ToPurchase";
import ToRent from "../components/marketplace/ToRent";
import { ScrollArea } from "../components/ui/scroll-area";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <ScrollArea className=" col-span-7 mx-10 mt-10 text-white ">
      <div>
        <h2 className="text-3xl font-bold">Buy or Rent what you need!</h2>
        <p className="my-3 text-md ">
          Unlocking the OLX for you campus National Institute of Technology
          Tiruchirapalli.
        </p>
      </div>
      <ToPurchase />
      <ToRent />
    </ScrollArea>
  );
};

export default Page;

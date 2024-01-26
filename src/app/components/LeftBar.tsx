import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsTwitterX, BsPersonBoundingBox } from "react-icons/bs";
import { FaPeopleGroup, FaRegBookmark } from "react-icons/fa6";
import { LuShoppingBasket } from "react-icons/lu";

export default function LeftBar() {
  return (
    <div className="col-span-2 bg-[#18181B]">
      <div className=" mt-10 ml-4">
        <div className="flex text-[#818181] font-semibold text-lg   my-5 ">
          <AiFillHome className="text-[#818181] text-2xl" />
          <h2 className="ml-3">Home</h2>
        </div>
        <div className="flex text-[#818181] font-semibold text-lg  my-5 ">
          <LuShoppingBasket className="text-[#818181] text-2xl" />
          <h2 className="ml-3">Market</h2>
        </div>

        <div className="flex text-[#818181] font-semibold text-lg  my-5">
          <BsPersonBoundingBox className="text-[#818181] text-2xl" />
          <h2 className="ml-3">Alumini</h2>
        </div>
        <div className="flex text-[#818181] font-semibold text-lg  my-5">
          <FaPeopleGroup className="text-[#818181] text-2xl" />
          <h2 className="ml-3">Community</h2>
        </div>
        <div className="flex text-[#818181] font-semibold text-lg  my-5">
          <FaRegBookmark className="text-[#818181] text-2xl" />
          <h2 className="ml-3">Saved</h2>
        </div>
      </div>
    </div>
  );
}

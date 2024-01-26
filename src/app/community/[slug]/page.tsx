import React from "react";
import { MdMessage } from "react-icons/md";
import { SiFiles } from "react-icons/si";
import { TfiAnnouncement } from "react-icons/tfi";

export default function page() {
  return (
    <div className="col-span-7 mt-20">
      <div className="content grid grid-cols-12 h-[649px]  ">
        <div className="messages col-start-2 h-32 col-span-9  "></div>
        <div className="col-span-2 ">
          <div className="flex gap-3 p-1">
            <MdMessage className="text-[#818181] text-xl my-3" />
            <span className="text-[#818181] my-2 font-bold "> Messages</span>
          </div>
          <div className="flex gap-3 p-1 ">
            <SiFiles className="text-[#818181] text-xl my-3" />
            <span className="text-[#818181] my-2 font-bold "> Files</span>
          </div>

          <div className="flex gap-3 p-1 ">
            <TfiAnnouncement className="text-[#818181] text-xl my-3" />
            <span className="text-[#818181] my-2 font-bold  ">Announce</span>
          </div>
        </div>
      </div>
    </div>
  );
}

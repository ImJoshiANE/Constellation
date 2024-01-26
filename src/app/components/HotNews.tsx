import React from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function HotNews() {
  return (
    <div>
      <div className="bg-[#18181B] rounded-lg p-3 mb-3">
        <div className=" w-full   flex gap-20 ">
          <div className="flex   gap-5">
            <Image
              src={"https://avatars.githubusercontent.com/u/53569547?v=4"}
              alt={"profile"}
              width={40}
              height={40}
              className="p-1 rounded-full border border-red-600"
            />
            <div className="flex-col">
              <h1 className="text-white font-medium">Jun 31 2020</h1>
              <p className="text-white text-xs font-thin ">
                Nit Trichy Hospital
              </p>
            </div>
          </div>
        </div>
        <div className="text-white font-sans text-lg mt-2 ml-3">
          <p>🩸Need O+ve Blood urgently pets are also accepted </p>
          <p className="text-gray-400 text-xs font-thin ">Starts at 8:00pm</p>
        </div>
      </div>
      <div className="bg-[#18181B] rounded-lg p-3 mb-3">
        <div className=" w-full   flex gap-20 ">
          <div className="flex   gap-5">
            <Image
              src={"https://avatars.githubusercontent.com/u/53569547?v=4"}
              alt={"profile"}
              width={40}
              height={40}
              className="p-1 rounded-full border border-red-600"
            />
            <div className="flex-col">
              <h1 className="text-white font-medium">Jun 31 2020</h1>
              <p className="text-white text-xs font-thin ">
                Nit Trichy Hospital
              </p>
            </div>
          </div>
        </div>
        <div className="text-white font-sans text-lg mt-2 ml-3">
          <p>🐍 Snake spotted near Jublee Hall</p>
          <p className="text-gray-400 text-xs font-thin ">Starts at 8:00pm</p>
        </div>
      </div>
    </div>
  );
}

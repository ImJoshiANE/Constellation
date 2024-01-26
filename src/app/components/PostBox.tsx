import React from "react";
import { FaFileImage } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { IoCameraSharp } from "react-icons/io5";

export default function PostBox() {
  return (
    <div className="grid grid-cols-12  mb-10 w-100 ">
      <div className="col-span-8 col-start-2 border border-x-0 border-t-0 border-b-1 border-slate-600  text-white ">
        <textarea
          placeholder="New Post"
          className="bg-transparent  w-full h-32 mb-0 pb-0"
          style={{ resize: "none" }}
        />
      </div>
      <div className="col-span-8 col-start-2  flex justify-between p-3">
        <div className="flex gap-3 text-xl text-[#8F8F90]">
          <FaFileImage />
          <IoCameraSharp />
        </div>
        <div className="text-xl text-white">
          <IoMdSend />
        </div>
      </div>
    </div>
  );
}

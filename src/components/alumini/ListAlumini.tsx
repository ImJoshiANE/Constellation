import React from "react";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
export default function ListAlumini() {
  return (
    <div className="grid grid-cols-12 mb-3">
      <Image
        src={"https://avatars.githubusercontent.com/u/53569547?v=4"}
        alt="znj"
        width={60}
        height={60}
        className="rounded-full col-span-2 ml-6 mt-2"
      />
      <div className="col-span-4 text-slate-200 ">
        <h1 className="font-semibold text-slate-500 text-md ">Sundar Pichai</h1>
        <p className="font-thin mt-1">
          Software Engineer at Google , ex Flipkart Empoyee,CEO of alphabet
        </p>
      </div>
      <div className="col-span-1 col-start-12 ">
        <FaTelegramPlane className="text-white text-2xl mt-5" />
      </div>
    </div>
  );
}

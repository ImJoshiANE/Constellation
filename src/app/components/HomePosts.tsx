"useclient";
import React from "react";
import Image from "next/image";
import { FaRegCommentAlt } from "react-icons/fa";
import { MdOutlineShare } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";
import { LuArrowBigDown, LuArrowBigUp } from "react-icons/lu";
import { PiArrowFatUpFill } from "react-icons/pi";
import { ScrollArea } from "../components/ui/scroll-area";
const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export default function HomePosts() {
  const scrollAreaHeight = `calc(100vh - 18rem)`;
  return (
    <ScrollArea
      className=" rounded-md  w-full"
      style={{ height: scrollAreaHeight }}
    >
      <div className="grid  grid-cols-12  mb-12 text-white  ">
        <div className="col-span-8 col-start-2  flex gap-2">
          <Image
            src="https://avatars.githubusercontent.com/u/53569547?v=4"
            alt="img"
            width={30}
            height={30}
            className="rounded-full"
          />

          <span className="font-thin  text-gray-200">
            tanmay958 . 3 hours ago
          </span>
        </div>
        <div className="col-span-8 col-start-2  mt-3">
          <h1>exciting prizes await jublee hall </h1>
        </div>
        <div className="col-span-7 col-start-2 mt-3">
          <Image
            src="https://pbs.twimg.com/media/FzToeteWAAEeBBr?format=jpg&name=4096x4096"
            alt=""
            height={100}
            width={100}
            className="w-fit h-fit rounded-lg"
          />
        </div>
        <div className="col-span-1  flex flex-col items-center justify-center">
          <PiArrowFatUpFill className="text-2xl text-[#593F9D]" />

          <span className="font-semibold text-slate-400"> 300</span>
          <LuArrowBigDown className="text-2xl" />
        </div>
        <div className="col-span-8  col-start-2 text-slate-500 text-sm flex gap-4 mt-2">
          <div className="flex ">
            <FaRegCommentAlt className="text-slate-500 text-lg" />
            <span className="ml-2">400 comments</span>
          </div>
          <div className="flex">
            <MdOutlineShare className="text-slate-500 text-lg" />
            <span className="ml-2">share</span>
          </div>
          <div className="flex">
            <FaRegBookmark className="text-slate-500 text-lg" />
            <span className="ml-2">save</span>
          </div>
        </div>
      </div>
      <div className="grid  grid-cols-12  mb-12 text-white ">
        <div className="col-span-8 col-start-2  flex gap-2">
          <Image
            src="https://avatars.githubusercontent.com/u/53569547?v=4"
            alt="img"
            width={30}
            height={30}
            className="rounded-full"
          />

          <span className="font-thin  text-gray-200">
            tanmay958 . 3 hours ago
          </span>
        </div>
        <div className="col-span-8 col-start-2  mt-3">
          <h1>exciting prizes await jublee hall </h1>
        </div>
        <div className="col-span-7 col-start-2 mt-3">
          <Image
            src="https://qph.cf2.quoracdn.net/main-qimg-7dfe6db8b4821f0959fb7c99c452795d-pjlq"
            alt=""
            height={100}
            width={100}
            className="w-fit h-fit rounded-lg"
          />
        </div>
        <div className="col-spam-1  flex flex-col items-center justify-center">
          <PiArrowFatUpFill className="text-2xl text-[#593F9D]" />

          <span className="font-semibold text-slate-400"> 300</span>
          <LuArrowBigDown className="text-2xl" />
        </div>
        <div className="col-span-8  col-start-2 text-slate-500 text-sm flex gap-4 mt-2">
          <div className="flex ">
            <FaRegCommentAlt className="text-slate-500 text-lg" />
            <span className="ml-2">400 comments</span>
          </div>
          <div className="flex">
            <MdOutlineShare className="text-slate-500 text-lg" />
            <span className="ml-2">share</span>
          </div>
          <div className="flex">
            <FaRegBookmark className="text-slate-500 text-lg" />
            <span className="ml-2">save</span>
          </div>
        </div>
      </div>
      <div className="grid  grid-cols-12  mb-12  text-white ">
        <div className="col-span-8 col-start-2  flex gap-2">
          <Image
            src="https://avatars.githubusercontent.com/u/53569547?v=4"
            alt="img"
            width={30}
            height={30}
            className="rounded-full"
          />

          <span className="font-thin  text-gray-200">
            tanmay958 . 3 hours ago
          </span>
        </div>
        <div className="col-span-7 col-start-2  mt-3">
          <h1>
            exciting prizes await jublee hall i am the beast tara r
            mmfkmkcljhvdbn dcsm gdbklfv vgbmds dvhubcm
            dsnvhs;csjkcvshbcmbdhvddmnhdsghdsna,abSJCSCAKJB
            KCDSBDC,BVASLASDKBHBASDK,HVDCSBVBDMD;SADBHSAN DSLMNNBSX{" "}
          </h1>
        </div>

        <div className="col-spam-1  flex flex-col items-center justify-center">
          <PiArrowFatUpFill className="text-2xl text-[#593F9D]" />

          <span className="font-semibold text-slate-400"> 300</span>
          <LuArrowBigDown className="text-2xl" />
        </div>
        <div className="col-span-8  col-start-2 text-slate-500 text-sm flex gap-4 mt-2">
          <div className="flex ">
            <FaRegCommentAlt className="text-slate-500 text-lg" />
            <span className="ml-2">400 comments</span>
          </div>
          <div className="flex">
            <MdOutlineShare className="text-slate-500 text-lg" />
            <span className="ml-2">share</span>
          </div>
          <div className="flex">
            <FaRegBookmark className="text-slate-500 text-lg" />
            <span className="ml-2">save</span>
          </div>
        </div>
      </div>{" "}
      */
    </ScrollArea>
  );
}

{
}
// </ScrollArea>
//   );
// }

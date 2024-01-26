import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import Image from "next/image";

export default function UserLoginIcons() {
  return (
    <div className="flex gap-4 justify-end m-5">
      <IoSettingsSharp className="text-slate-500 text-2xl" />
      <Image
        src={"https://avatars.githubusercontent.com/u/53569547?v=4"}
        alt="hy"
        width={30}
        height={30}
        className="rounded-full"
      />
    </div>
  );
}

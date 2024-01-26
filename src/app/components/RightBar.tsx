import React from "react";
import UserLoginIcons from "./UserLoginIcons";
import HotNews from "./HotNews";
import Poll from "./Poll";

export default function RightBar() {
  return (
    <div className="col-span-3">
      <UserLoginIcons />
      <HotNews />
      <Poll />
    </div>
  );
}

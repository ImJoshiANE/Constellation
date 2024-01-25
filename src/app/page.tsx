import React from "react";
import { IoSearch } from "react-icons/io5";

export default function HomePage() {
  return (
    <>
      <div className="col-span-8  outline-none">
        <textarea
          className="bg-transparent rounded-md ml-4 mt-2 outline-[#2E2C34]  border bottom-3 border-[#2E2C34]"
          name="searchBox"
          id="12"
          cols={45}
          rows={2}
          placeholder="Search"
          style={{
            resize: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
    </>
  );
}

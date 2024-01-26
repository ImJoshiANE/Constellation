import React from "react";
import HomePosts from "./components/HomePosts";
import PostBox from "./components/PostBox";
export default function HomePage() {
  return (
    <>
      <div className="col-span-8 border">
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
        <PostBox />
        <HomePosts />
      </div>
    </>
  );
}

import React from "react";
import AluminiCarousel from "../components/alumini/AluminiCarousel";

export default function page() {
  return (
    <div className="col-span-7">
      <div className="grid grid-cols-12">
        <div className="col-span-4 h-44">
          <AluminiCarousel />
        </div>
      </div>
    </div>
  );
}

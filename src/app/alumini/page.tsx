import React from "react";
import AluminiCarousel from "../../components/alumini/Carousel";
import ListAlumini from "../../components/alumini/ListAlumini";
import { ScrollArea } from "../components/ui/scroll-area";
export default function page() {
  return (
    <div className="col-span-7 mx-11 h-screen pt-3">
      <AluminiCarousel />
      <h1 className="text-white font-bold text-xl my-4 ml-4">Aluminis</h1>

      {/* <div className="rounded-lg  bg-[#18181B] overflow-scroll"> */}
      <ScrollArea className="h-[325px]  bg-[#18181B] rounded-lg mb-0 ml-4">
        <ListAlumini />
        <ListAlumini />
        <ListAlumini />
        <ListAlumini />
        <ListAlumini />
        <ListAlumini />
        <ListAlumini />
        <ListAlumini />
        <ListAlumini />
        <ListAlumini />
      </ScrollArea>
      {/* <ListAlumini /> */}
      {/* </div> */}
    </div>
  );
}

"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
const s =
  "https://images.thequint.com/thequint%2F2022-12%2Fb3222135-30b5-4f48-b93b-5c388596a933%2FWhatsApp_Image_2022_12_29_at_14_16_27.jpeg";

// import required modules
import { Navigation } from "swiper/modules";

export default function AluminiCarousel() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper rounded-lg"
      >
        <SwiperSlide>
          <Image
            src={s}
            alt="slider image"
            className="block h-full w-full object-cover"
            width={100}
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

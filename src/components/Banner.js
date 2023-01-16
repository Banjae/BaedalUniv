import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import "../styles/banner.css";

// Import required modules
import { Autoplay } from "swiper";

// Import Images
import Banner1 from "../assets/banner1.png";
import Banner2 from "../assets/banner2.png";
import Banner3 from "../assets/banner3.png";
import Banner4 from "../assets/banner4.png";
import Banner5 from "../assets/banner5.png";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="BannerSwiper">
          <img src={Banner1} alt="배너1" />
        </SwiperSlide>
        <SwiperSlide className="BannerSwiper">
          <img src={Banner2} alt="배너2" />
        </SwiperSlide>
        <SwiperSlide className="BannerSwiper">
          <img src={Banner3} alt="배너3" />
        </SwiperSlide>
        <SwiperSlide className="BannerSwiper">
          <img src={Banner4} alt="배너4" />
        </SwiperSlide>
        <SwiperSlide className="BannerSwiper">
          <img src={Banner5} alt="배너5" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;

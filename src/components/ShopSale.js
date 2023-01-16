import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import "../styles/shopSale.css";
// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// 임시 이미지
import food from "../assets/food.jpg";

const ShopSale = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        className="mySwiper"
      >
        <SwiperSlide className="SaleSwiper">
          <div className="sale">
            <span className="my-0 mx-auto">할인율</span>
          </div>
          <img src={food} alt="사진" />
          <div className="flex flex-col items-start m-2">
            <span className="font-semibold">상점이름</span>
            <div className="text-sm">
              <span className="text-yellow-500">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>평점</span>
              <span>(리뷰수)</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SaleSwiper">
          <div className="sale">
            <span className="my-0 mx-auto">할인율</span>
          </div>
          <img src={food} alt="사진" />
          <div className="flex flex-col items-start m-2">
            <span className="font-semibold">상점이름</span>
            <div className="text-sm">
              <span className="text-yellow-500">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>평점</span>
              <span>(리뷰수)</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SaleSwiper">
          <div className="sale">
            <span className="my-0 mx-auto">할인율</span>
          </div>
          <img src={food} alt="사진" />
          <div className="flex flex-col items-start m-2">
            <span className="font-semibold">상점이름</span>
            <div className="text-sm">
              <span className="text-yellow-500">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>평점</span>
              <span>(리뷰수)</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SaleSwiper">
          <div className="sale">
            <span className="my-0 mx-auto">할인율</span>
          </div>
          <img src={food} alt="사진" />
          <div className="flex flex-col items-start m-2">
            <span className="font-semibold">상점이름</span>
            <div className="text-sm">
              <span className="text-yellow-500">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>평점</span>
              <span>(리뷰수)</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SaleSwiper">
          <div className="sale">
            <span className="my-0 mx-auto">할인율</span>
          </div>
          <img src={food} alt="사진" />
          <div className="flex flex-col items-start m-2">
            <span className="font-semibold">상점이름</span>
            <div className="text-sm">
              <span className="text-yellow-500">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>평점</span>
              <span>(리뷰수)</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SaleSwiper">
          <div className="sale">
            <span className="my-0 mx-auto">할인율</span>
          </div>
          <img src={food} alt="사진" />
          <div className="flex flex-col items-start m-2">
            <span className="font-semibold">상점이름</span>
            <div className="text-sm">
              <span className="text-yellow-500">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>평점</span>
              <span>(리뷰수)</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ShopSale;

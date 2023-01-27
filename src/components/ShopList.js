import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import "../styles/shopList.css";

// tailwind-styled-component
import tw from "tailwind-styled-components";

// 임시 img
import brand from "../assets/brand.jpg";
import axios from "axios";

const ShopList = ({ utiSeq }) => {
  const [shopList, setShopList] = useState();

  const fetchData = async () => {
    axios
      .get("http://192.168.0.56:8888/list/store?utiSeq=" + utiSeq)
      .then((res) => {
        setShopList(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-around">
        <button>리뷰 많은 순</button>
        <button>별점 많은 순</button>
        <button>할인율 높은 순</button>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        className="mySwiper"
      >
        <SwiperSlide className="ListSwiper">
          <img src={brand} alt="img" />
          <span>재원닭집</span>
          <div className="flex justify-center">
            <span className="text-yellow-200">별점</span>
            <span>평점</span>
            <span>리뷰수</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ListSwiper">
          <img src={brand} alt="img" />
          <span>재원닭집</span>
          <div className="flex justify-center">
            <span className="text-yellow-200">별점</span>
            <span>평점</span>
            <span>리뷰수</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ListSwiper">
          <img src={brand} alt="img" />
          <span>재원닭집</span>
          <div className="flex justify-center">
            <span className="text-yellow-200">별점</span>
            <span>평점</span>
            <span>리뷰수</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ListSwiper">
          <img src={brand} alt="img" />
          <span>재원닭집</span>
          <div className="flex justify-center">
            <span className="text-yellow-200">별점</span>
            <span>평점</span>
            <span>리뷰수</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ListSwiper">
          <img src={brand} alt="img" />
          <span>재원닭집</span>
          <div className="flex justify-center">
            <span className="text-yellow-200">별점</span>
            <span>평점</span>
            <span>리뷰수</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ListSwiper">
          <img src={brand} alt="img" />
          <span>재원닭집</span>
          <div className="flex justify-center">
            <span className="text-yellow-200">별점</span>
            <span>평점</span>
            <span>리뷰수</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ListSwiper">
          <img src={brand} alt="img" />
          <span>재원닭집</span>
          <div className="flex justify-center">
            <span className="text-yellow-200">별점</span>
            <span>평점</span>
            <span>리뷰수</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ShopList;

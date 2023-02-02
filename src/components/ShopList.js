import React, { useEffect, useRef, useState } from "react";
import instance from "../api/axios";
import request from "../api/requset";
import { useNavigate } from "react-router";

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
import Loading from "./Loading";

const ShopList = ({ utiSeq }) => {
  const [shopList, setShopList] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = {
    utiSeq: utiSeq,
  };

  const fetchData = async () => {
    await instance
      .get(request.store, { params })
      .then((res) => {
        setShopList(res.data.list);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [utiSeq]);

  const navigate = useNavigate();

  const goToShop = (e) => {
    const storeNum = e.storeSeq;
    navigate(`/shop/${storeNum}`, { state: utiSeq });
  };

  return (
    <SLcontainer>
      {/* <div className="flex justify-around">
        <button>리뷰 많은 순</button>
        <button>별점 많은 순</button>
        <button>할인율 높은 순</button>
      </div> */}
      <SLtitle>상점</SLtitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        className="mySwiper"
      >
        {shopList.map((ele) => {
          console.log(ele);
          return ele.storeStatus === 1 ? (
            <SwiperSlide
              className="ListSwiper"
              onClick={(e) => goToShop(ele)}
              key={ele.storeSeq}
            >
              <img
                src={`http://192.168.0.56:8888/download/store/${ele.simgUriLogo}`}
                alt="img"
              />
              <span>{ele.storeName}</span>
              <div className="flex justify-center">
                <span className="text-yellow-200">별점</span>
                <span>평점</span>
                <span>리뷰수</span>
              </div>
            </SwiperSlide>
          ) : (
            <SwiperSlide
              className="ListSwiper pointer-events-none"
              onClick={(e) => goToShop(ele)}
              key={ele.storeSeq}
            >
              <NotWorking>
                <p>영업준비중</p>
              </NotWorking>
              <img
                src={`http://192.168.0.56:8888/download/store/${ele.simgUriLogo}`}
                alt="img"
              />
              <span>{ele.storeName}</span>
              <div className="flex justify-center">
                <span className="text-yellow-200">별점</span>
                <span>평점</span>
                <span>리뷰수</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* {loading && <Loading />} */}
    </SLcontainer>
  );
};

const SLcontainer = tw.div`
  mt-10
`;

const NotWorking = tw.div` 
  flex
  justify-center
  items-center
  h-full
  w-full
  absolute
  z-20
  top-0
  left-0
  bg-black
  opacity-70
  text-white
  text-3xl
`;

const SLtitle = tw.p`
text-2xl
my-2
`;

export default ShopList;

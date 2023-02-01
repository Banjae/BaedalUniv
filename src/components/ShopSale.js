import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import request from "../api/requset";
import instance from "../api/axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "../styles/shopSale.css";

// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// tailwind-styled-component
import tw from "tailwind-styled-components";

// 임시 이미지
import food from "../assets/food.jpg";
import Loading from "./Loading";

const ShopSale = ({ utiSeq }) => {
  const [shopSale, setShopSale] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = {
    utiSeq: utiSeq,
  };

  const fetchData = async () => {
    await instance
      .get(request.dcstore, { params })
      .then((res) => {
        setShopSale(res.data.list);
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
    <SScontainer>
      <SStitle>할인전</SStitle>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        className="mySwiper"
      >
        {shopSale.map((ele) => {
          return ele.storeStatus === 1 ? (
            <SwiperSlide
              className="SaleSwiper"
              onClick={(e) => goToShop(ele)}
              key={ele.storeSeq}
            >
              <>
                <div className="sale">
                  <span className="my-0 mx-auto">{ele.discount}%</span>
                </div>
                <img src={food} alt="사진" />
                <div className="flex flex-col items-start m-2">
                  <span className="font-semibold">{ele.storeName}</span>
                  <div className="text-sm">
                    <span className="text-yellow-500">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span>평점</span>
                    <span>(리뷰수)</span>
                  </div>
                </div>
              </>
            </SwiperSlide>
          ) : (
            <SwiperSlide
              className="SaleSwiper pointer-events-none"
              onClick={(e) => goToShop(ele)}
              key={ele.storeSeq}
            >
              <NotWorking>
                <p>영업준비중</p>
              </NotWorking>
              {/* <div className="off" /> */}
              <div className="sale">
                <span className="my-0 mx-auto">{ele.discount}%</span>
              </div>
              <img src={food} alt="사진" />
              <div className="flex flex-col items-start m-2">
                <span className="font-semibold">{ele.storeName}</span>
                <div className="text-sm">
                  <span className="text-yellow-500">
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span>평점</span>
                  <span>(리뷰수)</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* {loading && <Loading />} */}
    </SScontainer>
  );
};

const SScontainer = tw.div`
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

const SStitle = tw.p`
text-2xl
my-2
`;

export default ShopSale;

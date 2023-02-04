import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import request from "../api/requset";
import instance from "../api/axios";
import Loading from "./Loading";

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
    const scoreAvg = e.scoreAvg;
    navigate(`/shop/${storeNum}`, {
      state: { utiSeq: utiSeq, scoreAvg: scoreAvg },
    });
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
                  <strong className="my-0 mx-auto">{ele.discount}%</strong>
                </div>
                <img
                  src={`http://192.168.0.56:8888/download/store/${ele.simgUriLogo}`}
                  alt="img"
                />
                <div className="flex flex-col items-start m-2">
                  <span className="font-semibold">{ele.storeName}</span>
                  <div className="text-sm">
                    <span className="text-yellow-500">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="font-bold mx-1">{ele.scoreAvg}</span>
                    <span>({ele.reviewCount})</span>
                  </div>
                </div>
              </>
            </SwiperSlide>
          ) : (
            <SwiperSlide
              className="SaleSwiper pointer-events-none"
              key={ele.storeSeq}
            >
              <NotWorking>
                <p>영업준비중</p>
              </NotWorking>

              <div className="sale">
                <span className="my-0 mx-auto">{ele.discount}%</span>
              </div>
              <img
                src={`http://192.168.0.56:8888/download/store/${ele.simgUriLogo}`}
                alt="img"
              />
              <div className="flex flex-col items-start m-2">
                <span className="font-semibold">{ele.storeName}</span>
                <div className="text-sm">
                  <span className="text-yellow-500">
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span className="font-bold mx-1">{ele.scoreAvg}</span>
                  <span>({ele.reviewCount})</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {loading && <Loading />}
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

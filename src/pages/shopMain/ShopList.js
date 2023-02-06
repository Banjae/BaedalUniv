import React, { useEffect, useState } from "react";
import instance from "../../api/axios";
import request from "../../api/requset";
import { useNavigate } from "react-router";
import Loading from "../../components/Loading";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "../../styles/shopList.css";

// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// tailwind-styled-component
import tw from "tailwind-styled-components";

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
    const scoreAvg = e.scoreAvg;
    navigate(`/shop/${storeNum}`, {
      state: { utiSeq: utiSeq, scoreAvg: scoreAvg },
    });
  };

  const listReview = () => {
    const reListReview = [...shopList];
    reListReview.sort(function (a, b) {
      return b.reviewCount - a.reviewCount;
    });
    setShopList(reListReview);
  };

  const listAvg = () => {
    const reListAvg = [...shopList];
    reListAvg.sort(function (a, b) {
      return b.scoreAvg - a.scoreAvg;
    });
    setShopList(reListAvg);
  };

  return (
    <SLcontainer>
      <SLtitle>상점</SLtitle>
      <div className="flex justify-around my-3">
        <ListBt onClick={listReview}>리뷰 많은 순</ListBt>
        <ListBt onClick={listAvg}>별점 높은 순</ListBt>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        className="mySwiper"
      >
        {shopList.map((ele) => {
          return ele.storeStatus === 1 ? (
            <SwiperSlide
              className="ListSwiper"
              onClick={(e) => goToShop(ele)}
              key={ele.storeSeq}
            >
              <ShopImg
                src={`http://192.168.0.56:8888/download/store/${ele.simgUriLogo}`}
                alt="img"
              />
              <div className="w-full text-center text-xl font-bold">
                <span>{ele.storeName}</span>
              </div>
              <div className="flex justify-center">
                <span className="text-yellow-500">
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className="font-bold mx-1">{ele.scoreAvg}</span>
                <span>({ele.reviewCount})</span>
              </div>
            </SwiperSlide>
          ) : (
            <SwiperSlide
              className="ListSwiper pointer-events-none"
              key={ele.storeSeq}
            >
              <NotWorking>
                <p>영업준비중</p>
              </NotWorking>
              <ShopImg
                src={`http://192.168.0.56:8888/download/store/${ele.simgUriLogo}`}
                alt="img"
              />
              <div className="w-full text-center">
                <span>{ele.storeName}</span>
              </div>
              <div className="flex justify-center">
                <span className="text-yellow-500">
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className="font-bold mx-1">{ele.scoreAvg}</span>
                <span>({ele.reviewCount})</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {loading && <Loading />}
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

const ShopImg = tw.img`
  rounded-[50px]
`;

const ListBt = tw.button`
  bg-main 
  text-white 
  text-md 
  w-1/6 
  h-10 
  rounded-lg 
  my-1
`;

export default ShopList;

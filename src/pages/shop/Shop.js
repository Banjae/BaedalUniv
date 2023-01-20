// shop Detail page
import React, { useState } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import ShopInfo from "./ShopInfo";
import ShopMenu from "./ShopMenu";
import ShopReview from "./ShopReview";
import Arrow from "../../assets/ic_list_d_arrow.png";

import { RxDividerVertical } from "react-icons/rx";

import DetailStarRating from "./DetailStarRating";

// tailwind-styled-component
import tw from "tailwind-styled-components";

// FontAwesome Icon 적용
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

// 임시 이미지
import food from "../../assets/food.jpg";
import OrderTable from "../../components/OrderTable";

const Detail = () => {
  const detailArr = [
    { title: "메뉴", link: "/shop/menu" },
    { title: "정보", link: "/shop/info" },
    { title: "리뷰", link: "/shop/review" },
  ];

  const [click, setClick] = useState();

  const shopClickFunc = (index) => {
    setClick(index);
  };

  return (
    <>
      <ShopContainer>
        <div>
          <img src={food} alt="img" className="w-10 h-10" />
        </div>
      </div>

      <div className="flex-col text-center">
        <h2 className="text-2xl tracking-wide">한솥도시락</h2>
        <div className="flex justify-center items-center py-5">
          <div className="flex items-center  px-8">
            <DetailStarRating starRatio={4.6} />
            <p className="text-2xl pl-2">4.6</p>
          </div>
        </div>
        <div>
          <span className="block text-sm ">
            최소주문금액{" "}
            <span className="line-through decoration-orange-600">5,000원</span>{" "}
            0원
            {/* <FontAwesomeIcon
              icon={faArrowRightLong}
              className="absolute top-1 right-7 text-red-600 text" /> */}
          </span>

          <span className="text-sm">
            배달비
            <span className="line-through decoration-orange-600">
              4,000원
            </span>{" "}
            0원
          </span>
        </div>
        <div className="flex justify-center text-2xl tracking-wide mb-2">
          주문마감 16:40
          <RxDividerVertical style={{ marginTop: "4px" }} /> 음식수령 18:10
        </div>
        {/* 나중에  링크로 이동시켜줘야함 */}
        {/* <div></div> 를 <Link to="/"></Link> 수정*/}
        <div>
          <div className="flex justify-center">
            <div className="flex justify-center w-[20%] bg-gray-200 rounded-xl p-2 ">
              <span className="truncate block">
                <strong>사장님알림</strong>☆ 전체부분 맛집랭킹 1위 항상
                사랑해주시는 고객님들께 감사드리며 매일 더 노력하는 멘부리가
                되겠습니다☆ ☆리뷰약속이벤트☆ 리뷰약속이벤트는 요청사항 기재가
                아닌 메뉴란에서 선택 부탁드립니다. ☆음식에 문제가 있거나
                궁금하신 점은 언제든지 가게로 연락주세요. #정직하게 #양심있게
                #맛있게
              </span>
              <button className="w-6 h-6 ml-2">
                <img src={Arrow} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Link to="/order">주문하기</Link>

      <OrderTable />

      <ShopUl className="flex justify-center gap-36">
        <li>
          <Link to="/shop/menu">메뉴</Link>

        </li>
        <li>
          <Link to="/shop/review" onClick={shopClickFunc}>
            리뷰
          </Link>
        </li>
        <li>
          <Link to="/shop/info" onClick={shopClickFunc}>
            정보
          </Link>
        </li> */}
        <div className="bg-white flex justify-center w-full">
          <Routes>
            <Route path="info" element={<ShopInfo />} />
            <Route path="menu" element={<ShopMenu />} />
            <Route path="review" element={<ShopReview />} />
          </Routes>
        </div>
      </ShopContainer>
    </>
  );
};

const ShopContainer = tw.div`
  w-4/5
  my-0
  mx-auto
`;

const ShopUl = tw.div`
  flex
  justify-around
  items-center
  mt-3  
`;

const OnBox = tw.div`
  w-1/3
  h-10
  flex
  justify-center
  items-center  
  border-t-2
  border-t-main
  border-b-2
  border-b-white 
  bg-white
`;

const OffBox = tw.div`
  w-1/3
  h-10
  flex
  justify-center
  items-center
  border-t-2
  border-white
  bg-white
`;

export default Detail;

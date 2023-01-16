// shop Detail page
import React from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import ShopInfo from "./ShopInfo";
import ShopMenu from "./ShopMenu";
import ShopReview from "./ShopReview";

import DetailStarRating from "./DetailStarRating";

// tailwind-styled-component
import tw from "tailwind-styled-components";

// 임시 이미지
import food from "../../assets/food.jpg";
import OrderTable from "../../components/OrderTable";

const ShopUl = tw.ul`
  flex
  justify-center
  m-2
`;

const Detail = () => {
  return (
    <>
      <div>
        <div>
          <img src={food} />
        </div>
      </div>
      <div className="flex-col text-center">
        <h2>한솥도시락</h2>
        <div className="flex justify-center items-center border border-t-0 py-5">
          <div className="px-8">
            <p className="text-5xl tracking-wide">4.6</p>
            <DetailStarRating starRatio={4.6} />
          </div>
        </div>
        <div>
          <div>최소주문금액</div>
          <div>배달비</div>
        </div>
        <div>주문마감</div>
        <div>음식수령</div>
        <div>사장님 한마디</div>
      </div>

      <Link to="/order">주문하기</Link>      
      
     <OrderTable />

      <ShopUl>
        <li>
          <Link to="/shop/menu">메뉴</Link>
        </li>
        <li>
          <Link to="/shop/review">리뷰</Link>
        </li>
        <li>
          <Link to="/shop/info">정보</Link>
        </li>
      </ShopUl>
      <Routes>
        <Route path="info" element={<ShopInfo />} />
        <Route path="menu" element={<ShopMenu />} />
        <Route path="review" element={<ShopReview />} />
      </Routes>
    </>
  );
};

export default Detail;

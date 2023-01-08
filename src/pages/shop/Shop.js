// shop Detail page
import React from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import ShopInfo from "./ShopInfo";
import ShopMenu from "./ShopMenu";
import ShopReview from "./ShopReview";
// tailwind-styled-component
import tw from "tailwind-styled-components";


const ShopUl = tw.ul`
  flex
  justify-center
  m-2
`

const Detail = () => {
  return (
    <>
      <h2>상점 상세페이지 입니다.</h2>
      <Link to="/order">주문하기</Link>
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

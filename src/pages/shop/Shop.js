// shop Detail page
import React, { useState } from "react";
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
          <div>
            <img src={food} alt="사진" />
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

        <OrderTable />
        <ShopUl>
          {detailArr.map((ele, index) => {
            return click === index ? (
              <OnBox>
                <Link
                  to={ele.link}
                  key={index}
                  onClick={() => shopClickFunc(index)}
                >
                  {ele.title}
                </Link>
              </OnBox>
            ) : (
              <OffBox>
                <Link
                  to={ele.link}
                  key={index}
                  onClick={() => shopClickFunc(index)}
                >
                  {ele.title}
                </Link>
              </OffBox>
            );
          })}
        </ShopUl>
        {/* <li>
          <Link to="/shop/menu" onClick={shopClickFunc}>
            메뉴
          </Link>
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

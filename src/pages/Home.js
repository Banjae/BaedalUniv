// main Home page
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import ShopList from "../components/ShopList";
import ShopSchedule from "../components/ShopSchedule";
import ShopSale from "../components/ShopSale";
import Banner from "../components/Banner";
// tailwind-styled-component
import tw from "tailwind-styled-components";

const Home = () => {
  return (
    <>
      {/* <Loading /> */}
      <HomeContainer>
        <HomeTitle>
          <p>"어디로 배달해드릴까요?"</p>
        </HomeTitle>
        <HomeBox>
          <SearchBar />
        </HomeBox>
        <HomeBox>
          <p>할인전</p>
          <div>
            <ShopSale />
          </div>
        </HomeBox>
        <HomeBox>
          <p>음식주문/ 도착 시간표</p>
          <ShopSchedule />
        </HomeBox>
        <HomeBox>
          <ShopList />
        </HomeBox>
        <Banner />
      </HomeContainer>
    </>
  );
};

const HomeContainer = tw.div`
  text-center
  w-4/5
  my-0
  mx-auto
`;
const HomeTitle = tw.div`
  text-xl
`;
const HomeBox = tw.div`
  m-5
`;

export default Home;

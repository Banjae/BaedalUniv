// main Home page
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";

// tailwind-styled-component
import tw from "tailwind-styled-components";
import ShopList from "../components/ShopList";

const HomeContainer = tw.div`
  text-center
`;
const HomeTitle = tw.div`
  text-xl
`;

const Home = () => {
  return (
    <>
      {/* <Loading /> */}
      <HomeContainer>
        <HomeTitle>
          <p>"어디로 배달해드릴까요?"</p>
        </HomeTitle>
        <div>
          <SearchBar />
        </div>
        <div>
          <p>할인전</p>
          <div>
            <ShopList />
          </div>
        </div>
        <div>
          <p>음식주문/ 도착 시간표</p>
          <ShopList />
        </div>
        <div>
          <p>상점</p>
          <ShopList />
        </div>
      </HomeContainer>
    </>
  );
};

export default Home;

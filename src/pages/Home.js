// main Home page
import React from "react";
import { Link } from "react-router-dom";
// tailwind-styled-component
// import tw from "tailwind-styled-components";

const Home = () => {
  return (
    <>
      <div>
        <p>홈페이지 입니다.</p>
        <Link to="/shop">상점 바로가기</Link>
      </div>
    </>
  );
};

export default Home;

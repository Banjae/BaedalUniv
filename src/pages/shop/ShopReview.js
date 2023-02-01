import React from "react";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const ShopReview = () => {
  return (
    <>
      <SRcontainer>shop 안의 리뷰 페이지입니다.</SRcontainer>
    </>
  );
};

const SRcontainer = tw.div`
  bg-white
  h-full
  w-full
  mt-2
`;

export default ShopReview;

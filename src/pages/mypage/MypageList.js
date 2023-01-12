import React from "react";
// tailwind-styled-component
import tw from "tailwind-styled-components";

const List = tw.div`
  decoration-green-300
  underline
`;

const MypageList = () => {
  return (
    <div>
      <List>마이페이지 안의 주문리스트입니다.</List>
    </div>
  );
};

export default MypageList;

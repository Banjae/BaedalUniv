import React from "react";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const review = () => {
  return (
    <>
      <div className="flex justify-center ">
        <Inner className="inner">
          <div className="h-20">가게 이름</div>
          <div className="h-20">별점</div>
          <div className="bg-main h-20 mb-20">리뷰내용</div>
          <Write>작성</Write>
        </Inner>
      </div>
    </>
  );
};

const Write = tw.button`
block

font-medium
cursor-pointer
rounded-lg
bg-main
text-white
bg-main
px-20
py-2
`;

const Inner = tw.div`
w-[50%]
h-100%


text-center 
pb-20

`;
export default review;

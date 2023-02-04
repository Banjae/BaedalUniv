import React, { useEffect, useState } from "react";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const Test = () => {
  const shopList = [
    { storeSeq: 1, storeName: "고피자", scoreAvg: "2.0", reviewCount: 2 },
    { storeSeq: 2, storeName: "네네치킨", scoreAvg: "3.0", reviewCount: 7 },
    { storeSeq: 3, storeName: "밥버거", scoreAvg: "4.5", reviewCount: 1 },
    { storeSeq: 4, storeName: "횟집", scoreAvg: "2.0", reviewCount: 0 },
  ];

  const [test, setTest] = useState(shopList);

  const listReview = () => {
    const reListReview = [...test];
    reListReview.sort(function (a, b) {
      return b.reviewCount - a.reviewCount;
    });
    setTest(reListReview);
  };

  const listAvg = () => {
    const reListAvg = [...test];
    reListAvg.sort(function (a, b) {
      return b.scoreAvg - a.scoreAvg;
    });
    setTest(reListAvg);
  };

  console.log(test);

  useEffect(() => {}, [shopList]);

  return (
    <div>
      {test.map((ele, idx) => {
        return (
          <div key={idx}>
            <span>{ele.storeName}</span>
            <span className="m-2">{ele.scoreAvg}</span>
            <span className="m-2">{ele.reviewCount}</span>
          </div>
        );
      })}

      <div className="flex justify-around">
        <ListBt onClick={listReview}>리뷰 많은 순</ListBt>
        <ListBt onClick={listAvg}>별점 많은 순</ListBt>
      </div>
    </div>
  );
};

const ListBt = tw.button`
bg-main text-white text-md w-1/6 h-10 rounded-lg mt-2
`;

export default Test;

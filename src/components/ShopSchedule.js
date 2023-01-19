import React, { useEffect, useState } from "react";

// tailwind-styled-component
import tw from "tailwind-styled-components";
import ShopList from "./ShopList";

const ShopSchedule = () => {
  const shopArr = [
    { title: "오늘 점심2", close: "몇시", pickup: "몇시" },
    { title: "내일 점심1", close: "몇시", pickup: "몇시" },
    { title: "오늘 점심1", close: "몇시", pickup: "몇시" },
    { title: "내일 점심2", close: "몇시", pickup: "몇시" },
  ];

  const [click, setClick] = useState();

  const clickFunc = (index) => {
    setClick(index);
  };

  return (
    <>
      <div>
        <div className="flex justify-between">
          {shopArr.map((ele, index) => {
            return click === index ? (
              <>
                <ScheBoxOn key={index} onClick={() => clickFunc(index)}>
                  <span>{ele.title}</span>
                  <span>주문마감 {ele.close}</span>
                  <span>배달 도착 {ele.pickup}</span>
                </ScheBoxOn>
              </>
            ) : (
              <>
                <ScheBoxOff key={index} onClick={() => clickFunc(index)}>
                  <span>{ele.title}</span>
                  <span>주문마감 {ele.close}</span>
                  <span>배달 도착 {ele.pickup}</span>
                </ScheBoxOff>
              </>
            );
          })}
        </div>
        <ShopList />
      </div>
    </>
  );
};

const ScheBoxOn = tw.div`
  flex
  flex-col
  itmes-center
  rounded-lg
  bg-white
  border-2 
  border-main 
  w-1/5
`;

const ScheBoxOff = tw.div`
  flex
  flex-col
  itmes-center
  rounded-lg
  bg-white
  border-2
  border-gray-300 
  w-1/5
  `;

export default ShopSchedule;

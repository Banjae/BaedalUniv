import React, { useEffect, useState } from "react";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const ShopSchedule = () => {
  const ShopArr = [
    { title: "오늘1", content: false },
    { title: "오늘2", content: false },
    { title: "내일1", content: false },
    { title: "내일2", content: true },
  ];

  const [click, setClick] = useState(0);

  const clickFunc = (index) => {
    setClick(index);
  };

  return (
    <>
      <div>
        <ul className="flex justify-between">
          {ShopArr.map((ele, index) => {
            return click === index ? (
              <ScheBoxOn key={index} onClick={() => clickFunc(index)}>
                {ele.title}
              </ScheBoxOn>
            ) : (
              <ScheBoxOff key={index} onClick={() => clickFunc(index)}>
                {ele.title}
              </ScheBoxOff>
            );
          })}
          {/* <ScheBox onClick={clickFunc}>
            <p>
              오늘&nbsp;
              <span className="font-bold">점심1</span>
            </p>
            <span>주문 ~11시 00분</span>
            <span>도착 12시 10분</span>
          </ScheBox>
          <ScheBox onClick={clickFunc}>
            <p>
              오늘&nbsp;
              <span className="font-bold">점심1</span>
            </p>
            <span>주문 ~11시 00분</span>
            <span>도착 12시 10분</span>
          </ScheBox>
          <ScheBox onClick={setClick}>
            <p>
              오늘&nbsp;
              <span className="font-bold">점심1</span>
            </p>
            <span>주문 ~11시 00분</span>
            <span>도착 12시 10분</span>
          </ScheBox>
          <ScheBox onClick={setClick}>
            <p>
              오늘&nbsp;
              <span className="font-bold">점심1</span>
            </p>
            <span>주문 ~11시 00분</span>
            <span>도착 12시 10분</span>
          </ScheBox> */}
        </ul>
      </div>
    </>
  );
};

const ScheBoxOn = tw.li`
  rounded-lg
  bg-white
  border-2 
  border-main 
`;

const ScheBoxOff = tw.li`
  rounded-lg
  bg-white
  border 
  border-gray-300 
`;

export default ShopSchedule;

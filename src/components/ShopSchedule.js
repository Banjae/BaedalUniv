import React, { useEffect, useState } from "react";

import instance from "../api/axios";
import request from "../api/requset";
import Loading from "./Loading";
import ShopList from "./ShopList";
import ShopSale from "./ShopSale";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const ShopSchedule = ({ uiSeq }) => {
  const [shopArr, setShopArr] = useState([]);
  const [utiSeq, setUtiSeq] = useState();
  const [click, setClick] = useState(0);
  const [loading, setLoading] = useState(true);

  const params = {
    uiSeq: uiSeq,
  };

  const fetchData = async () => {
    await instance
      .get(request.deliverytime, { params })
      .then((res) => {
        setUtiSeq(res.data.list[0].utiSeq);
        setShopArr(res.data.list);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [uiSeq]);

  const clickFunc = (ele, idx) => {
    setUtiSeq(ele.utiSeq);
    setClick(idx);
  };

  // let now = new Date();
  // const hour = now.getHours();
  // const minutes = now.getMinutes();
  // const nowTime = `${hour}:${minutes}`;
  // console.log(nowTime);

  // const setTime = if(nowTime < ) {

  // } else if {

  // } else if {

  // } else {

  // }

  return (
    <>
      <SStitle>음식주문 / 도착 시간표</SStitle>
      <div>
        <div className="flex justify-between">
          {shopArr.map((ele, idx) => {
            // console.log(ele.utiCloseTime < nowTime);
            return (
              <ScheBoxOn
                key={ele.utiSeq}
                onClick={() => clickFunc(ele, idx)}
                className={click === idx ? "border-main" : "border-white"}
              >
                <span>{ele.utiName}</span>
                <span>주문마감 {ele.utiCloseTime}</span>
                <span>배달 도착 {ele.utiDeliveryTime}</span>
              </ScheBoxOn>
            );
            // : (
            //     <ScheBoxOff key={ele.utiSeq} onClick={() => clickFunc(ele)}>
            //       <span>{ele.utiName}</span>
            //       <span>주문마감 {ele.utiCloseTime}</span>
            //       <span>배달 도착 {ele.utiDeliveryTime}</span>
            //     </ScheBoxOff>
            // );
          })}
        </div>
        <ShopSale utiSeq={utiSeq} />
        <ShopList utiSeq={utiSeq} />
        {loading && <Loading />}
      </div>
    </>
  );
};

const ScheBoxOn = tw.div`
  flex
  flex-col
  items-center
  justify-center
  rounded-lg
  bg-white
  border-2  
  w-1/5
  h-[150px]
  text-xl
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

const SStitle = tw.p`
    text-2xl
    my-2
  `;

export default ShopSchedule;

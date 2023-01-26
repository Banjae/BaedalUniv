import axios from "axios";
import React, { useEffect, useState } from "react";

// tailwind-styled-component
import tw from "tailwind-styled-components";
import instance from "../api/axios";
import request from "../api/requset";
import ShopList from "./ShopList";

const ShopSchedule = ({ uiSeq }) => {
  const [shopArr, setShopArr] = useState([]);
  const [utiSeq, setUtiSeq] = useState();
  const [time, setTime] = useState();

  const [click, setClick] = useState();

  const fetchData = async () => {
    axios
      .get("http://192.168.0.56:8888/list/deliverytime?uiSeq=" + uiSeq)
      .then((res) => {
        setShopArr(res.data.list);
        // console.log(res.data.list);
      });
  };

  // console.log(shopArr[0]);

  useEffect(() => {
    fetchData();
  }, []);

  const clickFunc = (index) => {
    setClick(index);
  };

  return (
    <>
      <p>음식주문 / 도착 시간표</p>
      <div>
        <div className="flex justify-between">
          {shopArr.map((ele, index) => {
            console.log(ele.utiName);
            return click === index ? (
              <>
                <ScheBoxOn key={index} onClick={() => clickFunc(index)}>
                  <span>{ele.utiName}</span>
                  <span>주문마감 {ele.utiCloseTime}</span>
                  <span>배달 도착 {ele.utiDeliveryTime}</span>
                </ScheBoxOn>
              </>
            ) : (
              <>
                <ScheBoxOff key={index} onClick={() => clickFunc(index)}>
                  <span>{ele.utiName}</span>
                  <span>주문마감 {ele.utiCloseTime}</span>
                  <span>배달 도착 {ele.utiDeliveryTime}</span>
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

import axios from "axios";
import React, { useEffect, useState } from "react";

// tailwind-styled-component
import tw from "tailwind-styled-components";
import instance from "../api/axios";
import request from "../api/requset";
import Loading from "./Loading";
import ShopList from "./ShopList";
import ShopSale from "./ShopSale";

const ShopSchedule = ({ uiSeq }) => {
  const [shopArr, setShopArr] = useState([]);
  const [utiSeq, setUtiSeq] = useState();
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

  const clickFunc = (ele) => {
    setUtiSeq(ele.utiSeq);
  };

  return (
    <>
      <p>음식주문 / 도착 시간표</p>
      <div>
        <div className="flex justify-between">
          {shopArr.map((ele) => {
            return (
              <ScheBoxOn key={ele.utiSeq} onClick={() => clickFunc(ele)}>
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
        {/* {loading && <Loading />} */}
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

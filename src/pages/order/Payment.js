import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const Payment = () => {
  const [pay, setPay] = useState([]);
  const user = useSelector((state) => state.user);
  const params = {
    ciSeq: user.ciSeq,
  };
  const payData = async () => {
    try {
      const res = await axios.get("http://192.168.0.56:8888/order/history", {
        params,
      });
      setPay(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    payData();
  }, []);

  function priceToString(price) {
    if (price === undefined || price === null) return;
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const { state } = useLocation();

  const todayTime = () => {
    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth = now.getMonth() + 1;
    let todayDate = now.getDate();
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    let datOfWeek = week[now.getDay()];
    let hours = now.getHours();
    let minutes = now.getMinutes();
    return (
      todayYear +
      "년 " +
      todayMonth +
      "월 " +
      todayDate +
      "일 " +
      datOfWeek +
      hours +
      ":" +
      minutes
    );
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p className="block text-center mb-5 font-semibold text-2xl">
          결제내역
        </p>
        {state.data.menuList.map((item) => (
          <div className="flex justify-center items-center bg-main text-white w-80 h-10 font-semibold rounded-lg border-solid">
            {item.siName}
          </div>
        ))}
      </div>
      <div className="mt-10">
        <div className="flex flex-col justify-center items-center">
          <p className="mb-1">
            <div>
              주문일시:
              <span className="ml-1">{todayTime().slice(0, 9)}</span>
              <span className="ml-1">{todayTime().slice(9, 12)}</span>
              <span className="ml-1">{todayTime().slice(12, 19)}</span>
            </div>
          </p>
          <p className="mb-5">주문번호: {state.data.biNumber}</p>
          <div className="flex flex-col justify-center items-center mb-10 mt-10">
            {state.data.menuList.map((item, index) => (
              <div>
                <p className="mb-1">메뉴: {item.menuName}</p>
                <p className="mb-1">옵션: {item.optionAll}</p>
                <p className="mb-1">가격: {priceToString(item.price)}</p>
                <p>수량: {item.count}</p>
                <p className="mb-1">배달비: 무료</p>
              </div>
            ))}
            <div>
              <p className="mb-1">수령장소:{state.data.puaName} </p>
              <p>총 결제금액: {priceToString(state.data.totalPrice)}</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/mypage">
        <div className="flex justify-center item-center">
          <button className="bg-main text-white text-xl w-1/4 h-14 rounded-lg mt-2">
            마이페이지로 가기
          </button>
        </div>
      </Link>
    </>
  );
};

export default Payment;

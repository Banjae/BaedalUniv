import React from "react";
import { Link } from "react-router-dom";

const OrderLogin = () => {
  return (
    <div>
      <span>주문하기</span>
      <span>앗! 비로그인 주문시 적립,할인 등이 불가해요</span>
      <Link to="/Login"></Link>
    </div>
  );
};

export default OrderLogin;

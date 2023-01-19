// my Cart page
import React from "react";
import { Link } from "react-router-dom";
// tailwind-styled-component
// import tw from "tailwind-styled-components";

const Cart = () => {
  return (
    <>
      <div>
        <p className="text-center mb-5 font-semibold text-2xl">장바구니</p>
        <p>굽네치킨 & 피자 매호점</p>
        <p>New 남해마늘바사삭</p>
        <div className="flex flex-row">
          <div className="w-20 h-20 bg-main"></div>
          <div className="flex flex-col ml-2">
            <p>가격 : 19,000원</p>
            {/* 옵션 */}
            <p>부위 선택 (고바삭/마바삭) : 한마리</p>
            <p>19,000 원</p>
          </div>
        </div>
        {/* <button onClick={}>-</button>
        count
        <button onClick={}>+</button> */}
        <div className="">
          <div className="">
            <p>배달비</p>
            <p>0원</p>
          </div>
          <div className="">
            <p>총 주문금액</p>
            <p>0원</p>
          </div>
          <div className="">
            <p>수령장소 :</p>
            <p>00대학교 00건물</p>
          </div>
        </div>
        <Link
          to="/Order"
          className="payment-box flex justify-center items-center bg-main text-white w-52 h-10 mt-10"
        >
          <span>19,000원 주문하기</span>
        </Link>
      </div>
    </>
  );
};

export default Cart;

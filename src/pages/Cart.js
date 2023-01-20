// my Cart page
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
// tailwind-styled-component
// import tw from "tailwind-styled-components";

const Cart = () => {
  const [listData, setListData] = useState([]);
  const clear = (e) => {};
  // const deleteAllClick = () => {
  //   if (window.confirm("정말 삭제하시겠습니까?")) {
  //     // axios 를 이용하여 MongoDB 목록을 비워줌
  //     // axios
  //     //   .post("/api/post/deleteall")
  //     //   .then(() => {
  //     //     setSkip(0);
  //     //     setTodoData([]);
  //     //   })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  //   // localStorage.clear();
  // };
  return (
    <>
      <div className="flex border">
        <div
          className="w-24 h-24 bg-main rounded"></div>
        <button>x</button>
        <div className="flex flex-col">
          <p>[반반도시락] 2가지 맛 선택 2가지 선택</p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center bg-white text-white w-52 h-10 mt-10 text-black border rounded">
          <p>합계 원</p>
        </div>
        <Link
          to="/Order"
          className="flex justify-center items-center bg-main text-white w-52 h-10 mt-10"
        >
          <p>주문하기(개)</p>
        </Link>
      </div>
    </>
  );
};

export default Cart;

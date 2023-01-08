// shop Order
import React from "react";
import { useNavigate } from "react-router-dom";
// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// tailwind-styled-component
// import tw from "tailwind-styled-components";


const Order = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>주문하기 페이지입니다.</div>
      <button onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    </>
  );
};

export default Order;

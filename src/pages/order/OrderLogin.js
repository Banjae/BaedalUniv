import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const OrderLogin = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="flex justify-center items-center mb-5">
        <span className="font-semibold text-4xl">록시갸토 첨단아크레타점</span>
      </div>
      <div className="flex justify-center">
        <div className="h-96 w-3/4 bg-orange-900"></div>
      </div>
      <div className="px-3">
        <div className="flex flex-col justify-start ml-20 mb-10">
          <h2 className="mb-1">생딸기에이드</h2>
          <span>상점재준문율:</span>
          <span>별점(98)</span>
        </div>

        <div className="option mb">
          <div>
            <input type="checkbox" />
            <span>기본</span>
            <span>13,000원</span>
          </div>
          <span>line</span>

          <h3>브런치 세트 선택</h3>

          <div>
            <ul>
              <li>
                <input type="checkbox" />
                <span>아메리카노(HOT)</span>
                <span>원</span>
              </li>
            </ul>
          </div>

          <span>line</span>

          <div>
            <h3>수량</h3>
            <button>a</button>
            <span>count</span>
            <button>b</button>
          </div>

          <span>line</span>
        </div>
        <div>
          <h2>합계 원</h2>
        </div>

        <span>line</span>

        <div className="">
          <Link to="/cart">장바구니</Link>
          <Link to="/order">주문하기</Link>
        </div>
      </div>
    </>
  );
};

export default OrderLogin;

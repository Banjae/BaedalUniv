// shop Order
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// FontAwesome Icon 적용
import tw from "tailwind-styled-components";

const OrderLoginBt = tw.button`
border-2
border-gray-300
w-1/5
rounded-lg
h-16
font-semibold
text-xl
`;
const OrderTitle = tw.span`
flex
justify-start
ml-3
mb-3
font-semibold
text-2xl
text-slate-700
`;
const OrderText = tw.span`
flex
justify-start
ml-3
`;
const OrderInput = tw.input`
flex
justify-start
m-3
p-2
rounded-lg
border-2
border-gray-300
h-12
font-medium
text-xl
`;
const OrderDrop = tw.div`
flex
justify-start
m-3
p-2
rounded-lg
border-2
border-gray-300
h-12
font-medium
text-xl
`;

const Order = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* 아래코드로 로그인 상태 구분해서 출력 */}
      {/* {user.accessToken === "" ?():()} */}
      <div className="mb-10">
        <span className="block text-center mb-5 font-semibold text-2xl">
          주문하기
        </span>
        <span className="block text-center mb-5">
          앗! 비로그인 주문시 적립,할인 등이 불가해요
        </span>
        <div className="flex justify-center">
          <OrderLoginBt>
            <Link to="/Login">로그인 & 회원가입</Link>
          </OrderLoginBt>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col justify-start">
          <OrderTitle>주문자정보</OrderTitle>
          <OrderInput type="text" placeholder="주문자명을 입력해주세요" />
          <OrderInput type="text" placeholder="핸드폰번호를 입력해주세요" />
          <OrderTitle>수령시간/장소</OrderTitle>
          <OrderText>수령시각</OrderText>
          <OrderDrop>
            <select>
              <option>주문취소</option>
              <option>오늘 16:50 주문마감 / 18:10~18:30 수령</option>
              <option>오늘 16:50 주문마감 / 18:10~18:30 수령</option>
              <option>오늘 16:50 주문마감 / 18:10~18:30 수령</option>
            </select>
          </OrderDrop>
          <OrderText>수령장소</OrderText>
          <OrderDrop>
            <select>
              <option>학사기숙사(A동)</option>
              <option>학사기숙사(B동)</option>
              <option>학사기숙사(C동)</option>
              <option>학사기숙사(D동)</option>
            </select>
          </OrderDrop>
          <OrderTitle>결제수단</OrderTitle>
          <div className="flex flex-col justify-start ml-3">
            <div className="mb-2">
              <input type="checkbox" />
              <span>카드결제</span>
            </div>
            <div className="mb-2">
              <input type="checkbox" />
              <span className="mb-2">긱머니결제</span>
            </div>
            <div className="mb-2">
              <input type="checkbox" />
              <span className="mb-2">PAYCO결제</span>
            </div>
          </div>
          <OrderTitle>결제정보</OrderTitle>
          <div className="flex flex-col">
            <span className="font-semibold text-xl text-500 ml-5">
              한솥도시락
            </span>
            <span className="ml-10">토마토 미트 파스타</span>
            <span className="ml-10">토핑</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-xl text-500 ml-5">배달비</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-xl text-500 ml-5 text-main">
              총 할인금액
            </span>
            <span className="ml-10 text-main">배달비 할인</span>
          </div>
          <div className="flex flex-row justify-end">
            <span>결제금액원</span>
          </div>
          <div className="flex bg-blue-500 justify-center items-center w-25 h-16">
            <span>원 결제하기</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;

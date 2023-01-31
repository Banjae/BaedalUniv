import React from "react";

const ShopInfo = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center w-[50%] bg-gray-200 rounded-xl p-2 ">
            <div>
              <strong>사장님한마디</strong>☆ 전체부분 맛집랭킹 1위 항상
              사랑해주시는 고객님들께 감사드리며 매일 더 노력하는 멘부리가
              되겠습니다☆ ☆리뷰약속이벤트☆ 리뷰약속이벤트는 요청사항 기재가 아닌
              메뉴란에서 선택 부탁드립니다. ☆음식에 문제가 있거나 궁금하신 점은
              언제든지 가게로 연락주세요. <br />
              #정직하게 #양심있게 #맛있게
            </div>
          </div>
          <div className="bg-yellow-200">업체정보</div>
          <div className="bg-yellow-200">사업자정보</div>
          <div className="bg-yellow-200">원산지정보</div>
        </div>
      </div>
    </>
  );
};

export default ShopInfo;

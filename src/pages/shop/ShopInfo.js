import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../../api/axios";
import request from "../../api/requset";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const ShopInfo = ({ utiSeq }) => {
  const [infoArr, setInfoArr] = useState([]);
  const [pickUpTimeList, setPickUpTimeList] = useState([]);

  const { siSeq } = useParams();

  const params = {
    siSeq: siSeq,
    utiSeq: utiSeq,
  };

  const fetchData = async () => {
    await instance
      .get(request.shopinfo, { params })
      .then((res) => {
        setInfoArr(res.data.data);
        setPickUpTimeList(res.data.data.closePickUpTimeList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [utiSeq, siSeq]);

  return (
    <>
      <SIcontainer>
        <OwnerWord>
          <strong>사장님한마디🥳</strong>
          <OwnerWordText>
            <p>
              {infoArr.ownerWord === ""
                ? "사장님 한마디가 없어요"
                : infoArr.ownerWord}
            </p>
          </OwnerWordText>
        </OwnerWord>
        <SIbox>
          <strong>업체정보</strong>
          <div>
            <span>전화번호</span>
            <SIdetail>{infoArr.phoneNumber}</SIdetail>
          </div>
        </SIbox>
        <SIbox>
          <strong>사업자정보</strong>
          <div>
            <span>대표자</span>
            <SIdetail>{infoArr.ownerName}</SIdetail>
          </div>
          <div>
            <span>상호명</span>
            <SIdetail>{infoArr.sdiName}</SIdetail>
          </div>
          <div>
            <span>사업자등록번호</span>
            <SIdetail>{infoArr.businessNumber}</SIdetail>
          </div>
        </SIbox>
        <SItime>
          <p>주문마감 / 도착시간</p>
          {pickUpTimeList.map((ele) => {
            return (
              <div key={ele.utiSeq}>
                <p>{ele.closeTime}</p>
                <p>{ele.pickupTime}</p>
              </div>
            );
          })}
        </SItime>
      </SIcontainer>
    </>
  );
};

const SIcontainer = tw.div`
  flex
  flex-col
  items-center
  bg-white
  h-full
  w-full
  mt-2
`;

const OwnerWord = tw.div`
  flex
  flex-col
  border
  border-gray-300
  rounded-lg
  w-[90%]
  text-lg
  bg-white
  m-2
  p-2
  `;

const OwnerWordText = tw.div`
  flex
  my-0
  mx-auto
  w-[95%]
`;

const SIbox = tw.div`
  flex
  flex-col
  w-full
  border-t-2
  border-gray-300
  p-2
  m-1
`;

const SIdetail = tw.span`
  ml-[70px]
`;

const SItime = tw.div`
  flex
  flex-col
  items-center
  border
  border-gray-300
  rounded-lg
  w-[60%]
  m-2
  p-2
`;

export default ShopInfo;

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
          <Sid>
            <SidName>전화번호</SidName>
            <SIdetail>{infoArr.phoneNumber}</SIdetail>
          </Sid>
        </SIbox>
        <SIbox>
          <strong>사업자정보</strong>
          <Sid>
            <SidName>대표자</SidName>
            <SIdetail>{infoArr.ownerName}</SIdetail>
          </Sid>
          <Sid>
            <SidName>상호명</SidName>
            <SIdetail>{infoArr.sdiName}</SIdetail>
          </Sid>
          <Sid>
            <SidName>사업자등록번호</SidName>
            <SIdetail>{infoArr.businessNumber}</SIdetail>
          </Sid>
        </SIbox>
        <SItime>
          <p>주문마감 / 도착시간</p>
          {pickUpTimeList.map((ele) => {
            console.log(ele);
            return (
              <div key={ele.utiSeq}>
                {ele.thisTime === true ? (
                  <ThisTime>
                    <span>{ele.closeTime}</span>
                    <span> - </span>
                    <span>{ele.pickupTime}</span>
                  </ThisTime>
                ) : (
                  <>
                    <span>{ele.closeTime}</span>
                    <span> - </span>
                    <span>{ele.pickupTime}</span>
                  </>
                )}
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
  p-3
  m-1
`;

const Sid = tw.div`
  flex
`

const SidName = tw.div`
  w-[11%]
`;

const SIdetail = tw.span`
  ml-4
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

const ThisTime = tw.p`
  text-lg
  font-semibold
`;

export default ShopInfo;

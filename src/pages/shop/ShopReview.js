import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import instance from "../../api/axios";
import request from "../../api/requset";

// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const ShopReview = () => {
  const [reviewList, setReviewList] = useState([]);
  const siSeq = useParams();

  const params = {
    siSeq: siSeq.siSeq,
  };

  const fetchData = async () =>
    await instance
      .get(request.review, { params })
      .then((res) => {
        console.log(res.data.list)
        setReviewList(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SRcontainer>
        <div className="p-2 ">
          <p>
            리뷰 <strong>{reviewList.length}</strong>개
          </p>
        </div>
        {reviewList.map((ele, idx) => {
          return (
            <ReviewBox key={idx}>
              <div></div>
              <div>
                <div>
                  <ReviewName>{ele.ciNickName} 님</ReviewName>
                  <ReviewDate>{ele.reviewRegDt}</ReviewDate>
                </div>
                <div className="text-yellow-500">
                  <FontAwesomeIcon icon={faStar} />
                  <span>{ele.reviewScore}</span>
                </div>
                <ReviewMenu>
                  {ele.menu} / {ele.menuOption}
                </ReviewMenu>
                <ReviewContent>{ele.reviewContent}</ReviewContent>
              </div>
            </ReviewBox>
          );
        })}
      </SRcontainer>
    </>
  );
};

const SRcontainer = tw.div`
  bg-white
  h-full
  w-full
  mt-2
`;

const ReviewBox = tw.div`
  p-3
  border-t
  border-gray-300
`;

const ReviewName = tw.span`
  text-[20px]
`;

const ReviewDate = tw.span`
  ml-2
  text-gray-400
`;

const ReviewMenu = tw.span`
  text-yellow-700
  text-sm
`;

const ReviewContent = tw.p`
  txet-2xl
  whitespace-pre-line
`;

export default ShopReview;

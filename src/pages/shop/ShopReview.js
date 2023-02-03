import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

// tailwind-styled-component
import tw from "tailwind-styled-components";
import instance from "../../api/axios";
import request from "../../api/requset";

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
        console.log(res);
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
        {reviewList.map((ele) => {
          console.log(ele);
          return (
            <div>
              <div>
                <p>리뷰{reviewList.length}개</p>
              </div>
              <div>
                <span></span>
                <span></span>
                <p></p>
              </div>
            </div>
          );
        })}
        shop 안의 리뷰 페이지입니다.
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

export default ShopReview;

import React from "react";

import styled from "styled-components";

// tailwind-styled-component
import tw from "tailwind-styled-components";

import { ImStarFull } from "react-icons/im";
import { useState } from "react";

import axios from "axios";
import { useLocation, useNavigate } from "react-router";

const Review = () => {
  const location = useLocation();
  const bmocSeq = location.state;
  const navigate = useNavigate();
  // 별점 기본값 설정
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  // 더미 배열을 통해 항상 별이 총 5개가 나오도록 한다.
  const array = [0, 1, 2, 3, 4];

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  // const [orderSeq, setOrderSeq] = useState();
  const [contents, setContents] = useState();
  // const [score, setScore] = useState("");

  const star = clicked.filter(Boolean).length;

  const registFn = (e) => {
    e.preventDefault();

    const body = {
      order_seq: bmocSeq,
      ri_contents: contents,
      ri_score: star,
    };
    console.log("바디야 ", body);

    axios
      .post("http://192.168.0.56:8888/review/add", body)
      .then((response) => {
        // 서버에서 정상적 처리 완료
        if (response.data) {
          if (response.data) {
            // 등록가능
            // 사용자 중복체크 완료
            alert(response.data.message);
          } else {
            // 등록 불가능
            alert(response.data.message);
          }
        }
        navigate("/Mypage");
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.message);
        navigate("/Mypage");
      });
  };

  return (
    <>
      <div className="flex justify-center ">
        <Inner className="inner">
          <div className="h-20">가게 이름</div>

          <RatingBox className="flex justify-center gap-2">
            {array.map((el) => (
              <ImStarFull
                key={el}
                onClick={() => handleStarClick(el)}
                className={clicked[el] && "black"}
                size="35"
                value={star}
              />
            ))}
          </RatingBox>

          <div className="mb-10">
            <Box
              placeholder="리뷰작성 해주세요."
              onChange={(e) => setContents(e.target.value)}
            ></Box>
          </div>

          <Write onClick={(e) => registFn(e)}>작성</Write>
        </Inner>
      </div>
    </>
  );
};

const Inner = tw.div`
w-[50%]
h-100%
text-center 
pb-20
`;

const Write = tw.button`
float-right
font-medium
cursor-pointer
rounded-lg
bg-main
text-white
bg-main
px-20
py-2
`;

const RatingBox = styled.div`
  margin: 0 auto;

  & svg {
    color: #c4c4c4;
    cursor: pointer;
  }

  & svg:hover ~ svg {
    color: #c4c4c4;
  }
  .black {
    color: gold;
  }
`;

const Box = tw.textarea`
w-[100%]
h-[200px]
px-3
py-2
mt-7
rounded-xl
`;
export default Review;

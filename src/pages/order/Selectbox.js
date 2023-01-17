import React, { useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./Selectbox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Selectbox = () => {
  const [showCate, setShowCate] = useState(false);
  //   .select-box img { 		// 화살표 이미지 정방향일 때
  //     height: 12px;
  //     width: 12px;
  //     transition: all ease 1s;	// 회전 애니메이션 부드럽게 돌아간다.
  //   }
  //   .select-box.open img { 		// 클릭해서 드랍박스가 열릴 때
  //     transform: rotate(180deg);	// 화살표가 역방향으로 회전
  //     transition: all ease 1s; 	// 회전 시 부드럽게 돌아간다.
  //   }

  return (
    <>
      <div
        className={`select-box ${showCate ? "open" : ""}`} // showCate 가 true 면 open 이라는 클래스가 추가된다.
        onClick={() => setShowCate(!showCate)} // 클릭 시에 showCate의 상태값이 바뀐다. (스위치 역할)
      >
        전체보기 <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </>
  );
};

export default Selectbox;

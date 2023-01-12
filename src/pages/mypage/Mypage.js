import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import MypageEdit from "./MypageEdit";
import MypageList from "./MypageList";
import MypageQuit from "./MypageQuit";
import MypageSave from "./MypageSave";
// tailwind-styled-component
import tw from "tailwind-styled-components";
// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserXmark } from "@fortawesome/free-solid-svg-icons";


const Title = tw.div`
  text-4xl
  text-orange-500
`;

const Mypage = () => {
  return (
    <>
      <div className="text-4xl text-orange-500"> 마이페이지</div>
      <Title>마이페이지</Title>
      <ul>
        <li>
          <Link to="/Mypage/edit">정보수정</Link>
        </li>
        <li>
          <Link to="/Mypage/list">주문내역</Link>
        </li>
        <li>
          <Link to="/Mypage/quit">
            <Title >
              <FontAwesomeIcon icon={faUserXmark} />
            </Title>주문취소
          </Link>
        </li>
        <li>
          <Link to="/Mypage/save">아낀배달비는?</Link>
        </li>
      </ul>
      <Routes>
        <Route path="edit" element={<MypageEdit />} />
        <Route path="list" element={<MypageList />} />
        <Route path="quit" element={<MypageQuit />} />
        <Route path="save" element={<MypageSave />} />
      </Routes>
    </>
  );
};

export default Mypage;

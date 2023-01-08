import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import MypageEdit from "./MypageEdit";
import MypageList from "./MypageList";
import MypageQuit from "./MypageQuit";
import MypageSave from "./MypageSave";
// tailwind-styled-component
// import tw from "tailwind-styled-components";

const Mypage = () => {
  return (
    <>
      <h2>마이페이지</h2>
      <ul>
        <li>
          <Link to="/Mypage/edit">정보수정</Link>
        </li>
        <li>
          <Link to="/Mypage/list">주문내역</Link>
        </li>
        <li>
          <Link to="/Mypage/quit">회원탈퇴</Link>
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

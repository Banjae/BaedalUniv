import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import MypageEdit from "./MypageEdit";
import MypageList from "./MypageList";
import MypageQuit from "./MypageQuit";
import MypageSave from "./MypageSave";

// tailwind-styled-component
import tw from "tailwind-styled-components";

// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import ModalPw from "./ModalPw";

const Title = tw.div`
flex
justify-start 
ml-3
font-semibold
text-2xl
text-slate-700

`;

const Bt = tw.div`
  flex
  justify-start
  m-3
  p-2
  border-2
  border-gray-300
  h-12
  font-medium
  text-xl
  
`;

const Out = tw.button`
w-1/2
px-8
py-3
bg-main
border
border-main
rounded-lg
text-base
text-white
text-2xl
font-normal
mt-20
mb-20

`;

const Mypage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Title className="flex justify-center mb-20">
          <button onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          마이페이지
        </Title>

        <div className="w-1/2 my-0 mx-auto">
          <div className="flex justify-between mb-3 items-center">
            <Title>닉네임 님! 환영합니다.</Title>
            <Modal title="000님의 닉네임 수정" name="닉네임" />
          </div>

          <div className="flex justify-between mb-3 items-center">
            <Title>010-1234-5678</Title>
            <Modal title="닉네임님의 전화번호 수정" name="전화번호" />
          </div>

          <div className="flex justify-between mb-3 items-center">
            <Title>xxxx@naver.com</Title>
            <Modal title="xxxx@naver.com" name="이메일" />
          </div>

          <div className="flex justify-end">
            <ModalPw title="000님의 비밀번호 수정" name="비밀번호" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <Bt>
          <Link to="/Mypage/list">주문내역</Link>
        </Bt>
        <Bt>
          <Link to="/Mypage/quit">주문취소</Link>
        </Bt>
        <Bt>
          <Link to="/Mypage/save">아낀배달비는?</Link>
        </Bt>
      </div>

      <Routes>
        <Route path="edit" element={<MypageEdit />} />
        <Route path="list" element={<MypageList />} />
        <Route path="quit" element={<MypageQuit />} />
        <Route path="save" element={<MypageSave />} />
      </Routes>

      <div className="flex justify-center">
        <Out>회원탈퇴</Out>
      </div>
    </>
  );
};

export default Mypage;

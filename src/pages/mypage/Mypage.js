import React from "react";
import { useNavigate } from "react-router-dom";

// user 정보 가져오기
import { useSelector } from "react-redux";

// tailwind-styled-component
import tw from "tailwind-styled-components";

// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import ModalPw from "./ModalPw";
import ModalQuit from "./ModalQuit";
import ModalSave from "./ModalSave";
import ModalPhone from "./ModalPhone";
import ModalEmail from "./ModalEmail";
import ModalList from "./ModalList";

const Mypage = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} className="mb-10" />
      </button>
      <div>
        <Page className="flex justify-center mb-20 mr-10">마이페이지</Page>
        <div className="w-1/2 my-0 mx-auto">
          <div className="flex justify-between mb-3 items-center">
            <Title>{user.ciNickName}</Title>
            <Modal title="님의 닉네임 수정" name="닉네임" />
          </div>
          <div className="flex justify-between mb-3 items-center">
            <Title>{user.ciPhone}</Title>
            <ModalPhone title="님의 전화번호 수정" name="전화번호" />
          </div>
          <div className="flex justify-between mb-3 items-center">
            <Title>{user.ciEmail}</Title>
            <ModalEmail title="님의 이메일 수정" name="이메일" />
          </div>
          <div className="flex justify-end">
            <ModalPw title="님의 비밀번호 수정" name="비밀번호" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ModalSave name="닉네임" />
        <div className="flex justify-center">
          <ModalList />
        </div>
      </div>
      {/* 회원탈퇴 */}
      <div className="flex justify-center">
        <ModalQuit />
      </div>
    </>
  );
};

const Page = tw.div`
flex
justify-start 
ml-3
text-3xl
font-semibold
text-stone-600
`;
const Title = tw.div`
flex
justify-start 
ml-3
font-semibold
text-2xl
text-slate-700
`;

export default Mypage;

// Signup page
import React from "react";
import { useNavigate } from "react-router-dom";
// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// tailwind-styled-component
import tw from "tailwind-styled-components";

const InputBt = tw.input`
  border-black
  border-2 
  focus:border-4
  m-2 
`;



const SIgnup = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>회원가입 페이지입니다.</div>
      <button onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div>
        이름
        <InputBt type="text" placeholder="이름을 입력해주세요" />
      </div>
      <div>
        아이디
        <InputBt type="text" placeholder="아이디를 입력해주세요" />
      </div>
    </>
  );
};

export default SIgnup;

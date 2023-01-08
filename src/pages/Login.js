// Login page
import React from "react";
import { Link, useNavigate } from "react-router-dom";
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

const LoginBt = tw.button`
  bg-indigo-400
  text-slate-200
  w-3/6
`;

const SignupBt = tw.button`
  hover:underline
  hover:font-semibold
`;

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>로그인</div>
      <button onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="flex flex-col">
        <div>
          아이디
          <InputBt type="text" placeholder="아이디를 입력해주세요" />
        </div>
        <div>
          비밀번호
          <InputBt type="password" placeholder="비밀번호를 입력해주세요" />
        </div>
        <div>
          <LoginBt>로그인</LoginBt>
        </div>
        <div>
          다양한 혜택을 위해
          <SignupBt>
            <Link to="/signup">회원가입</Link>
          </SignupBt>
          하기!
        </div>
      </div>
    </>
  );
};

export default Login;

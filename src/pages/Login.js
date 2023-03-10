import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// user 정보 업데이트
import { useDispatch } from "react-redux";
import { loginUser } from "../reducer/userSlice";

// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const Login = () => {
  // 사용자 정보 수정을 위해서 정보를 가지고 옴.
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // 로그인 처리
  const signInFunc = (event) => {
    event.preventDefault();
    if (!id) {
      return alert("아이디를 입력하세요.");
    }
    if (!pw) {
      return alert("비밀번호를 입력하세요.");
    }
    let body = {
      ciId: id,
      ciPwd: pw,
    };
    axios
      .post("http://192.168.0.56:8888/member/login", body)
      .then((res) => {
        console.log(res.data.loginUser);
        dispatch(loginUser(res.data.loginUser));
        alert(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.message);
      });
  };

  return (
    <>
      <button onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} className="mb-10" />
      </button>
      <BigTitle>로그인</BigTitle>
      <div className="flex flex-col items-center">
        <div className="mb-5">
          <Title>아이디</Title>
          <InputBt
            className="placeholder:text-base pl-4 pb-3 mb-5 border-gray-300  focus:outline-none 
            focus:border-main 
            focus:ring-1 
            focus:ring-main"
            type="text"
            value={id}
            onChange={(event) => setId(event.target.value)}
            placeholder="아이디를 입력해주세요"
          />
        </div>
        <div>
          <Title>비밀번호</Title>
          <InputBt
            className="placeholder:text-base pl-4  pb-3  mb-1  border-gray-300  focus:outline-none 
            focus:border-main 
            focus:ring-1 
            focus:ring-main "
            type="password"
            value={pw}
            onChange={(event) => setPw(event.target.value)}
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <LoginBt onClick={(e) => signInFunc(e)}>
          <FontAwesomeIcon
            icon={faRightToBracket}
            style={{ marginRight: "20px" }}
          />
          로그인
        </LoginBt>
        <div style={{fontSize:"20px"}}>
          다양한 혜택을 위해
          <SignupBt>
            <Link to="/signup" className="px-2">
              회원가입
            </Link>
          </SignupBt>
          하기!
        </div>
      </div>
    </>
  );
};

const BigTitle = tw.div`
flex 
justify-center 
mb-10 
pr-3
text-3xl
font-semibold
text-stone-600
`;

const Title = tw.div`
flex
justify-start 
ml-3
text-xl
text-main
font-medium
`;
const InputBt = tw.input`
flex
justify-start
m-3
p-2
border-2
border-gray-300
rounded-lg
h-12
w-96
font-medium
text-xl
drop-shadow-md
`;
const LoginBt = tw.button`
w-[375px]
pr-6
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
const SignupBt = tw.button`
  hover:underline
  hover:font-semibold
  font-semibold
  rounded-lg
`;

export default Login;

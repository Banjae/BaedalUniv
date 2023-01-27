// Login page
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const Title = tw.div`
flex
justify-start 
ml-3
text-xl
text-main
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
`;

const LoginBt = tw.button`
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

const SignupBt = tw.button`
  hover:underline
  hover:font-semibold
  font-semibold
  pl-2
  pr-2
    rounded-lg
`;

const Login = () => {
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
        console.log(res.data);
        alert(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.message);
      });
  };

  const navigate = useNavigate();

  return (
    <>
      <Title
        className="flex justify-center mb-10 mr-10"
        style={{ color: "black" }}
      >
        <button onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faChevronLeft} className="pr-3" />
        </button>
        로그인
      </Title>

      <div className="flex flex-col items-center">
        <div className="mb-5">
          <Title>아이디</Title>
          <InputBt
            className="placeholder:text-sm placeholder:text-main pl-2 mb-1 border-main focus:outline-none "
            type="text"
            value={id}
            onChange={(event) => setId(event.target.value)}
            placeholder="아이디를 입력해주세요"
          />
        </div>

        <div>
          <Title>비밀번호</Title>
          <InputBt
            className="placeholder:text-base pl-2 mb-1  border-main focus:outline-none "
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

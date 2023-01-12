// Login page
import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";


// tailwind-styled-component
import tw from "tailwind-styled-components";

const Title = tw.div`
flex
justify-start 
ml-3
font-semibold
text-2xl
text-slate-700
`;

const InputBt = tw.input`
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

const LoginBt = tw.button`
bg-zinc-400
text-base
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
`;


const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // 로그인 처리
  const signInFunc =(event) =>{
    if (!id) {
      return alert("아이디를 입력하세요.");
    }
    if (!pw) {
      return alert("비밀번호를 입력하세요.");
    }
  }



  const navigate = useNavigate();

  return (
    <>
      <div>
        <button onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        로그인
      </div>

      <div className="flex flex-col items-center">
        <div>
          <Title>아이디</Title>
          <InputBt type="text"
          placeholder="아이디를 입력해주세요" />
        </div>

        <div>
          <Title>비밀번호</Title>
          <InputBt type="password" 
          placeholder="비밀번호를 입력해주세요" />
        </div>
      </div>

    
      <div>
      <FontAwesomeIcon icon={faChalkboardUser} />
        <LoginBt onClick={(e)=>signInFunc(e)}>
          로그인
        </LoginBt>
      </div>

      <div>
        다양한 혜택을 위해
        <SignupBt>
          <Link to="/signup">회원가입</Link>
        </SignupBt>
        하기!
      </div>
    </>
  );
};

export default Login;

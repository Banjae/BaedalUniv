import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// tailwind-styled-component
import tw from "tailwind-styled-components";
import axios from "axios";

const SIgnup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [nickName, setNickName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [uiSeq, setUiSeq] = useState([]);

  // 연속버튼을 막는 변수
  const [btFlag, setBtFlag] = useState(false);

  // 대학목록 리스트
  const [uniList, setUniList] = useState([]);

  const fetchData = async () => {
    await axios
      .get("http://192.168.0.56:8888/list/univ")
      .then((res) => {
        setUniList(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changeValue = (e) => {
    setUiSeq(e.target.value);
  };

  const registFunc = (e) => {
    e.preventDefault();
    //  빈문자열 일때, 경고창 띄우기
    if (!name) {
      alert("이름을 입력하세요");
      return;
    }
    if (!id) {
      alert("아이디를 입력하세요");
      return;
    }
    if (!pw) {
      alert("비밀번호를 입력하세요");
      return;
    } else if (pw.length < 8) {
      alert("비밀번호는 8자 이상 쓰래이");
      return;
    }
    if (!pwCheck) {
      alert(" 비밀번호 확인을 입력하세요");
      return;
    }
    // 비밀번호가 같은지 비교처리
    if (pw !== pwCheck) {
      alert("비밀번호는 같아야 합니다.");
      return;
    }
    if (!nickName) {
      alert(" 닉네임을 입력하세요");
      return;
    }
    if (!phoneNum) {
      alert(" 휴대번호를 입력하세요");
      return;
    }
    if (!birth) {
      alert(" 생년월일을 입력하세요");
      return;
    }
    if (!uiSeq) {
      alert(" 대학을 체크하세요");
      return;
    }
    if (!email) {
      alert(" 이메일을 입력하세요");
      return;
    }

    // 1. 아이디 검사요청
    if (!idCheck) {
      alert("아이디 중복검사를 해주세요.");
      return;
    }
    // 2. 닉네임 검사요청
    if (!nickNameCheck) {
      alert("닉네임 중복검사를 해주세요.");
      return;
    }
    // 3. 이메일 검사요청
    if (!emailCheck) {
      alert("이메일 중복검사를 해주세요.");
      return;
    }

    // 연속 클릭 막기 (회원가입 버튼 여러번 누르면 안되니까)
    setBtFlag(true);

    // 회원가입 완료전까지 서버 못넘어가게 막기
    if (
      name &&
      id &&
      pw &&
      pwCheck &&
      nickName &&
      phoneNum &&
      birth &&
      uiSeq &&
      email &&
      idCheck &&
      nickNameCheck &&
      emailCheck
    ) {
      let body = {
        ciId: id,
        ciPwd: pw,
        ciCheckPwd: pwCheck,
        ciName: name,
        ciNickName: nickName,
        ciEmail: email,
        ciPhone: phoneNum,
        ciBirthday: birth,
        ciUiSeq: uiSeq,
      };
      axios
        .post("http://192.168.0.56:8888/member/join", body)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          navigate("/Login");
        })
        .catch((err) => {
          console.log(err.response);
          alert(err.response.data.message);
          setBtFlag(false);
        });
    }
  };
  // 1. 아이디 중복검사
  const [idCheck, setIdCheck] = useState(false);
  const idCheckFn = (e) => {
    e.preventDefault();
    // 아이디 입력되었는지 체크
    if (!id) {
      alert("아이디를 입력해주세요");
      return;
    }
    // 아이디 존재 여부 파악
    const body = {
      ciId: id,
    };
    axios
      .post("http://192.168.0.56:8888/member/check/id", body)
      .then((response) => {
        // 서버에서 정상적 처리 완료
        if (response.data) {
          if (response.data) {
            // 등록가능
            // 사용자 중복체크 완료
            alert(response.data.message);
            setIdCheck(true);
          } else {
            // 등록 불가능
            alert(response.data.message);
            setIdCheck(false);
          }
        }
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.message);
      });
  };
  // 2. 닉네임 중복검사
  const [nickNameCheck, setNickNameCheck] = useState(false);
  const nickNameCheckFn = (e) => {
    e.preventDefault();
    // 닉네임 입력되었는지 체크
    if (!nickName) {
      alert("닉네임을 입력해주세요");
      return;
    }
    // 닉네임 존재 여부 파악
    const body = {
      ciNickName: nickName,
    };
    axios
      .post("http://192.168.0.56:8888/member/check/nickName", body)
      .then((response) => {
        // 서버에서 정상적 처리 완료
        if (response.data) {
          if (response.data) {
            // 등록가능
            // 사용자 중복체크 완료
            alert(response.data.message);
            setNickNameCheck(true);
          } else {
            // 등록 불가능
            alert(response.data.message);
            setNickNameCheck(false);
          }
        }
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.message);
      });
  };
  // 3. 이메일 중복검사
  const [emailCheck, setEmailCheck] = useState(false);
  const emailCheckFn = (e) => {
    e.preventDefault();
    // 이메일 입력되었는지 체크
    if (!email) {
      alert("이메일을 입력해주세요");
      return;
    }
    // 이메일 존재 여부 파악
    const body = {
      ciEmail: email,
    };
    axios
      .post("http://192.168.0.56:8888/member/check/email", body)
      .then((response) => {
        // 서버에서 정상적 처리 완료
        if (response.data) {
          if (response.data) {
            // 등록가능
            // 사용자 중복체크 완료
            alert(response.data.message);
            setEmailCheck(true);
          } else {
            // 등록 불가능
            alert(response.data.message);
            setEmailCheck(false);
          }
        }
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.message);
      });
  };
  // 전화번호 정규식표현
  const autoHypen = (target) => {
    target = target
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    setPhoneNum(target);
  };

  return (
    <>
      <button onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} className="mb-10" />
      </button>
      <Title
        className="flex justify-center mb-10 mr-10 "
        style={{ color: "black" }}
      >
        회원가입
      </Title>
      <div className="flex flex-col items-center">
        <div>
          <Title>이름</Title>
          <Bt>
            <input
              className="placeholder:text-base pl-2 mb-1  focus:outline-none"
              type="text"
              placeholder="이름을 입력해주세요"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Bt>
          <Title>아이디</Title>
          <Bt>
            <input
              className="placeholder:text-base pl-2 mb-1  focus:outline-none"
              type="text"
              placeholder="아이디를 입력해주세요"
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
              minLength={3}
            />
            <Check onClick={(e) => idCheckFn(e)}> 중복체크</Check>
          </Bt>
          <Title>비밀번호</Title>
          <Bt>
            <input
              className="placeholder:text-base pl-2 mb-1  focus:outline-none"
              type="password"
              required
              value={pw}
              maxLength={16}
              minLength={8}
              onChange={(e) => setPw(e.target.value)}
              placeholder="비밀번호를 입력해주세요"
            />
          </Bt>
          <Title>비밀번호 확인</Title>
          <Bt>
            <input
              className="placeholder:text-base pl-2 mb-1  focus:outline-none"
              type="password"
              required
              value={pwCheck}
              maxLength={16}
              minLength={8}
              onChange={(e) => setPwCheck(e.target.value)}
              placeholder="비밀번호를 확인해주세요"
            />
          </Bt>
          <Title>닉네임</Title>
          <Bt>
            <input
              className="placeholder:text-base pl-2 mb-1  focus:outline-none"
              type="text"
              placeholder="닉네임을 입력해주세요"
              required
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
              maxLength={10}
              minLength={2}
            />
            <Check onClick={(e) => nickNameCheckFn(e)}> 중복체크</Check>
          </Bt>
          <Title>휴대폰 번호</Title>
          <Bt>
            <input
              className="placeholder:text-base pl-2 mb-1  focus:outline-none"
              type="tell"
              required
              value={phoneNum}
              onChange={(e) => autoHypen(e.target.value)}
              maxLength={13}
              // onInput={autoHypen}
              placeholder="휴대폰 번호를 입력해주세요"
            />
          </Bt>
          <Title>생년월일</Title>
          <Bt>
            <input
              className="placeholder:text-base pl-2 mb-1  focus:outline-none"
              type="text"
              required
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
              placeholder="생년월일을 입력해주세요"
              maxLength={8}
            />
          </Bt>
          <Title htmlFor="service-select">서비스 이용장소</Title>
          <Bt style={{ fontSize: "16px", color: "gray" }}>
            <select
              name=""
              id="service-select"
              onChange={changeValue}
              className="focus:outline-none"
            >
              <option> -- 이용하실 대학을 선택해주세요 -- </option>
              {uniList.map((item, idx) => {
                return (
                  <option key={idx} value={item.uiSeq}>
                    {item.uiName}
                  </option>
                );
              })}
            </select>
          </Bt>
          <Title>이메일</Title>
          <Bt>
            <input
              className="placeholder:text-base pl-2 mb-1  focus:outline-none"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력해주세요"
            />
            <Check onClick={(e) => emailCheckFn(e)}> 중복체크</Check>
          </Bt>
        </div>
        <Join
          disabled={btFlag}
          onClick={(e) => {
            registFunc(e);
          }}
        >
          가입하기
        </Join>
      </div>
    </>
  );
};

const Title = tw.div`
flex
justify-start 
ml-3
text-xl
text-main
`;
const Bt = tw.div`
  flex
  justify-start
  m-3
  p-2
  border-2
  rounded-lg
  border-gray-300
  h-12
  font-medium
  text-xl
  bg-white
`;
const Check = tw.button`
text-xs
bg-main
text-white
rounded-lg
px-2
`;
const Join = tw.button`
w-[22%]
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

export default SIgnup;

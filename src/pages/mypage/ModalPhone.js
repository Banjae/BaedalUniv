import React from "react";
import { useState } from "react";

// user 정보 가져오기
import { useSelector } from "react-redux";

// tailwind-styled-component
import tw from "tailwind-styled-components";

import axios from "axios";

const Modal = ({ title, name }) => {
  const user = useSelector((state) => state.user);
  const [showModal, setShowModal] = React.useState(false);
  const [phone, setPhone] = useState("");

  // 1. 전화번호 중복검사
  const [phoneCheck, setPhoneCheck] = useState(false);
  const phoneCheckFn = (e) => {
    e.preventDefault();
    // 전화번호 입력되었는지 체크
    if (!phone) {
      alert("전화번호를 입력해주세요");
      return;
    }
    // 전화번호 존재 여부 파악
    const body = {
      ciPhone: phone,
    };
    axios
      .post("http://192.168.0.56:8888/member/check/phone", body)
      .then((response) => {
        // 서버에서 정상적 처리 완료
        if (response.data) {
          if (response.data) {
            alert(response.data.message);
            setPhoneCheck(true);
          } else {
            alert(response.data.message);
            setPhoneCheck(false);
          }
        }
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.message);
      });
  };

  // 2. 전화번호 변경요청
  const phoneUpdateFn = (e) => {
    e.preventDefault();
    if (!phone) {
      alert("전화번호를 입력하세요.");
      return;
    }
    // 전화번호 검사 요청
    if (!phoneCheck) {
      alert("전화번호 중복검사를 해주세요.");
      return;
    }

    const num = user.ciSeq;

    const body = {
      ciPhone: phone,
    };
    axios
      .post("http://192.168.0.56:8888/member/update/phone?ciSeq=" + num, body)
      .then((response) => {
        if (response.data) {
          if (response.data) {
            alert(response.data.message);
          } else {
            alert(response.data.message);
          }
        }
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.message);
      });
  };
  // 전화번호 정규식 표현
  const autoHypen = (target) => {
    target = target
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    setPhone(target);
  };

  return (
    <>
      <Change
        onClick={() => setShowModal(true)}
        className="w-32 justify-center"
      >
        {name}수정
      </Change>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold mb-10">
                    {user.ciName}
                    <span style={{ fontSize: "25px" }}> {title}</span>
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span
                      className="bg-transparent 
                      h-6 w-6 text-2xl inline-block 
                      z-10 ml-2 opacity-1"
                    >
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <Title style={{ margin: "40px" }}>{user.ciPhone}</Title>
                <Bt>
                  <input
                    className="placeholder:text-base pl-2 mb-1"
                    type="tel"
                    placeholder={`변경할 ${name}을 입력해주세요`}
                    required
                    value={phone}
                    onChange={(e) => autoHypen(e.target.value)}
                    maxLength={13}
                    minLength={2}
                  />
                  <Check onClick={(e) => phoneCheckFn(e)}>중복체크</Check>
                </Bt>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-black-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    취소
                  </button>
                  <button
                    className="bg-main text-white active:bg-main font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={(e) => phoneUpdateFn(e)}
                  >
                    변경
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

const Title = tw.div`
flex
justify-start 
ml-3
font-semibold
text-2xl
text-slate-700
`;
const Change = tw.div`
flex
justify-start
m-3
p-2
border-2
h-12
text-lg
cursor-pointer
rounded-lg
bg-main
text-white
`;
const Bt = tw.div`
  flex
  justify-between
  m-3
  p-2
  border-2
  border-gray-300
  h-12
  font-medium
  text-xl
  cursor-pointer
  rounded-lg
`;
const Check = tw.button`
text-xs
bg-main
text-white
rounded-lg
px-2
`;

export default Modal;

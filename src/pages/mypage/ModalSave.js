import React, { useState } from "react";

// tailwind-styled-component
import tw from "tailwind-styled-components";

// user 정보 가져오기
import { useSelector } from "react-redux";

const ModalSave = ({ name }) => {
  const user = useSelector((state) => state.user);
  const [showModal, setShowModal] = React.useState(false);
  const [nickName, setNickName] = useState("");

  return (
    <>
      <Change onClick={() => setShowModal(true)} className="w-32 justify-center">아낀 배달비</Change>
      {showModal ? (
        <>
          <div className=" flex justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex flex-col  items-center w-full border-0 rounded-lg shadow-lg bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center">
                  <h2 className=" text-xl font-semibold m-10">
                    내가 아낀 배달비 조회
                  </h2>
                  <button
                    className="bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span
                      className="bg-transparent 
                      absolute right-5 top-5
                        h-6 w-6 text-2xl  
                        z-10 opacity-1"
                    >
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="mb-12 px-10 py-3 border-2 border-red-400  rounded-2xl">
                  <div
                    className="mb-2"
                    value={nickName}
                    onChange={(e) => setNickName(e.target.value)}
                  >
                    <span className="text-xl font-extrabold">{user.ciNickName}</span> 님이
                    지금까지
                    <br />
                  </div>
                  <div className="pl-10">
                    <span className="text-xl font-extrabold">'배달대'</span>로
                    아낀 배달비는?
                  </div>
                </div>
                <div className="border-b-4  border-orange-600">
                  총 <span className="text-3xl font-extrabold ">0원</span>
                </div>
                {/*footer*/}
                <div className="text-center mt-10 p-10  ">
                  <div className="border-2 p-4 rounded-md">
                    <div className="border-2 p-2 rounded-md bg-main text-white">
                      배달대에서 주문해야하는 이유! 요기있네?
                    </div>
                    <div>
                      해당 금액은{" "}
                      <span className="text-xl font-extrabold">{user.ciNickName}</span>{" "}
                      회원님이
                      <br />
                      배달비 0원
                      <span className="text-xl font-extrabold">'배달대'</span>
                      주문으로 아낀 배달비입니다. <br />
                      (각 상점별 주문건수 x 타 앱 평균배달비 3,000원)
                    </div>
                  </div>
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

const Change=tw.div`
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
`

export default ModalSave;

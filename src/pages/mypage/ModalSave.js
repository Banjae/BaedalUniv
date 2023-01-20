import React from "react";

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

const ModalSave = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Bt onClick={() => setShowModal(true)}>아낀 배달비</Bt>
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
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span
                      className="bg-transparent 
                         h-6 w-6 text-2xl  
                        z-10 opacity-1"
                    >
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="mb-12 px-10 py-3 border-2 border-red-400  rounded-2xl">
                  <div className="mb-2">
                    <span className="text-xl font-extrabold">닉네임</span> 님이
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
                  <div className="border-2 p-2">
                    <div className="border-2 p-2 bg-main text-white">
                      배달대에서 주문해야하는 이유! 요기있네?
                    </div>
                    <div>
                      해당 금액은{" "}
                      <span className="text-xl font-extrabold">닉네임</span>{" "}
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

export default ModalSave;

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
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t ">
                  <h2 className=" text-xl font-semibold mb-2 ">
                    내가 아낀 배달비 조회
                  </h2>
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
                <div>닉네임 님이 지금까지 '배달대'로 아낀 배달비는?</div>
                <div>총0원</div>
                {/*footer*/}
                <div className="flex items-center justify-center border-2 mt-10 ">
                  <div>
                    <div>배달대에서 주문해야하는 이유! 요기있네?</div>
                    <div>
                      {`해당 금액은 닉네임 회원님이 배달비 0원 '배달대' 주문으로
                      아낀 배달비입니다. (각 상점별 주문건수 x 타 앱 평균배달비
                      3,000원)`}
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
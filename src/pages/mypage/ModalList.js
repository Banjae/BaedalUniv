import React from "react";
import food from "../../assets/brand.jpg";

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

const Change=tw.div`
flex
justify-start
m-3
p-2
border-2
h-12
font-medium
text-lg
cursor-pointer
rounded-lg
bg-main
text-white
`




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
  cursor-pointer
  rounded-lg
`;

const TAILWINDBT =
  "px-6 py-2 bg-main rounded-md text-white hover:scale-105 transition-all";

const ModalList = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Change onClick={() => setShowModal(true)} className="w-32 justify-center">주문 내역</Change>
      {showModal ? (
        <>
          <div
            className="justify-center items-center
           flex 
           overflow-x-hidden 
           overflow-y-auto
            fixed
             inset-0 
             z-50 
             outline-none
              focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div
                className="border-0
               rounded-lg 
               shadow-lg 
               relative
                flex flex-col 
                w-full
             bg-white
              outline-none
                   focus:outline-none"
              >
                {/*header*/}
                <div
                  className="flex items-start justify-between 
                
                p-5 border-b 
                border-solid
                 border-slate-200 rounded-t"
                >
                  <h3 className="mt-10  ml-28 text-3xl font-semibold mb-4 border-b-4 border-main">
                    배달 · 포장/방문
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
                <div className="w-96 m-10">
                  <div>
                    <div className="pl-2 mb-2">
                      <img src={food} className="w-14 h-14" alt="가게사진" />
                      가게 이름
                    </div>
                    <div
                      className="flex justify-between 
                    "
                    >
                      <button className={TAILWINDBT}>리뷰쓰기</button>
                      <button className={TAILWINDBT}>가게보기</button>
                      <button className={TAILWINDBT}>주문상세</button>
                    </div>
                  </div>
                  <div>
                    <div className="pl-2 mb-2">
                      <img src={food} className="w-14 h-14" alt="가게사진" />
                      가게 이름
                    </div>
                    <div className="flex justify-between">
                      <button className={TAILWINDBT}>리뷰쓰기</button>
                      <button className={TAILWINDBT}>가게보기</button>
                      <button className={TAILWINDBT}>주문상세</button>
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

export default ModalList;

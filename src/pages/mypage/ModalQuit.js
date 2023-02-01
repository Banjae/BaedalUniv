// 회원탈퇴 서버코드는 todo_mongo > UseInfo 에서 참고

import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// tailwind-styled-component
import tw from "tailwind-styled-components";
import { useSelector } from "react-redux";

const ModalQuit = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);

  // 회원 탈퇴
  const user = useSelector((state) => state.user);
  const num = user.ciSeq;

  const registOutFunc = () => {
    axios
      .delete("http://192.168.0.56:8888/member/delete?ciSeq=" + num)
      .then((response) => {
        if (response.data.message) {
          alert("회원 탈퇴하였습니다.");
          navigate("/login");
        } else {
          // 회원정보 삭제 실패
          console.log("회원정보 삭제 실패시에는 다시 저장을 도전한다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Out onClick={() => setShowModal(true)} className="mt-10">
        회원탈퇴
      </Out>
      {showModal ? (
        <>
          <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t ">
                  <h2 className="text-3xl font-semibold mb-2 pl-4 ">
                    탈퇴전, 꼭 확인해주세요!!!
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
                <Title className=" " style={{ margin: "30px", width: "400px" }}>
                  - 탈퇴 후 재가입하더라도 이전 회원정보, 주문정보 및 등은
                  복구되지 않음
                  <br />
                  <br />
                  -이에 탈퇴 전 모두 소진하거나 환불신청을 해야하며,
                  환불신청없이 자진 탈퇴하고자 하는 경우 회사는 이에 대한
                  소멸동의를 받은것으로 간주함
                  <br />
                  <br />
                  -탈퇴 시, 회원정보 및 서비스 이용기록은 삭제되며 삭제된
                  데이터는 복구가 불가능함
                  <br />
                  <br />
                  -다만 법령에 의해 보관해야 하는 경우와 서비스 부정 사용 등
                  회사 내부정책에 의해 보관해야 하는 경우는, 탈퇴 후에도
                  일정기간 법령에 근거해 보관하며 이는 개인정보 처리방침에서
                  확인가능 함
                </Title>
                {/*footer*/}
                <div
                  className="flex items-center 
                justify-center 
                border-t  "
                >
                  <Out className="" type="button" onClick={registOutFunc}>
                    탈퇴하기
                  </Out>
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
mx-3
font-semibold
text-lg
text-slate-600
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
my-5
`;

export default ModalQuit;

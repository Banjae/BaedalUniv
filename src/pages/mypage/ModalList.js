import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import instance from "../../api/axios";
import request from "../../api/requset";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const ModalList = () => {
  const [myReview, setMyReview] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  const params = {
    ciSeq: user.ciSeq,
  };

  const fetchData = async () =>
    await instance
      .get(request.history, { params })
      .then((res) => {
        console.log(res.data.data);
        setMyReview(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

  useEffect(() => {
    fetchData();
  }, []);

  const goToReview = (bmocSeq) => {
    navigate("/review", { state: bmocSeq });
  };

  return (
    <>
      <Change
        onClick={() => setShowModal(true)}
        className="w-32 justify-center"
      >
        주문 내역
      </Change>
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
                <div
                  className="flex items-start justify-between 
                  p-5 border-b 
                  border-solid
                  border-slate-200 
                  rounded-t"
                >
                  <h3 className="mt-10  ml-28 text-3xl font-semibold mb-4 border-b-4 border-main">
                    나의 주문내역
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

                <div className="w-96 m-10">
                  {myReview.map((ele) => {
                    const reviewList = ele.menuList;
                    return (
                      <div key={ele.biNumber}>
                        {reviewList.map((ele, idx) => {
                          return (
                            <div key={idx}>
                              <div className="my-3">
                                <p className="font-bold text-xl">
                                  {ele.siName}
                                </p>
                              </div>
                              <div className="flex justify-between">
                                <button
                                  onClick={(e) => goToReview(ele.bmocSeq)}
                                  className={TAILWINDBT}
                                >
                                  리뷰쓰기
                                </button>
                                <button className={TAILWINDBT}>가게보기</button>
                                <button className={TAILWINDBT}>주문상세</button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
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

const Change = tw.div`
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
`;
const TAILWINDBT =
  "px-6 py-2 bg-main rounded-md text-white hover:scale-105 transition-all";

export default ModalList;

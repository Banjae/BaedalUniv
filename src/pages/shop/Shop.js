// shop Detail page
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShopInfo from "./ShopInfo";
import ShopMenu from "./ShopMenu";
import ShopReview from "./ShopReview";
import Arrow from "../../assets/ic_list_d_arrow.png";
import OrderTable from "../../components/OrderTable";
import instance from "../../api/axios";
import request from "../../api/requset";

import { RxDividerVertical } from "react-icons/rx";
import DetailStarRating from "./DetailStarRating";

// tailwind-styled-component
import tw from "tailwind-styled-components";

// FontAwesome Icon 적용
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

// 임시 이미지
import food from "../../assets/food.jpg";

const Detail = () => {
  const { siSeq } = useParams();
  const [storeNmae, setStoreName] = useState("");
  const [menuList, setMenuList] = useState([]);

  const params = {
    siSeq: siSeq,
  };

  const fetchData = async () => {
    await instance
      .get(request.shopinfo, { params })
      .then((res) => {
        setStoreName(res.data.store);
        setMenuList(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [click, setClick] = useState(0);

  return (
    <>
      <ShopContainer>
        <div className="w-[70%] md:w-[100%]">
          <div className="flex justify-between gap-5">
            <img src={food} alt="img" className="w-[30%]" />
            <div className="flex-col text-center bg-white py-2">
              <p className="text-2xl tracking-wide">{storeNmae}</p>
              <div className="flex justify-center items-center py-5">
                <div className="flex items-center">
                  <DetailStarRating starRatio={4.6} />
                  <p className="text-2xl pl-2">4.6</p>
                </div>
              </div>
              <div>
                <span className="block text-sm ">
                  최소주문금액{" "}
                  <span className="line-through decoration-orange-600">
                    5,000원
                  </span>{" "}
                  0원
                  {/* <FontAwesomeIcon
              icon={faArrowRightLong}
              className="absolute top-1 right-7 text-red-600 text" /> */}
                </span>

                <span className="text-sm">
                  배달비
                  <span className="line-through decoration-orange-600">
                    4,000원
                  </span>
                  0원
                </span>
              </div>
              <div className="flex justify-center text-2xl tracking-wide mb-2">
                주문마감 {siSeq.storeCloseTime}
                <RxDividerVertical style={{ marginTop: "4px" }} /> 음식수령
                18:10
              </div>
              {/* 나중에  링크로 이동시켜줘야함 */}
              {/* <div></div> 를 <Link to="/"></Link> 수정*/}
              <div className="flex justify-center">
                <div className="flex justify-center w-[70%] md:[90%] h-10 bg-gray-200 rounded-xl p-2 ">
                  <span className="overflow-hidden text-ellipsis">
                    <strong>사장님알림</strong>☆ 전체부분 맛집랭킹 1위 항상
                    사랑해주시는 고객님들께 감사드리며 매일 더 노력하는 멘부리가
                    되겠습니다☆ ☆리뷰약속이벤트☆ 리뷰약속이벤트는 요청사항
                    기재가 아닌 메뉴란에서 선택 부탁드립니다. ☆음식에 문제가
                    있거나 궁금하신 점은 언제든지 가게로 연락주세요. #정직하게
                    #양심있게 #맛있게
                  </span>
                  <button
                    className="w-6 h-6 ml-2 font-2xl"
                    onClick={() => {
                      setClick(2);
                    }}
                  >
                    <img src={Arrow} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <ShopBt>
            <button
              onClick={() => {
                setClick(0);
              }}
            >
              메뉴
            </button>
            <button
              onClick={() => {
                setClick(1);
              }}
            >
              리뷰
            </button>
            <button
              onClick={() => {
                setClick(2);
              }}
            >
              정보
            </button>
          </ShopBt>
          <div className="mt-4 flex justify-center">
            <div className={click === 0 ? "block" : "hidden"}>
              <ShopMenu menuList={menuList} />
            </div>
            <div className={click === 1 ? "block" : "hidden"}>
              <ShopReview />
            </div>
            <div className={click === 2 ? "block" : "hidden"}>
              <ShopInfo />
            </div>
          </div>
          {/* {detailArr.map((ele, index) => {
              return click === index ? (
                <OnBox>
                  <Link
                    to={ele.link}
                    key={index}
                    onClick={() => shopClickFunc(index)}
                  >
                    {ele.title}
                  </Link>
                </OnBox>
              ) : (
                <OffBox>
                  <Link
                    to={ele.link}
                    key={index}
                    onClick={() => shopClickFunc(index)}
                  >
                    {ele.title}
                  </Link>
                </OffBox>
              );
            })} */}

          {/* <div className="bg-white flex justify-center w-full">
            <Routes>
              <Route index element={<ShopMenu />} />
              <Route path="menu" element={<ShopMenu />} />
              <Route path="info" element={<ShopInfo />} />
              <Route path="review" element={<ShopReview />} />
            </Routes>
          </div> */}
        </div>
        <OrderTable />
      </ShopContainer>
    </>
  );
};

const ShopContainer = tw.div`
  w-4/5
  my-0
  mx-auto
  flex
  gap-5
`;

const ShopBt = tw.div`
  flex
  justify-around
  items-center
  h-10  
  mt-3
  bg-white
`;

export default Detail;

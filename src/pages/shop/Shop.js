// shop Detail page
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
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
  const location = useLocation();
  const utiSeq = location.state;
  const { siSeq } = useParams();
  const goToAbout = useRef();
  const [click, setClick] = useState(0);
  const [stdSeq, setStdSeq] = useState();
  const [imgUri, setImgUri] = useState();
  const [infoArr, setInfoArr] = useState([]);

  const params = {
    siSeq: siSeq,
    utiSeq: utiSeq,
  };

  const fetchData = async () => {
    await instance
      .get(request.shopinfo, { params })
      .then((res) => {
        setImgUri(res.data.data.simgUriCover);
        setInfoArr(res.data.data);
        setStdSeq(res.data.data.stdSeq);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [siSeq, utiSeq]);

  return (
    <>
      <ShopContainer>
        <div className="w-[80%] md:w-[90%]">
          <div className="flex justify-between gap-5">
            <img
              src={`http://192.168.0.56:8888/download/store/${imgUri}`}
              alt="img"
              className="w-[30%]"
            />
            <div className="flex-col text-center bg-white w-full py-2">
              <p className="text-2xl tracking-wide">{infoArr.siName}</p>
              <div className="flex justify-center items-center py-5">
                <div className="flex items-center">
                  <DetailStarRating starRatio={4.6} />
                  <p className="text-2xl pl-2">4.6</p>
                </div>
              </div>
              <ShopPriceBox>
                <ShopPrice>
                  <span className="block text-md ">최소주문금액</span>
                  <div>
                    <span className="line-through decoration-orange-600">
                      {infoArr.minOrderPrice}원
                    </span>
                    <span className="ml-2">0원</span>
                  </div>
                </ShopPrice>
                <ShopPrice>
                  <span className="text-md">배달비</span>
                  <div>
                    <span className="line-through decoration-rose-600">
                      {infoArr.deliveryPrice}원
                    </span>
                    <span className="ml-2">0원</span>
                  </div>
                </ShopPrice>
              </ShopPriceBox>
              <div className="flex justify-center text-2xl tracking-wide mb-2">
                주문마감 {infoArr.storeCloseTime}
                <RxDividerVertical style={{ marginTop: "4px" }} />
                음식수령 {infoArr.utiDeliveryTime}
              </div>

              <div className="flex justify-center">
                <div className="flex justify-center w-[70%] md:[90%] h-10 bg-gray-200 rounded-lg p-2 ">
                  <span className="overflow-hidden text-ellipsis">
                    <strong>사장님알림</strong>
                    {infoArr.ownerWord === "" ? "없어" : infoArr.ownerWord}
                  </span>
                  <button
                    className="w-6 h-6 ml-3 font-2xl"
                    onClick={() => {
                      setClick(2);
                      goToAbout.current.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <img src={Arrow} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <ShopAbout ref={goToAbout}>
            <ShopAboutBt
              className={click === 0 ? "border-main" : "border-white"}
              onClick={() => {
                setClick(0);
                goToAbout.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              메뉴
            </ShopAboutBt>

            <ShopAboutBt
              className={click === 1 ? "border-main" : "border-white"}
              onClick={() => {
                setClick(1);
                goToAbout.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              리뷰
            </ShopAboutBt>

            <ShopAboutBt
              className={click === 2 ? "border-main" : "border-white"}
              onClick={() => {
                setClick(2);
                goToAbout.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              정보
            </ShopAboutBt>
          </ShopAbout>

          <ShopMRI>
            <div className={click === 0 ? "block" : "hidden"}>
              <ShopMenu stdSeq={stdSeq} />
            </div>
            <div className={click === 1 ? "block" : "hidden"}>
              <ShopReview />
            </div>
            <div className={click === 2 ? "block" : "hidden"}>
              <ShopInfo utiSeq={utiSeq} />
            </div>
          </ShopMRI>
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

const ShopAbout = tw.div`
  flex
  justify-around
  items-center
  h-10  
  mt-3
  bg-white
`;

const ShopAboutBt = tw.button`
  border-b-2
  w-full
  h-full
`;

const OffShopAboutBt = tw.button`
  border-b-2
  border-white
  w-full
  h-full
`;

const ShopMRI = tw.div`
  w-full
  h-full
`;

const ShopPriceBox = tw.div`
  my-1
  mx-auto
  w-[50%]
`;

const ShopPrice = tw.div`
  flex
  justify-between
  w-full
`;

export default Detail;

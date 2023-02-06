import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { cartAdd } from "../../reducer/cartSlice";
import { cartLookup } from "../../reducer/cartSlice";
import { useNavigate } from "react-router";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const ShopDetail = ({
  menuSeq,
  setShowModal,
  showModal,
  stdSeq,
  setToTable,
  toTable,
}) => {
  const [option, setOption] = useState("");
  const [optionList, setOptionList] = useState([]);
  const [count, setCount] = useState(1);
  const [checkList, setCheckList] = useState([]);
  const [optionPriceCheck, setOprionPriceCheck] = useState({});
  const [fdoSeqList, setFdoSeqList] = useState([]);
  const user = useSelector((state) => state.user);
  const params = {
    menuSeq: menuSeq,
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const optionData = async () => {
    try {
      const res = await axios.get(
        "http://192.168.0.56:8888/store/menu/selectOption",
        { params }
      );
      setOption(res.data.data);
      setOptionList(res.data.data.optionList);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    optionData();
    document.body.style.cssText = `
    position: fixed;
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  const onIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const onDecrease = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const handleCheck = (e) => {
    const { checked, id, value } = e.target;
    if (checked) {
      setCheckList([...checkList, id]);
      setOprionPriceCheck({ ...optionPriceCheck, [id]: value });
      setFdoSeqList([...fdoSeqList, e.target.id]);
    } else {
      setCheckList(checkList.filter((el) => el !== id));
      setOprionPriceCheck({ ...optionPriceCheck, [id]: 0 });
    }
  };
  let priceCheck = Object.values(optionPriceCheck)
    .map((price) => parseInt(price))
    .reduce((sum, value) => (sum += value), 0);
  // console.log(priceCheck);
  const popOff = () => {
    setShowModal(!showModal);
  };
  const body = {
    ciSeq: user.ciSeq,
    stdSeq: stdSeq,
    fmiSeq: menuSeq,
    fdoSeqList: fdoSeqList,
    count: count,
  };
  const goToCart = () => {
    axios
      .post("http://192.168.0.56:8888/order/basket", body)
      .then((res) => {
        console.log(res.data);
        dispatch(cartLookup(res.data.data));
        setToTable(!toTable);
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(cartAdd(body));
    setShowModal(!showModal);
    setToTable(toTable + 1);
  };
  const goToOrder = (e) => {
    axios
      .post("http://192.168.0.56:8888/order/basket", body)
      .then((res) => {
        console.log(res.data);
        dispatch(cartLookup(res.data.data));
        setToTable(!toTable);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/order");
  };
  function priceToString(price) {
    if (price === undefined || price === null) return;
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>
      <SDbackground onClick={(e) => e.stopPropagation()}>
        <SDmodal>
          <Xbt onClick={popOff}>
            <FontAwesomeIcon className="text-black mr-5 " icon={faXmark} />
          </Xbt>
          <div className="flex flex-col justify-center items-center bg-main h-20">
            <div className="flex justify-center items-center text-white font-medium">
              옵션선택
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-start">
                <Title>{option.name}</Title>
                <div>{option.explain}</div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-10 mt-3">
              <div className="flex items-center">
                <input type="radio" defaultChecked className="mr-1  w-4 h-4" />
                <span>기본</span>
              </div>
              <div>{priceToString(option.discountPrice)}원</div>
            </div>
            <Line />
            <div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center items-center">
                  <div className="flex flex-col justify-start">
                    {optionList.map((list, index) => (
                      <div key={index}>
                        <Title>{list.optionCateName}</Title>
                        <div>
                          {list.isDuplicated === 2 ? (
                            <div>
                              {list.detailOptionList.map((list, index) => (
                                <div
                                  key={index}
                                  className="flex justify-between"
                                >
                                  <div className="flex justify-center items-center">
                                    <input
                                      type="checkbox"
                                      id={list.optionSeq}
                                      name={list.optionName}
                                      value={list.optionPrice}
                                      onChange={handleCheck}
                                      className="w-4 h-4 mt-0.5"
                                      checked={
                                        checkList.includes(
                                          list.optionSeq.toString()
                                        )
                                          ? true
                                          : false
                                      }
                                    />
                                    <label className="ml-2">
                                      {list.optionName}
                                    </label>
                                  </div>
                                  <span>
                                    {priceToString(list.optionPrice)}원
                                  </span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div>
                              {list.detailOptionList.map((list, index) => (
                                <div
                                  key={index}
                                  className="flex justify-between"
                                >
                                  <div className="flex justify-center items-center">
                                    <input
                                      type="radio"
                                      id={list.optionSeq}
                                      name="check"
                                      value={list.optionPrice}
                                      onChange={handleCheck}
                                      className="appearnce-none w-4 h-4 mt-0.5"
                                      checked={
                                        checkList.includes(
                                          list.optionSeq.toString()
                                        )
                                          ? true
                                          : false
                                      }
                                    />
                                    <label className="ml-2">
                                      {list.optionName}
                                    </label>
                                  </div>
                                  <span>
                                    {priceToString(list.optionPrice)}원
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <Line />
                      </div>
                    ))}
                  </div>
                </div>
                <Title className="flex justify-center gap-4">
                  <div>수량</div>
                  <div className="flex gap-1.5">
                    <button onClick={onDecrease}>
                      <FontAwesomeIcon icon={faCaretLeft} />
                    </button>
                    {count}
                    <button onClick={onIncrease}>
                      <FontAwesomeIcon icon={faCaretRight} />
                    </button>
                  </div>
                </Title>
              </div>
            </div>
            <Title className="flex justify-center">
              <span>합계</span>
              <span className="ml-4">
                {priceToString((option.price + priceCheck) * count)}
              </span>
              <span>원</span>
            </Title>
            <div className="flex justify-center mb-10 w-full">
              <div className="w-2/3">
                <div className="flex justify-center">
                  <button
                    className="w-1/2 h-16 font-semibold rounded-lg border-gray-300 rounded-lg mx-5
                    border-2"
                    onClick={goToCart}
                  >
                    장바구니 추가
                  </button>
                  <button
                    className="bg-main text-white w-1/2 h-16 font-semibold rounded-lg border-solid mx-5"
                    onClick={goToOrder}
                  >
                    주문하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SDmodal>
      </SDbackground>
    </>
  );
};
const SDbackground = tw.div`
  fixed
  top-0
  left-0
  bottom-0
  right-0
  bg-[rgba(0,0,0,0.3)]
  z-20
`;
const SDmodal = tw.div`
  absolute
  bg-white
  top-[10%]
  bottom-[10%]
  left-[30%]
  rigth-[30%]
  w-[40%]
  h-[80%]
  overflow-scroll
  rounded-lg
`;
const Xbt = tw.button`
  fixed
  right-[31%]
  top-[11%]
`;
const Line = tw.div`
border-t-2
mb-5
mt-5
`;
const Title = tw.div`
font-semibold
text-2xl
text-slate-700
mb-5
mt-5
`;
export default ShopDetail;

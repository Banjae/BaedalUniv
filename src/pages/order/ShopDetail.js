import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAdd } from "../../reducer/cartSlice";
import { cartLookup } from "../../reducer/cartSlice";
import { useNavigate } from "react-router";

// Fontawsome icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
  const body = {
    ciSeq: user.ciSeq,
    stdSeq: stdSeq,
    fmiSeq: menuSeq,
    fdoSeqList: fdoSeqList,
    count: count,
  };
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
  // const img = () => {
  //   axios
  //     .get("http://192.168.0.56:8888/download/food/{uri}")
  //     .then((res) => {})
  //     .catch((err) => {});
  // };
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
  const goToOrder = () => {
    dispatch();
    navigate("/order");
  };
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
          <div className="flex flex-col justify-center item-center">
            <div className="">
              <div className="flex justify-center item-center w-80">
                <div className="flex flex-col justify-start">
                  <Title>{option.name}</Title>
                  <div>{option.explain}</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between item-center m-0 w">
              <div>
                <input type="radio" defaultChecked className="mr-2" />
                <span>기본</span>
              </div>
              <div>{option.discountPrice}원</div>
            </div>
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
                                  <div>
                                    <input
                                      type="checkbox"
                                      id={list.optionSeq}
                                      name={list.optionName}
                                      value={list.optionPrice}
                                      onChange={handleCheck}
                                      checked={
                                        checkList.includes(
                                          list.optionSeq.toString()
                                        )
                                          ? true
                                          : false
                                      }
                                    />
                                    <span className="ml-2">
                                      {list.optionName}
                                    </span>
                                  </div>
                                  <span>{list.optionPrice}원</span>
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
                                  <div>
                                    <input
                                      type="radio"
                                      id={list.optionSeq}
                                      name="check"
                                      value={list.optionPrice}
                                      onChange={handleCheck}
                                      checked={
                                        checkList.includes(
                                          list.optionSeq.toString()
                                        )
                                          ? true
                                          : false
                                      }
                                    />
                                    <span className="ml-2">
                                      {list.optionName}
                                    </span>
                                  </div>
                                  <span>{list.optionPrice}원</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Title className="flex justify-between">
                  <div>수량</div>
                  <div className="">
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
              합계 {(option.price + priceCheck) * count}원
            </Title>
            <div className="flex justify-center item-center">
              <button className="w-1/2 h-16" onClick={goToCart}>
                장바구니
              </button>
              <button
                className="bg-main text-white w-1/2 h-16"
                onClick={goToOrder}
              >
                주문하기
              </button>
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

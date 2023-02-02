import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const ShopDetail = ({ menuSeq, setShowModal, showModal }) => {
  const [option, setOption] = useState("");
  const [optionList, setOptionList] = useState([]);
  const [count, setCount] = useState(1);
  const [checkList, setCheckList] = useState([]);
  const [optionPriceCheck, setOprionPriceCheck] = useState({});

  const params = {
    menuSeq: menuSeq,
  };

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

  return (
    <>
      <SDbackground onClick={(e) => e.stopPropagation()}>
        <SDmodal>
          <Xbt onClick={popOff}>닫기</Xbt>
          <div className="flex flex-col justify-center items-center">
            <div>title</div>
            <div className="사진"></div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-start">
              <div className="font-semibold">{option.name}</div>
              <div>{option.explain}</div>
            </div>
          </div>
          <div className="flex justity-between">
            <div>
              <input type="radio" defaultChecked />
              <span>기본</span>
            </div>
            <div>{option.price}원</div>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-start items-start">
                {optionList.map((list, index) => (
                  <div key={index} className="mt-8 mb-8">
                    <div className="font-semibold mb-2">
                      {list.optionCateName}
                    </div>
                    {list.detailOptionList.map((list, index) => (
                      <div key={index} className="flex justify-between">
                        <div className="mb-0.5">
                          <input
                            type="checkbox"
                            id={list.optionSeq}
                            name={list.optionName}
                            value={list.optionPrice}
                            onChange={handleCheck}
                            checked={
                              checkList.includes(list.optionSeq.toString())
                                ? true
                                : false
                            }
                          />
                          <span className="ml-2">{list.optionName}</span>
                        </div>
                        <span>{list.optionPrice}원</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="수량">
              <div>
                <button onClick={onDecrease}>
                  <FontAwesomeIcon icon={faCaretLeft} />
                </button>
                {count}
                <button onClick={onIncrease}>
                  <FontAwesomeIcon icon={faCaretRight} />
                </button>
              </div>
              <div>{(option.price + priceCheck) * count}</div>
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

export default ShopDetail;

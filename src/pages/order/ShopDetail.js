import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import tw from "tailwind-styled-components";
import { useDispatch, useSelector } from "react-redux";
import { cartAdd } from "../../reducers/cartSlice";
import { Navigate, useNavigate } from "react-router";

const ShopDetail = () => {
  const [option, setOption] = useState("");
  const [optionList, setOptionList] = useState([]);
  const [count, setCount] = useState(1);
  const [checkList, setCheckList] = useState([]);
  const [optionPriceCheck, setOprionPriceCheck] = useState({});
  const cart = useSelector((state) => state.cart);

  console.log(cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [radioPriceCheck, setRadioPriceCheck] = useState([]);
  const optionData = async () => {
    try {
      const res = await axios.get(
        "http://192.168.0.56:8888/store/menu/selectOption?menuSeq=17"
      );
      setOption(res.data.data);
      setOptionList(res.data.data.optionList);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    optionData();
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
      // setRadioPriceCheck({ ...radioPriceCheck, [id]: value, type });
    } else {
      setCheckList(checkList.filter((el) => el !== id));
      setOprionPriceCheck({ ...optionPriceCheck, [id]: 0 });
      // setRadioPriceCheck({ ...radioPriceCheck, [id]: value, type });
    }
  };

  let priceCheck = Object.values(optionPriceCheck)
    .map((price) => parseInt(price))
    .reduce((sum, value) => (sum += value), 0);
  // const radioCheck = [
  //   // ...Object.values(radioPriceCheck),
  //   ...Object.values(checkList),
  // ].toString();
  // console.log(priceCheck);

  const goToCart = () => {
    dispatch(cartAdd());
  };

  const goToOrder = () => {
    dispatch();
    navigate("/order");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div>옵션선택</div>
        <div>
          {/* {option.imgUrl === true ? (
            // <img
            //   src={`http://192.168.0.56:8888/${option.imageUri}`}
            //   alt={option.name}
            //   className="img"
            // />
          ) : (
            <img
              src={`http://192.168.0.56:8888/${option.imageUri}`}
              alt={option.name}
              className="img"
            />
          )} */}
        </div>
      </div>

      <div>
        <div className="flex flex-col justify-start">
          <Title>{option.name}</Title>
          <div>{option.explain}</div>
        </div>
      </div>

      <div className="flex justify-between">
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
                          <div key={index} className="flex justify-between">
                            <div>
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
                    ) : (
                      <div>
                        {list.detailOptionList.map((list, index) => (
                          <div key={index} className="flex justify-between">
                            <div>
                              <input
                                type="radio"
                                id={list.optionSeq}
                                name="check"
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

      <div>
        <button onClick={goToCart}>장바구니</button>
        <button onClikc={goToOrder}>주문하기</button>
      </div>
    </>
  );
};

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

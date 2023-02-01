import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

const ShopDetail = () => {
  const [option, setOption] = useState("");
  const [optionList, setOptionList] = useState([]);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [checkList, setCheckList] = useState([]);

  const optionData = async () => {
    try {
      const res = await axios.get(
        "http://192.168.0.56:8888/store/menu/selectOption?menuSeq=20"
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
  const changeSingleBox = (checked, id) => {
    if (checked) {
      setCheckList([...checkList, id]);
      console.log([...checkList]);
    } else {
      setCheckList(checkList.filter((el) => el !== id));
    }
  };

  return (
    <>
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
                <div className="font-semibold mb-2">{list.optionCateName}</div>
                {list.detailOptionList.map((list, index) => (
                  <div key={index} className="flex justify-between">
                    <div className="mb-0.5">
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          changeSingleBox(e.target.checked, list.optionSeq)
                        }
                        checked={
                          checkList.includes(list.optionSeq) ? true : false
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
        </div>
      </div>
    </>
  );
};

export default ShopDetail;

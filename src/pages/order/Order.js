// shop Order
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

// FontAwesome Icon 적용
import tw from "tailwind-styled-components";
import { useEffect, useState } from "react";

import payco from "../../assets/payco.jpeg";
import kakao from "../../assets/kakaoPay.jpeg";

const Order = () => {
  const [location, setLocation] = useState([]);
  const [time, setTime] = useState([]);
  const [selected, setSelected] = useState(1);
  const [payData, setPayData] = useState([]);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [selectedPlace, setSelectedPlace] = useState();
  const params = {
    uiSeq: user.ciUiSeq,
  };
  const fetchData = async () => {
    const selectPlace = {
      PuaiUri: selectedPlace,
    };
    try {
      const res = await axios.get("http://192.168.0.56:8888/list/pickuparea", {
        params,
      });
      setLocation(res.data.list);
      const res2 = await axios.get(
        "http://192.168.0.56:8888/list/deliverytime",
        { params }
      );
      setTime(res2.data.list);
      const res3 = await axios.get(
        `http://192.168.0.56:8888/basket?ciSeq=${user.ciSeq}`
      );
      setPayData(res3.data.data);
      const place = await axios.get(
        "http://192.168.0.56:8888/download/pickuparea/",
        { selectPlace }
      );
      console.log(res3.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  function priceToString(price) {
    if (price === undefined || price === null) return;
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  let body = {
    ciSeq: user.ciSeq,
    puaSeq: parseInt(selected),
  };

  const payBt = (e) => {
    axios
      .post("http://192.168.0.56:8888/basket", body)
      .then((res) => {
        console.log(res.data);
        if (window.confirm("결제하시겠습니까?")) {
          alert("주문이 완료되었습니다. 결제내역으로 이동합니다.");
          navigate("/payment", { state: res.data });
        }
      })
      .catch((err) => {
        console.log(err);
        alert("결제에 실패했습니다. 다시 시도해주세요");
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <button onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="flex flex-col justify-center items-center">
        <div>
          <div className="order-info">
            <Title>주문자정보</Title>
            <OrderInfobox name="주문자명">{user.ciName}</OrderInfobox>
            <OrderInfobox name="핸드폰번호">{user.ciPhone}</OrderInfobox>
          </div>

          <div className="receipt mb-4">
            <Title className="mb-4">수령시간 / 장소</Title>
            <div className="receipt-time ml-5">
              <div className=" flex flex-col">
                <span className="mb-2">수령시각</span>
                <select className="rounded-lg border-2 border-gray-300">
                  {time.map((item, index) => (
                    <option key={index} value={item.puaSeq}>
                      {item.utiCloseTime} 주문마감 / {item.utiCloseTime} 수령
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="receipt-place ml-5">
              <div className=" flex flex-col">
                <span className="mb-2">수령장소</span>
                <select
                  className="rounded-lg border-2 border-gray-300"
                  onChange={handleSelect}
                >
                  {location.map((item, index) => (
                    <option key={index} value={item.puaSeq}>
                      {item.puaName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="payment-method mb-4">
            <Title className="mb-4">결제수단</Title>
            <div className="ml-5">
              <div className="">
                <input type="radio" name="payment" />
                <span className="ml-3">카드 결제</span>
              </div>
              <div className="flex my-1">
                <input type="radio" name="payment" />
                <img src={kakao} className="ml-3 w-16 h-7 rounded-lg" />
              </div>
              <div className="flex my-1">
                <input type="radio" name="payment" />
                <img src={payco} className="ml-3 w-16 h-7 rounded-lg" />
              </div>
            </div>
          </div>
          <div className="pay-info mb-4">
            <Title className="mb-4">결제정보</Title>
            {payData.menuList?.map((item, index) => (
              <div key={index}>
                <div className="menu-payment ml-5">
                  <div>
                    <div className="flex justify-between">
                      <span className="text-xl font-semibold text-slate-700">
                        {item.siName}
                      </span>
                    </div>
                    <div className="flex justify-between ml-5">
                      <span>{item.menuName}</span>
                      <span>{priceToString(item.price)}원</span>
                    </div>
                    <span className="ml-5 text-sm text-slate-500">
                      {item.optionAll}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div className="delivery-fee ml-5">
              <div className="flex justify-between text-xl font-semibold text-slate-700">
                <span>배달비</span>
                <span>무료</span>
              </div>
            </div>
          </div>
        </div>
        <button
          className="bg-main text-white w-1/3 h-16 ml-1 font-semibold rounded-lg border-solid"
          onClick={payBt}
        >
          {priceToString(payData.totalPrice)}원 결제하기
        </button>
      </div>
    </>
  );
};

const LoginBt = tw.button`
border-2
border-gray-300
w-96
rounded-lg
h-16
font-semibold
text-xl
`;
const Title = tw.span`
font-semibold
text-2xl
text-slate-700
mb-12
`;
const Inputbox = tw.input`
flex
justify-start
m-3
p-2
rounded-lg
border-2
border-gray-300
h-12
font-medium
text-xl
`;
const OrderInfobox = tw.div`
flex
justify-start
m-3
p-2
rounded-lg
border-2
border-gray-300
h-12
font-medium
text-xl
`;
export default Order;

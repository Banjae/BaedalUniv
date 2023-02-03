// shop Order
import { Link, useNavigate } from "react-router-dom";
// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// FontAwesome Icon 적용
import tw from "tailwind-styled-components";
import { useEffect, useState } from "react";
// import payco from "../../assets/Payco-4.png";
import axios from "axios";
import { useSelector } from "react-redux";
const Order = () => {
  const [location, setLocation] = useState([]);
  const [time, setTime] = useState([]);
  const [selected, setSelected] = useState();
  const [last, setLast] = useState([]);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const params = {
    uiSeq: user.ciUiSeq,
  };
  const param = {
    ciSeq: user.ciSeq,
  };
  const fetchData = async () => {
    try {
      const res = await axios.get("http://192.168.0.56:8888/list/pickuparea", {
        params,
      });
      console.log(res);
      setLocation(res.data.list);
      const res2 = await axios.get(
        "http://192.168.0.56:8888/list/deliverytime",
        { params }
      );
      setTime(res2.data.list);

      // const res3 = await axios.get("http://192.168.0.56:8888/order/history");
      // console.log(res2.data.list);
    } catch (err) {
      console.log(err);
    }
  };

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
      })
      .catch((err) => {
        console.log(err);
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
              <div className="">
                <input type="radio" name="payment" />
                <span className="ml-3">긱머니 결제</span>
              </div>
              <div className="flex">
                <input type="radio" name="payment" />
                <span className="ml-3">페이코 결제</span>
              </div>
            </div>
          </div>

          <div className="pay-info mb-4">
            <Title className="mb-4">결제정보</Title>
            <div className="menu-payment ml-5">
              <span></span>
              <div>
                <div className="flex justify-between">
                  <span>역전돈까스</span>
                  <span>8,200</span>
                </div>
                <span>일회용나이프 [일회용 칼 줘]</span>
              </div>
            </div>
            <div className="delivery-fee ml-5">
              <div className="flex justify-between">
                <span>배달비</span>
                <span>무료</span>
              </div>
              <div className="flex justify-between">
                <span>총 할인금액</span>
                <span>- 3,800</span>
              </div>
              <div className="flex justify-between">
                <span>배달비 할인</span>
                <span>- 3,800</span>
              </div>
            </div>
          </div>
        </div>
        <button
          className="payment-box flex justify-center items-center bg-main text-white w-52 h-10 mt-10"
          onClick={payBt}
        >
          원 결제하기
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

import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tw from "tailwind-styled-components";
const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const navigate = useNavigate();
  let user = useSelector((state) => state.user);
  const params = { ciSeq: user.ciSeq };
  const cartBox = async () => {
    try {
      const res = await axios.get("http://192.168.0.56:8888/basket", {
        params,
      });
      setTotalPrice(res.data.data);
      setCartList(res.data.data.menuList);
      console.log(cartList.map((item) => item.bmocSeq));
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(cartList);
  const deleteOne = (bmocSeq) => {
    const params = { bmocSeq: bmocSeq };
    axios
      .delete("http://192.168.0.56:8888/basket/delete", { params })
      .then((res) => alert("삭제하였습니다."))
      .catch((err) => {
        console.log(err);
        alert("삭제에 실패했습니다. 다시 시도해주세요");
      });
  };
  const deleteAll = (e) => {
    axios
      .delete("http://192.168.0.56:8888/basket/deleteAll", { params })
      .then((res) => alert("모두 삭제하시겠습니까?"))
      .catch((err) => {
        console.log(err);
        alert("삭제에 실패했습니다. 다시 시도해주세요");
      });
  };
  const goToOrder = (e) => {
    navigate("/order");
  };
  useEffect(() => {
    cartBox();
  }, []);
  function priceToString(price) {
    if (price === undefined || price === null) return;
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <Title className="mb-10">장바구니</Title>
      {cartList.map((item, index) => (
        <div>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center">
              <div
                className="border rounded px-1 flex justify-between mb-2 w-80"
                key={index}
              >
                <p key={index} className="font-semibold ">
                  마감 :{item.closeTime}
                </p>
                <p key={index} className="font-semibold ">
                  오늘 :{item.deliveryTime}
                </p>
              </div>
            </div>
          </div>
          <div className="flex border p-3 rounded w-80 relative">
            <div className="flex flex-col ml-5 justify-between ">
              <div>
                <p
                  key={index}
                  className="mt-1 font-semibold text-slate-700 text-xl"
                >
                  {item.menuName}
                </p>
                <p key={index} className="mt-1 ml-2 text-slate-500 text-sm">
                  옵션 :{item.optionAll}
                </p>
              </div>
              <div
                key={index}
                className="flex justify-between items-center mt-1"
              >
                <p className="font-semibold text-slate-700 text-xl">
                  {priceToString(item.price)} 원
                </p>
                <p className="font-semibold text-slate-700 text-xl">
                  수량: {item.count}
                </p>
              </div>
            </div>
            <button
              className="absolute top-0 right-0 pr-3"
              onClick={(e) => {
                deleteOne(item.bmocSeq);
              }}
            >
              <FontAwesomeIcon className="text-black" icon={faXmark} />
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center">
        <Link
          to="/Order"
          className="flex justify-center items-center bg-main rounded-lg text-white w-52 h-10 mt-10"
        >
          <button onClick={goToOrder} className="font-semibold">
            {priceToString(totalPrice.totalPrice)} 원 주문하기
          </button>
        </Link>
      </div>
    </div>
  );
};
const Title = tw.div`
font-semibold
text-2xl
text-slate-700
mb-5
mt-5
`;
export default Cart;

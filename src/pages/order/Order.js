// shop Order
import { Link, useNavigate } from "react-router-dom";
// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// FontAwesome Icon 적용
import tw from "tailwind-styled-components";
// import payco from "../../assets/Payco-4.png";

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
mb-10
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

const Order = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div className="order mb-10">
        <div className="text-center mb-5 font-semibold text-2xl">주문하기</div>
        <span className="block text-center mb-5">
          앗! 비로그인 주문시 적립,할인 등이 불가해요
        </span>
        <div className="flex justify-center">
          <LoginBt>
            <Link to="/Login">로그인 & 회원가입</Link>
          </LoginBt>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div>
          <div className="order-info">
            <Title>주문자정보</Title>
            <Inputbox type="text" placeholder="주문자명을 입력해주세요" />
            <Inputbox type="text" placeholder="핸드폰번호를 입력해주세요" />
          </div>

          <div className="receipt">
            <Title>수령시간 / 장소</Title>
            <div className="receipt-time ml-5">
              <div className=" flex flex-col">
                <span>수령시각</span>
                <select className="rounded-lg border-2 border-gray-300">
                  <option>주문취소</option>
                  <option>오늘 16:50 주문마감 / 18:10~18:30 수령</option>
                  <option>오늘 16:50 주문마감 / 18:10~18:30 수령</option>
                  <option>오늘 16:50 주문마감 / 18:10~18:30 수령</option>
                </select>
              </div>
            </div>
            <div className="receipt-place ml-5">
              <div className=" flex flex-col">
                <span>수령장소</span>
                <select className="rounded-lg border-2 border-gray-300">
                  <option>학사기숙사(A동)</option>
                  <option>학사기숙사(B동)</option>
                  <option>학사기숙사(C동)</option>
                  <option>학사기숙사(D동)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="payment-method">
            <Title>결제수단</Title>
            <div className="ml-5">
              <div className="">
                <input type="radio" name="payment" />
                <sapn className="ml-3">카드 결제</sapn>
              </div>
              <div className="">
                <input type="radio" name="payment" />
                <sapn className="ml-3">긱머니 결제</sapn>
              </div>
              <div className="flex">
                <input type="radio" name="payment" />
                <span className="ml-3">페이코 결제</span>
              </div>
            </div>
          </div>

          <div className="pay-info">
            <Title>결제정보</Title>
            <div className="menu-payment ml-5">
              <span>상호명</span>
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
                <span>3,800</span>
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
        <button className="payment-box flex justify-center items-center bg-main text-white w-52 h-10 mt-10">
          <span>17,300원 결제하기</span>
        </button>
      </div>
    </>
  );
};

export default Order;

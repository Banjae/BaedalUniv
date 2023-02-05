import { Link, useNavigate } from "react-router-dom";
import { clearUser } from "../reducer/userSlice";

// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

// 사용자 정보 사용하기
import { useDispatch, useSelector } from "react-redux";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const Header = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  // 로그아웃 기능
  const navigate = useNavigate();
  const logOutFn = () => {
    dispatch(clearUser());
    navigate("/login");
  };

  return (

    <header>
      <HeadContainer>
        <HeadTitle>
          <Link to="/">
            <span className="m-2">배달대</span>
            <FontAwesomeIcon icon={faGraduationCap} />
          </Link>
        </HeadTitle>
        {/* user가 로그인 / 비로그인시 다르게 출력 , 토큰으로 바꿔줄 예정*/}
        {user.ciNickName === "" ? (
          <ul className="flex gap-5 items-center w-48">
            <LogBt>
              <Link to="/Login">로그인</Link>
            </LogBt>
            <SignBt>
              <Link to="/Signup">회원가입</Link>
            </SignBt>
          </ul>
        ) : (
          <ul className="flex gap-5 items-center w-64">
            <LogBt>
              <button className="btn btn-outline-light me-2">
                {user.ciNickName} 님
              </button>
            </LogBt>
            <SignBt onClick={() => logOutFn()}>로그아웃</SignBt>
          </ul>
        )}
      </HeadContainer>
    </header>
  );
};

const HeadContainer = tw.div`
flex 
justify-between 
bg-white 
px-6 
h-20
`;
const HeadTitle = tw.div`
flex 
items-center 
text-4xl 
font-baedal 
text-main
`;
const LogBt = tw.div`
flex 
justify-center 
items-center 
rounded-lg
shadow-md 
border
border-gray-300
text-md
p-3
h-10
`;
const SignBt = tw.button`
flex 
justify-center 
items-center 
rounded-lg 
shadow-md 
bg-main 
border
border-main
text-white
text-md
p-3
h-10
`;

export default Header;

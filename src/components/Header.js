import React, { useTransition } from "react";
import { Link, useNavigate } from "react-router-dom";

// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";



// tailwind-styled-component
import tw from "tailwind-styled-components";

const Header = () => {
  const user = useSelector((state) => state.user);
  const userinfo = "";

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
  rounded-full 
  shadow-md 
  border
  border-gray-300
  text-sm
  w-1/2 
  h-8
  `;

  const SignBt = tw.li`
  flex 
  justify-center 
  items-center 
  rounded-full 
  shadow-md 
  bg-main 
  border
  border-main
  text-white
  text-sm 
  w-1/2 
  h-8
  `;


  // 로그아웃 기능
  const navigate = useNavigate();
  const logOutFn = () => {
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
        {/* user가 로그인 / 비로그인시 다르게 출력 */}
        {userinfo === "" ? (
          <ul className="flex gap-5 items-center w-40">
            <LogBt>
              <Link to="/Login">로그인</Link>
            </LogBt>
            <SignBt>
              <Link to="/Signup">회원가입</Link>
            </SignBt>
          </ul>
        ) : (
          <ul className="flex justify-end space-x-3 p-4">
            <LogBt>
            <button onClick={() => logOutFn()}
                className="btn btn-outline-light me-2">
                  {user.id}
                  로그아웃
              
                  </button> 
                
            </LogBt>
            <SignBt>
              <Link to="/Mypage">마이페이지</Link>
            </SignBt>
          </ul>
        )}
      </HeadContainer>
    </header>
  );
};
export default Header;

import React from "react";
import { Link } from "react-router-dom";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const Header = () => {
  const userinfo = "";

  const LogBt = tw.li`
    flex
    rounded-md
    border-sky-300
    shadow-md
    bg-white
    w-1/12
    h-8
    items-center
    justify-center

  `;
  const SignBt = tw.li`
    flex
    rounded-md
    border-indigo-300
    shadow-md
    bg-sky-400
    text-white
    w-1/12
    h-8
    items-center
    justify-center
  `;

  return (
    <header>
      <div className="flex justify-center text-5xl">
        <Link to="/">Poject Title</Link>
      </div>
      {/* user가 로그인 / 비로그인시 다르게 출력 */}
      {userinfo === "" ? (
        <ul className="flex justify-end space-x-3 p-4">
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
            <button>로그아웃</button>
          </LogBt>
          <SignBt>
            <Link to="/Mypage">마이페이지</Link>
          </SignBt>
        </ul>
      )}
      {/* <li>
          <Link to="/Login">로그인</Link>
        </li>
        <li>
          <Link to="/Signup">회원가입</Link>
        </li> */}
    </header>
  );
};
export default Header;

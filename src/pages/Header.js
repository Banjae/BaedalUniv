import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="flex justify-center text-5xl">
        <Link to="/">Poject Title</Link>
      </div>
      <ul className="flex justify-end space-x-3">
        <li>
          <Link to="/Login">로그인</Link>
        </li>
        <li>
          <Link to="/Signup">회원가입</Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;

import React from "react";
import { Link } from "react-router-dom";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const Foot = tw.div`
  bg-slate-200
  p-6
  m-4
  text-center
`;

const Footer = () => {
  return (
    <footer>
      <Foot>
        <div>
          <div className="text-xl">주식회사 Projcet Name</div>
          <ul>
            <li> 대구광역시 중구 중앙대로 394, 제일빌딩 5F</li>
            <li> 이메일 </li>
            <li> 고객만족센터</li>
            <li>
              <Link to="/about">멤버</Link>
            </li>
          </ul>
        </div>
      </Foot>
    </footer>
  );
};

export default Footer;

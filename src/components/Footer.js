import React from "react";
import { Link } from "react-router-dom";

// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const Footer = () => {
  const FootContainer = tw.div`
  flex
  flex-col
  items-center
  bg-main
  text-white
  p-10
  `;

  const FootTitle = tw.div`
  text-3xl 
  font-baedal 
  text-main
  text-white
  m-3
  `;

  const FootUl = tw.ul`
  text-center
  text-xs
  tracking-widest
  m-7
  `;

  const FootSpan = tw.span`
  text-xs
  text-slate-200
  font-thin
  `;

  return (
    <footer>
      <FootContainer>
        <FootTitle>
          <span className="m-2">배달대</span>
          <FontAwesomeIcon icon={faGraduationCap} />
        </FootTitle>
        <div>
          <Link to="/About">멤버소개</Link>
        </div>
        <FootUl>
          <li>주소 : 대구광역시 중구 중앙대로 394, 제일빌딩 5F</li>
          <li>전화 :</li>
          <li>이메일 : </li>
          <li>고객만족센터 :</li>
        </FootUl>
        <span className="text-xs tracking-wider">
          {" "}
          COPYRIGHT ㈜BaedalUniv ALL RIGHTS RESERVED.
        </span>
      </FootContainer>
    </footer>
  );
};

export default Footer;

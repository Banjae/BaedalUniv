import React from "react";
import { Link } from "react-router-dom";

// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const Fixmenu = () => {
  const Fix = tw.div`
    fixed
    bottom-0
    w-full
    bg-white
    center
    p-2
    bg-sub
  `;

  const FixUl = tw.ul`
    flex
    justify-around
  `;

  const FixLi = tw.li`
    flex
    flex-col
    items-center
    text-xl
    text-main
  `;
  return (
    <>
      <Fix>
        <FixUl>
          <FixLi>
            <FontAwesomeIcon icon={faHouse} />
            <Link to="/">Home</Link>
          </FixLi>
          <FixLi>
            <FontAwesomeIcon icon={faUtensils} />
            <Link to="/Shop">상점</Link>
          </FixLi>
          <FixLi>
            <FontAwesomeIcon icon={faCartShopping} />
            <Link to="/Cart">장바구니</Link>
          </FixLi>
          <FixLi>
            <FontAwesomeIcon icon={faUser} />
            <Link to="/Mypage">마이페이지</Link>
          </FixLi>
        </FixUl>
      </Fix>
    </>
  );
};

export default Fixmenu;

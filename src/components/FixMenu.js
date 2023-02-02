import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// tailwind-styled-component
import tw from "tailwind-styled-components";
import { useSelector } from "react-redux";
import instance from "../api/axios";
import request from "../api/requset";

const Fixmenu = () => {
  const user = useSelector((state) => state.user);

  const [uniList, setUniList] = useState([]);

  const navigate = useNavigate();

  const fetchData = async () => {
    await instance
      .get(request.univ)
      .then((res) => {
        setUniList(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clickFunc = () => {
    const matchUni = (ele) => {
      if (ele.uiSeq === user.ciUiSeq) return true;
    };
    const ciUiSeq = uniList.find(matchUni);
    console.log(ciUiSeq);
    navigate(`/Shopmain/${ciUiSeq.uiName}`);
  };

  return (
    <>
      <Fix>
        <FixUl>
          <FixLi>
            <Link to="/" className="flex flex-col">
              <FontAwesomeIcon icon={faHouse} />
              <span>Home</span>
            </Link>
          </FixLi>
          <FixLi>
            {user.ciNickName === "" ? (
              <Link to="/Login" className="flex flex-col">
                <FontAwesomeIcon icon={faUtensils} />
                <span>마이상점</span>
              </Link>
            ) : (
              <div onClick={clickFunc} className="flex flex-col cursor-pointer">
                <FontAwesomeIcon icon={faUtensils} />
                <span>마이상점</span>
              </div>
            )}
          </FixLi>
          <FixLi>
            {user.ciNickName === "" ? (
              <Link to="/Login" className="flex flex-col">
                <FontAwesomeIcon icon={faCartShopping} />
                <span>장바구니</span>
              </Link>
            ) : (
              <Link to="/cart" className="flex flex-col">
                <FontAwesomeIcon icon={faCartShopping} />
                <span>장바구니</span>
              </Link>
            )}
          </FixLi>
          <FixLi>
            {user.ciNickName === "" ? (
              <Link to="/Login" className="flex flex-col">
                <FontAwesomeIcon icon={faUser} />
                <span>마이페이지</span>
              </Link>
            ) : (
              <Link to="/Mypage" className="flex flex-col">
                <FontAwesomeIcon icon={faUser} />
                <span>마이페이지</span>
              </Link>
            )}
          </FixLi>
        </FixUl>
      </Fix>
    </>
  );
};

const Fix = tw.div`
  fixed
  bottom-0
  w-full
  bg-white
  center
  p-2
  z-20
  `;

const FixUl = tw.ul`
  flex
  justify-around
  `;

const FixLi = tw.li`
  text-xl
  text-main
`;

export default Fixmenu;

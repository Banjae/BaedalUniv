import React, { useEffect, useState } from "react";

// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

// tailwind-styled-component
import tw from "tailwind-styled-components";
import instance from "../../api/axios";
import request from "../../api/requset";
import { useNavigate, useParams } from "react-router";
import ShopDetail from "../order/ShopDetail";

const ShopMenu = ({ stdSeq }) => {
  const [menuList, setMenuList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [menuSeq, setMenuSeq] = useState("");

  function comprice(p) {
    return p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const { siSeq } = useParams();

  const params = {
    siSeq: siSeq,
  };

  const fetchData = async () => {
    await instance
      .get(request.shop, { params })
      .then((res) => {
        // console.log(res.data);
        setMenuList(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [siSeq]);

  const popUp = (menuSeq) => {
    setShowModal(!showModal);
    setMenuSeq(menuSeq);
  };

  return (
    <>
      <SMcontainer>
        {menuList.map((ele, idx) => {
          const menu = ele.menuList;
          return (
            <SMenu key={idx}>
              <SMenuTitle onClick={() => {}}>
                <p>{ele.cateName}</p>
                {/* {true ? (
                <FontAwesomeIcon icon={faAngleDown} />
                ) : (
                  <FontAwesomeIcon icon={faAngleUp} />
                )} */}
              </SMenuTitle>
              <SMenuDetail>
                {menu.map((ele, idx) => {
                  return (
                    <div
                      className="flex justify-between"
                      div
                      key={idx}
                      onClick={(e) => {
                        popUp(ele.menuSeq);
                      }}
                    >
                      <div className="flex flex-col justify-center">
                        <MenuDetailTitle>{ele.name}</MenuDetailTitle>
                        <span>
                          <Bfsale>{comprice(ele.price)}원</Bfsale>
                          <Afsale>{comprice(ele.discountPrice)}원</Afsale>
                        </span>
                      </div>
                      <MenuDetialPic
                        src={`http://192.168.0.56:8888/download/food/${ele.fiUri}`}
                        alt={ele.name}
                      />
                      {showModal && menuSeq === ele.menuSeq && (
                        <ShopDetail
                          menuSeq={ele.menuSeq}
                          showModal={showModal}
                          setShowModal={setShowModal}
                          stdSeq={stdSeq}
                        />
                      )}
                    </div>
                  );
                })}
              </SMenuDetail>
            </SMenu>
          );
        })}
      </SMcontainer>
    </>
  );
};

const SMcontainer = tw.div`
  h-full
  w-full
  mt-2
`;

const SMenu = tw.div`
  h-auto
  w-full
`;

const SMenuTitle = tw.div`
  flex 
  justify-start
  items-center
  bg-gray-300
  border-b
  border-b-black-400
  w-auto
  h-auto
  pl-5
  py-3
  text-[20px]
  font-bold
`;

const SMenuDetail = tw.div`
  flex
  flex-col
  bg-white
  p-5
`;

const MenuDetailTitle = tw.p`
  text-xl
`;

const MenuDetialPic = tw.img`
  h-[150px]
  w-[200px]
  m-1
`;
const Bfsale = tw.span`
  font-ligth
  text-slate-300
  line-through
  decoration-rose-500
  pr-1
`;

const Afsale = tw.span`
  font-bold
  pl-1
`;

export default ShopMenu;

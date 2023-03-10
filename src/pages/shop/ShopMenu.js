import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import instance from "../../api/axios";
import request from "../../api/requset";
import ShopDetail from "../order/ShopDetail";

// tailwind-styled-component
import tw from "tailwind-styled-components";

import noImg from "../../assets/noimg.png";

const ShopMenu = ({ stdSeq, setToTable, toTable }) => {
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
              </SMenuTitle>
              <SMenuDetail>
                {menu.map((ele, idx) => {
                  return (
                    <div
                      className="flex justify-between mx-2"
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
                      {ele.fiUri === "" ? (
                        <NoPic src={noImg} alt={ele.name} />
                      ) : (
                        <MenuDetialPic
                          src={`http://192.168.0.56:8888/download/food/${ele.fiUri}`}
                          alt={ele.name}
                        />
                      )}
                      {showModal && menuSeq === ele.menuSeq && (
                        <ShopDetail
                          menuSeq={ele.menuSeq}
                          showModal={showModal}
                          setShowModal={setShowModal}
                          stdSeq={stdSeq}
                          toTable={toTable}
                          setToTable={setToTable}
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
  text-2xl
`;

const NoPic = tw.img`
  border
  bg-cover
  rounded-lg
  h-[150px]
  w-[200px]
  m-1
`;

const MenuDetialPic = tw.img`
  border
  bg-cover
  rounded-lg
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
  text-lg
`;

export default ShopMenu;

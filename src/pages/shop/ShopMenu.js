import React, { useState } from "react";

// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const ShopMenu = () => {
  const [tpOpen, setTpOpen] = useState(true);
  const [mdOpen, setMdOpen] = useState(true);
  const [btOpen, setBtOpen] = useState(true);

  return (
    <>
      <MenuContainer>
        <div>
          <p>대표메뉴</p>
          <div>대메1</div>
          <div>대메2</div>
          <div>대메3</div>
        </div>
        <div>
          <MenuTitle
            onClick={() => {
              setTpOpen(!tpOpen);
            }}
          >
            <p className="block">세트메뉴</p>
            {tpOpen === true ? (
              <FontAwesomeIcon icon={faAngleDown} />
            ) : (
              <FontAwesomeIcon icon={faAngleUp} />
            )}
          </MenuTitle>
          <div className={tpOpen === true ? "hidden" : "block"}>
            <div>메뉴1</div>
            <div>메뉴2</div>
            <div>메뉴3</div>
            <div>메뉴4</div>
          </div>
        </div>
        <div>
          <MenuTitle
            onClick={() => {
              setMdOpen(!mdOpen);
            }}
          >
            <p className="block">단품메뉴</p>
            {mdOpen === true ? (
              <FontAwesomeIcon icon={faAngleDown} />
            ) : (
              <FontAwesomeIcon icon={faAngleUp} />
            )}
          </MenuTitle>
          <div className={mdOpen === true ? "hidden" : "block"}>
            <div>메뉴1</div>
            <div>메뉴2</div>
            <div>메뉴3</div>
            <div>메뉴4</div>
          </div>
        </div>{" "}
        <div>
          <MenuTitle
            onClick={() => {
              setBtOpen(!btOpen);
            }}
          >
            <p className="block">사이드 메뉴</p>
            {btOpen === true ? (
              <FontAwesomeIcon icon={faAngleDown} />
            ) : (
              <FontAwesomeIcon icon={faAngleUp} />
            )}
          </MenuTitle>
          <div className={btOpen === true ? "hidden" : "block"}>
            <div>메뉴1</div>
            <div>메뉴2</div>
            <div>메뉴3</div>
            <div>메뉴4</div>
          </div>
        </div>
      </MenuContainer>
    </>
  );
};

const MenuContainer = tw.div`

`;

const MenuTitle = tw.div`
  flex 
  justify-between
  items-center
  bg-gray-300
  border-b
  border-b-black-400
`;

export default ShopMenu;

import React, { useEffect, useState } from "react";

// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const ShopMenu = ({ menuList }) => {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <MenuContainer>
        {menuList.map((ele, idx) => {
          const menu = ele.menuList;
          return (
            <div key={idx}>
              <MenuTitle onClick={() => {}}>
                <p>{ele.cateName}</p>

                {/* {true ? (
                  <FontAwesomeIcon icon={faAngleDown} />
                ) : (
                  <FontAwesomeIcon icon={faAngleUp} />
                )} */}
              </MenuTitle>
              <MenuDetail>
                {menu.map((ele, idx) => {
                  return (
                    <div div key={idx}>
                      <div>{ele.name}</div>
                    </div>
                  );
                })}
              </MenuDetail>
            </div>
          );
        })}
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

const MenuDetail = tw.div`
  flex
  flex-col
`;

export default ShopMenu;

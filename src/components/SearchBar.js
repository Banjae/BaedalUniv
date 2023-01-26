import React, { useEffect, useState } from "react";

// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// tailwind-styled-component
import tw from "tailwind-styled-components";

import instance from "../api/axios";
import request from "../api/requset";
import ShopSchedule from "./ShopSchedule";
import ShopSale from "./ShopSale";

const SearchBar = () => {
  const [uniList, setUnivList] = useState([]);
  const [search, setSearch] = useState("");
  const [uiSeq, setUiSeq] = useState();
  const [content, setContent] = useState();

  const fetchData = async () => {
    await instance
      .get(request.univ)
      .then((res) => {
        setUnivList(res.data.list);
        // setUiSeq(res.data.list[1].uiSeq);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const filterTitle = uniList.filter((p) => {
    return p.uiName.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  const clickFunc = (e) => {
    const { name } = e.target;
    setContent(name);
    setSearch(name);
    const matchNum = (ele) => {
      if (ele.uiName === name) return true;
    };
    const univNum = uniList.find(matchNum);
    setUiSeq(univNum.uiSeq);
  };

  return (
    <>
      <div className="relative">
        <SerchImg>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SerchImg>
        <form>
          <Search
            type="text"
            placeholder="학교명을 입력해주세요"
            value={search}
            onChange={onChange}
          />
        </form>
      </div>
      <SearchList>
        {filterTitle.map((ele, index) => {
          return (
            <SearchItem
              key={index}
              onClick={clickFunc}
              name={ele.uiName}
              className={search === "" ? "hidden" : "block"}
            >
              {ele.uiName}
            </SearchItem>
          );
        })}
      </SearchList>
      {search === content ? (
        <>
          <ShopSale uiSeq={uiSeq} />
          <ShopSchedule uiSeq={uiSeq} />
        </>
      ) : (
        <SearchNot>
          <p>#배달대</p>
          <p>#배달비 0원!</p>
        </SearchNot>
      )}
    </>
  );
};

const Search = tw.input`
  text-center
  text-black
  h-10
  w-2/4
  bg-white 
  border 
  border-gray-300 
  rounded-lg 
  shadow-sm 
  placeholder:text-gray-300 
  focus:outline-none 
  focus:border-main 
  focus:ring-1 
  focus:ring-main
  m-2
`;

const SerchImg = tw.div`
  absolute
  left-[26%]
  top-[30%]
  text-gray-300
`;

const SearchList = tw.div`
  flex
  flex-col
  bg-white 
  w-2/4 
  my-0 
  mx-auto
`;

const SearchItem = tw.button`
  text-center
`;

const SearchNot = tw.div`
  flex
  items-center
  justify-center
  h-96
`;

export default SearchBar;

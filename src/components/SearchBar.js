import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../api/axios";
import request from "../api/requset";

// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const SearchBar = () => {
  const [uniList, setUniList] = useState([]);

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

  const [search, setSearch] = useState("");

  const searchList = useRef();

  const onChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    searchList.current.classList.remove("hidden");
  };

  const filterTitle = uniList.filter((p) => {
    return p.uiName.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  const navigate = useNavigate();

  const clickFunc = (e) => {
    const { name } = e.target;
    setSearch(name);
    searchList.current.classList.add("hidden");
    navigate(`/Shopmain/${name}`);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="relative">
        <SerchImg>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SerchImg>
        <form onSubmit={onSubmit}>
          <SearchBox
            type="text"
            placeholder="학교명을 입력해주세요"
            value={search}
            onChange={(e) => onChange(e)}
          />
        </form>

        <SearchList ref={searchList}>
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
      </div>
    </>
  );
};

const SearchBox = tw.input`
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
  absolute
  left-[25%]
  flex
  flex-col
  bg-white 
  w-2/4 
  my-0 
  mx-auto
  rounded-lg 
  z-10
`;

const SearchItem = tw.button`
  text-center
  hover:bg-gray-200
  rounded-lg
  `;

export default SearchBar;

import React, { useState } from "react";

// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// tailwind-styled-component
import tw from "tailwind-styled-components";
import axios from "axios";

const SearchBar = () => {
  const [uniList, setUnivList] = useState([]);
  const [search, setSearch] = useState("");

  const a = () => {
    axios.get("http://192.168.0.56:8888/list/univ").then((res) => {
      setUnivList(res.data.list);
    });
  };

  // const serachLIst = setUniLi.filter;
  // console.log(uniList);

  const onChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const filterTitle = uniList.filter((p) => {
    return p.uiName.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  console.log(filterTitle);

  return (
    <>
      <div className="relative">
        <SerchImg>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SerchImg>
        <Home
          type="text"
          placeholder="학교명을 입력해주세요"
          value={search}
          onChange={onChange}
          onClick={a}
        />
      </div>
      <div className="bg-white w-2/4 my-0 mx-auto">
        {filterTitle.map((ele, index) => {
          return <div>{ele}</div>;
        })}
      </div>
    </>
  );
};

const Home = tw.input`
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
top-[27%]
text-gray-300
`;

export default SearchBar;

import React from "react";

// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const SearchBar = () => {
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

  return (
    <>
      <div className="relative">
        <SerchImg>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SerchImg>
        <Home type="text" placeholder="학교명을 입력해주세요" />
      </div>
    </>
  );
};

export default SearchBar;

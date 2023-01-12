import React from "react";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const SearchBar = () => {
  const Home = tw.input`
    text-center
    bg-red-200
    text-zinc-300
    h-12
    w-2/4
  `;

  return (
    <>
      <Home type="text" placeholder="학교명을 입력해주세요" />
    </>
  );
};

export default SearchBar;

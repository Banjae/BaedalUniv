// main Home page
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const Home = () => {
  return (
    <>
      <div>
        {/* <Loading /> */}
        <p>어디로 배달해드릴까요?</p>
        <div>
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default Home;

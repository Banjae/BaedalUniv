import React from "react";
import Baedal from "../assets/baedal.png";
// tailwind-styled-component
import tw from "tailwind-styled-components";

const LoadingSpinner = tw.div`
  absolute
  w-screen
  h-screen
  flex
  items-center
  top-0
  left-0
  z-10
  animate-slider
  items-center
  text-main
`;

const Loading = () => {
  return (
    <>
      <LoadingSpinner>
        <img src={Baedal} alt="로딩중" width="10%" />
      </LoadingSpinner>
    </>
  );
};
export default Loading;

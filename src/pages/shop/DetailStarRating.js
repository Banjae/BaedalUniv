import React from "react";
import { ImStarFull } from "react-icons/im";
import styled from "styled-components";

const DetailStarRating = ({ starRatio }) => {
  return (
    <div className="relative">
      <div className="flex w-[70px]">
        <ImStarFull color="gray" size="14px" />
        <ImStarFull color="gray" size="14px" />
        <ImStarFull color="gray" size="14px" />
        <ImStarFull color="gray" size="14px" />
        <ImStarFull color="gray" size="14px" />
      </div>
      <StarWrap width={starRatio ? (starRatio * 70) / 5 : "70px"}>
        <div className="flex w-[70px]">
          <ImStarFull color="#FFA400" size="14px" />
          <ImStarFull color="#FFA400" size="14px" />
          <ImStarFull color="#FFA400" size="14px" />
          <ImStarFull color="#FFA400" size="14px" />
          <ImStarFull color="#FFA400" size="14px" />
        </div>
      </StarWrap>
    </div>
    // </div>
  );
};
const StarWrap = styled.div`
  position: absolute;
  top: 0px;
  overflow: hidden;
  width: ${(props) => props.width}px;
`;

export default DetailStarRating;
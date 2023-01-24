import React from "react";
import { ImStarFull } from "react-icons/im";
import styled from "styled-components";

const DetailStarRating = ({ starRatio }) => {
  return (
    <div className="relative">
      <div className="flex w-[100px]">
        <ImStarFull color="gray" size="20px" />
        <ImStarFull color="gray" size="20px" />
        <ImStarFull color="gray" size="20px" />
        <ImStarFull color="gray" size="20px" />
        <ImStarFull color="gray" size="20px" />
      </div>
      <StarWrap width={(starRatio * 100) / 5}>
        <div className="flex w-[100px]">
          <ImStarFull color="#FFA400" size="20px" />
          <ImStarFull color="#FFA400" size="20px" />
          <ImStarFull color="#FFA400" size="20px" />
          <ImStarFull color="#FFA400" size="20px" />
          <ImStarFull color="#FFA400" size="20px" />
        </div>
      </StarWrap>
    </div>
  );
};
const StarWrap = styled.div`
  position: absolute;
  top: 0px;
  overflow: hidden;
  width: ${(props) => props.width}px;
`;

export default DetailStarRating;

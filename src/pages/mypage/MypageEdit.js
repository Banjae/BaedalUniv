import React from "react";
// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark } from "@fortawesome/free-solid-svg-icons";

const MypageEdit = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faVolumeXmark} />
      마이페이지 안의 수정페이지입니다.
    </div>
  );
};

export default MypageEdit;

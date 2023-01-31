import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../api/axios";
import request from "../api/requset";
import ShopSchedule from "../components/ShopSchedule";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const ShopMain = () => {
  const [uiSeq, setUiSeq] = useState("");
  const { keyword } = useParams();

  const params = {
    keyword: keyword,
  };

  const fetchData = async () => {
    await instance
      .get(request.uniSearch, { params })
      .then((res) => {
        setUiSeq(res.data.data.uiSeq);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <SMcontainer>
        <ShopSchedule uiSeq={uiSeq} />
      </SMcontainer>
    </div>
  );
};

const SMcontainer = tw.div`
  my-0
  mx-auto
  w-[80%]
`;

export default ShopMain;

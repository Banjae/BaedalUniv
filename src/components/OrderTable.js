import React, { useState } from "react";
import { Link } from "react-router-dom";
// tailwind-styled-component
import tw from "tailwind-styled-components";
// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus } from "@fortawesome/free-regular-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";

const OrderTable = () => {
  const [count, setCount] = useState(1);

  const minusBt = () => {
    count <= 1 ? alert("최소 1개는 주문해라잉") : setCount(count - 1);
  };

  const plusBt = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Table>
        <TableTitle>
          <p>주문표</p>
          <button>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </TableTitle>
        <div>
          <div>주문내용</div>
          <div className="flex justify-between">
            <div>
              <button>X</button>
              <span>가격</span>
            </div>
            <div>
              <button onClick={minusBt} className="text-main">
                <FontAwesomeIcon icon={faSquareMinus} />
              </button>
              <span className="m-1">{count}</span>
              <button onClick={plusBt} className="text-main">
                <FontAwesomeIcon icon={faSquarePlus} />
              </button>
            </div>
          </div>
        </div>
        <TablePrice>
          <div>배달대는 배달비가 0원</div>
          <div className="bg-amber-100 w-full">합계: 원</div>
        </TablePrice>
        <TableOrder>
          <Link to="/order">
            <TableOrderBt>주문하기</TableOrderBt>
          </Link>
        </TableOrder>
      </Table>
    </>
  );
};

const Table = tw.div`
  fixed
  top-44
  right-20
  w-72
`;

const TableTitle = tw.div`
  flex
  justify-between
  items-center
  bg-slate-600
  text-white
  pr-2
  pl-2
  h-8
`;

const TablePrice = tw.div`
  flex
  flex-col
`;

const TableOrder = tw.div`
  flex
  justify-end
`;

const TableOrderBt = tw.div`
  bg-white
  border
  border-main
  rounded-md
  mt-2
`;

export default OrderTable;

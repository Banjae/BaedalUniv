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
  const [cart, setCart] = useState("2");

  const minusBt = () => {
    count <= 1 ? alert("최소 1개는 주문해라잉") : setCount(count - 1);
  };

  const plusBt = () => {
    setCount(count + 1);
  };

  const deleteAllBt = () => {
    alert("주문표에 담긴 메뉴를 모두 삭제하시겠습니까?");
    setCart("");
  };

  return (
    <MotherTable>
      <Table>
        <TableTitle>
          <p>주문표</p>
          <button onClick={deleteAllBt}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </TableTitle>
        {cart === "" ? (
          <TableDetail>
            <p className="text-center">주문표에 담긴 메뉴가 없습니다.</p>
          </TableDetail>
        ) : (
          <TableDetail>
            <div>주문내용</div>
            <div className="flex justify-between mt-2">
              <div>
                <button>X</button>
                <span>가격</span>
              </div>
              <div>
                <button onClick={minusBt} className="text-main mr-1">
                  <FontAwesomeIcon icon={faSquareMinus} />
                </button>
                <span className="m-1">{count}</span>
                <button onClick={plusBt} className="text-main ml-1">
                  <FontAwesomeIcon icon={faSquarePlus} />
                </button>
              </div>
            </div>
          </TableDetail>
        )}
        <TablePrice>
          <p>배달대는 배달비가 0원</p>
          <p>합계: 원</p>
        </TablePrice>
        {cart === "" ? (
          <TableNot>
            <p>주문하기</p>
          </TableNot>
        ) : (
          <TableOrder>
            <Link to="/order">
              <p>주문하기</p>
            </Link>
          </TableOrder>
        )}
      </Table>
    </MotherTable>
  );
};

const MotherTable = tw.div`
  relative
  h-auto
  hidden
  lg:block
  lg:w-[350px]
`;

const Table = tw.div`
  sticky
  top-0
`;

const TableTitle = tw.div`
  flex
  justify-between
  items-center
  bg-slate-600
  text-white
  pr-3
  pl-3
  h-8
`;

const TableDetail = tw.div`
  bg-white
  p-3
`;

const TablePrice = tw.div`
  flex
  flex-col
  items-end
  bg-orange-200
  text-main
  p-3
`;

const TableNot = tw.div`
  text-center
  bg-gray-200
  text-white
  border-2
  border-transparent
  mt-2
  p-1
`;

const TableOrder = tw.div`
  text-center
  bg-white
  border-2
  border-main
  mt-2
  p-1
`;

export default OrderTable;

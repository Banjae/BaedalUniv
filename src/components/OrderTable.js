import React, { useState } from "react";
import { Link } from "react-router-dom";
// tailwind-styled-component
import tw from "tailwind-styled-components";
// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus } from "@fortawesome/free-regular-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { cartTableDelet } from "../reducer/cartSlice";

const OrderTable = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(cart);

  // const minusBt = () => {
  //   cart.count <= 1 ? alert("최소 1개는 주문해라잉") : () => cart.count - 1;
  // };

  // const plusBt = () => {
  //   cart.count + 1;
  // };

  const deleteAllBt = () => {
    alert("주문표에 담긴 메뉴를 모두 삭제하시겠습니까?");
    dispatch(cartTableDelet());
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
        {cart.bmocSeq === "" ? (
          <TableDetail>
            <p className="text-center">주문표에 담긴 메뉴가 없습니다.</p>
          </TableDetail>
        ) : (
          <TableDetail>
            <div>
              <p>{cart.menuName}</p>
            </div>
            <div className="flex justify-between mt-2">
              <div>
                <button>X</button>
                <span>{cart.price}원</span>
              </div>
              <div>
                <button
                  //  onClick={minusBt}
                  className="text-main mr-1"
                >
                  <FontAwesomeIcon icon={faSquareMinus} />
                </button>
                <span className="m-1">{cart.count}</span>
                <button
                  //  onClick={plusBt}
                  className="text-main ml-1"
                >
                  <FontAwesomeIcon icon={faSquarePlus} />
                </button>
              </div>
            </div>
          </TableDetail>
        )}
        <TablePrice>
          <p>배달대는 배달비가 0원</p>
          <p>합계: {cart.price}원</p>
        </TablePrice>
        {cart.bmocSeq === "" ? (
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

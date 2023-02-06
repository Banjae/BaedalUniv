import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import instance from "../api/axios";
import request from "../api/requset";

// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const OrderTable = ({ toTable, setToTable }) => {
  const user = useSelector((state) => state.user);

  const [orderList, setOredrList] = useState([]);
  const [total, setTotal] = useState(0);

  const params = {
    ciSeq: user.ciSeq,
  };

  const fetchData = async () => {
    await instance
      .get(request.basket, { params })
      .then((res) => {
        setOredrList(res.data.data.menuList);
        setTotal(res.data.data.totalPrice);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [toTable]);

  function comprice(p) {
    return p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const basektDeleteAll = () => {
    alert("주문표에 담긴 메뉴를 모두 삭제하시겠습니까?");
    instance
      .delete(request.basektDeleteAll, { params })
      .then((res) => {
        console.log(res);
        setToTable(!toTable);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const basektDelete = (bmocSeq) => {
    const params = {
      bmocSeq: bmocSeq,
    };
    instance
      .delete(request.basektDelete, { params })
      .then((res) => {
        setToTable(!toTable);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MotherTable>
      <Table>
        <TableTitle>
          <p>주문표 ( {orderList.length} )</p>
          <button onClick={basektDeleteAll}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </TableTitle>
        {total === 0 ? (
          <TableDetail>
            <p className="text-center">주문표에 담긴 메뉴가 없습니다.</p>
          </TableDetail>
        ) : (
          <TableDetail>
            {orderList.map((ele) => (
              <div key={ele.bmocSeq}>
                <div>
                  <p className="text-lg">{ele.menuName}</p>
                </div>
                <div>
                  <p>{ele.optionAll}</p>
                </div>

                <div className="flex justify-between mt-2">
                  <div>
                    <button onClick={(e) => basektDelete(ele.bmocSeq)}>
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </div>
                  <span>{comprice(ele.price)}원</span>
                </div>
              </div>
            ))}
          </TableDetail>
        )}
        <TablePrice>
          <p>배달대는 배달비가 무료</p>
          <strong>합계 : {comprice(total)}원</strong>
        </TablePrice>
        {total === 0 ? (
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
  max-h-[300px]
  overflow-scroll 
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

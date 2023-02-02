// // my Cart page
// import { useEffect } from "react";
// import { useState } from "react";

// const Cart = () => {
//   // const [selectedBread, setSelectedBread] = useState([]);
//   // const [checkList, setCheckList] = useState([]);
//   // // const [numberOfBread, setNumberOfBread] = useState(0);
//   // const [totalPrice, setTotalPrice] = useState([]);
//   // const [price, setPrice] = useState({});

//   // const changeSingleBox = (checked, id, prices) => {
//   //   if (checked) {
//   //     setCheckList([...checkList, id]);
//   //     setPrice({ ...price, [id]: prices });
//   //   } else {
//   //     setCheckList(checkList.filter((el) => el !== id));
//   //     setPrice({ ...price, [id]: 0 });
//   //   }
//   // };

//   // const changeAllBox = (checked) => {
//   //   if (checked) {
//   //     const allCheckBox = [];

//   //     selectedBread.forEach((el) => allCheckBox.push(el.id));
//   //     setCheckList(allCheckBox);
//   //     setPrice({ ...totalPrice });
//   //   } else {
//   //     setCheckList([]);
//   //     setPrice({});
//   //   }
//   // };
//   // const setPriceList = (prices, id) => {
//   //   setTotalPrice({ ...totalPrice, [id]: prices });
//   //   if (checkList.includes(id)) {
//   //     setPrice({ ...price, [id]: prices });
//   //   }
//   // };
//   // const deleteSeleted = () => {
//   //   if (checkList.length === 0) {
//   //     alert("상품을 선택해주세요");
//   //   } else {
//   //     setSelectedBread(
//   //       selectedBread.filter((el) => !checkList.includes(el.id))
//   //     );

//   //     setPrice({});

//   //     const temp = { ...totalPrice };
//   //     checkList.forEach((el) => delete temp[el]);
//   //     setTotalPrice({ ...temp });

//   //     setCheckList([]);
//   //   }
//   // };

//   // const deletePer = (identifier) => {
//   //   if (checkList.includes(identifier)) {
//   //     setSelectedBread(selectedBread.filter((el) => identifier !== el.id));

//   //     const temp = { ...price };
//   //     delete temp[identifier];
//   //     setPrice({ ...temp });

//   //     const temp2 = { ...totalPrice };
//   //     delete temp2[identifier];
//   //     setTotalPrice({ ...temp2 });

//   //     setCheckList(checkList.filter((el) => el !== identifier));
//   //   } else {
//   //     alert("항목을 선택해주세요");
//   //   }
//   // };

//   useEffect(() => {}, []);
//   return (
//     <div>
//       {/* {selectedBread.length && (
//         <div className="Cart">
//           <div>
//             <span className="homeRoot"></span>
//             <span className="homeRoot">@</span>
//             <span className="shoppingRoot">SHOPPING BAG</span>
//           </div>

//           <div className="shoppingBag">
//             <h1 className="title">SHOPPING BAG</h1>
//             <h2 className="title productTitle">쇼핑백 상품</h2>
//             <div className="orderContainer">
//               <OrderInfomation
//                 changeAllBox={changeAllBox}
//                 checkList={checkList}
//               />
//               {selectedBread.map((selectedBread) => (
//                 <OrderProducts
//                   selectedBread={selectedBread}
//                   key={selectedBread.id}
//                   changeSingleBox={changeSingleBox}
//                   data={selectedBread}
//                   checkList={checkList}
//                 />
//               ))} */}
//       {/* </div> */}
//       {/* </div> */}
//     </div>
//   );
// };

// export default Cart;



// my Cart page
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-10">장바구니</div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <div className="border rounded px-1"> 17:00 </div>
          <div>대가한우대창곱도리&찜닭</div>
        </div>
        <div>
          <p>오늘 18:20도착</p>
        </div>
      </div>
      <div className="flex border p-3 rounded w-3/12 relative">
        <div className="w-24 h-24 bg-main rounded"></div>
        <div className="flex flex-col ml-5 justify-between">
          <div>
            <p>한우대창 곱도리탕 소 순살</p>
            <p>옵션-맵기 단계 선택 [신라면정도 보통맛]</p>
          </div>
          <div>22,500원</div>
        </div>
        <button className="absolute top-0 right-0 pr-3">x</button>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center bg-white text-white w-52 h-10 mt-10 text-black border rounded">
          합계 원
        </div>
        <Link
          to="/Order"
          className="flex justify-center items-center bg-main text-white w-52 h-10 mt-10"
        >
          주문하기(개)
        </Link>
      </div>
    </div>
  );
};

export default Cart;

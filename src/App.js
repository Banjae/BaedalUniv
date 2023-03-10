import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/shop/Shop";
import Login from "./pages/Login";
import SIgnup from "./pages/SIgnup";
import Mypage from "./pages/mypage/Mypage";
import Review from "./pages/mypage/Review";
import Order from "./pages/order/Order";
import Cart from "./pages/Cart";
import Fixmenu from "./components/FixMenu";
import NotFound from "./pages/NotFound";
import OrderLogin from "./pages/order/OrderLogin";
import ShopDetail from "./pages/order/ShopDetail";
import ShopMain from "./pages/shopMain/ShopMain";
import Payment from "./pages/order/Payment";
import Footer from "./components/Footer";

import Test from "./pages/shopMain/test";

// tailwind-styled-component
import tw from "tailwind-styled-components";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shopmain/:keyword" element={<ShopMain />} />
          <Route path="/Shop/:siSeq" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SIgnup />} />
          <Route path="/Mypage/*" element={<Mypage />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/OrderLogin" element={<OrderLogin />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/ShopDetail/:menuSeq" element={<ShopDetail />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Container>
      <Footer />
      <Fixmenu />
    </Router>
  );
}

const Container = tw.div`
  p-10
  bg-sub
  `;

export default App;

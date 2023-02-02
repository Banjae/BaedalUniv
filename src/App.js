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
import Footer from "./components/Footer";
import Fixmenu from "./components/FixMenu";
import NotFound from "./pages/NotFound";
import Payment from "./pages/order/Payment";
import ShopDetail from "./pages/order/ShopDetail";
import SearchBar from "./components/SearchBar";
import AllShop from "./pages/shop/AllShopList";
import ShopMain from "./pages/ShopMain";

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
          <Route path="/Allshop" element={<AllShop />} />
          <Route path="/Shop/:siSeq" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SIgnup />} />
          <Route path="/Mypage/*" element={<Mypage />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/ShopDetail" element={<ShopDetail />} />
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

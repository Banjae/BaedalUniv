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
import Order from "./pages/order/Order";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Fixmenu from "./components/FixMenu";
import NotFound from "./pages/NotFound";

// tailwind-styled-component
import tw from "tailwind-styled-components";

const Container = tw.div`
  p-6
  bg-orange-50
`;

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop/*" element={<Shop />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SIgnup />} />
          <Route path="/Mypage/*" element={<Mypage />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
      <Fixmenu />
    </Router>
  );
}

export default App;

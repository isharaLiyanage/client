import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import UserInfo from "./pages/UserInfo";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="App">
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/info/:id" element={<UserInfo />} />

            <Route
              path="/Login"
              element={user ? <Navigate replace to="/" /> : <Login />}
            />
            <Route
              path="/SignIn"
              element={user ? <Navigate replace to="/" /> : <SignIn />}
            />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;

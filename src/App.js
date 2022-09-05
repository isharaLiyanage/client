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
            <Route path="/client" element={<Home />}></Route>
            <Route exact path="/products/:category" element={<ProductList />} />
            <Route exact path="/product/:id" element={<Product />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/info/:id" element={<UserInfo />} />

            <Route
              path="/login"
              element={user ? <Navigate replace to="/client" /> : <Login />}
            />
            <Route
              path="/signIn"
              element={user ? <Navigate replace to="/client" /> : <SignIn />}
            />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;

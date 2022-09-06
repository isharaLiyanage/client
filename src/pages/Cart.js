import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { useSelector } from "react-redux";
function Cart() {
  const cart = useSelector((state) => state.cart);

  // style
  const Color = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-top: 4px;
    background-color: ${(props) => props.color};
  `;
  return (
    <div>
      <NavBar />
      <h5 className="h3 text-center mt-3">YOUR BAG</h5>
      <Row className="mt-3">
        <Col>
          <button>CONTINUE SHOPPING</button>
        </Col>
        <Col className=" d-flex">
          <h6>Shopping Bag(3)</h6>
          <h6> your Wishlist(0)</h6>
        </Col>
        <Col>
          <button>CHECKOUT NOW</button>
        </Col>
      </Row>

      <div className="mt-5">
        <Row>
          <Col className="col-12 col-sm-8">
            {cart.product.map((product) => (
              <Row className="my-3">
                <Col>
                  <img src={product.img} alt="" className=" img-fluid" />
                </Col>
                <Col>
                  {" "}
                  <ul>
                    <li>
                      <h6>Product : </h6>
                      {product.title}
                    </li>
                    <li>
                      <h6>ID :</h6> {product._id}
                    </li>
                    <li>
                      <Color color={product.color} />
                    </li>
                    <li>
                      <h6>Size :</h6> {product.size}
                    </li>
                  </ul>
                </Col>
                <Col>
                  <p>+ {product.quantity} -</p>
                  <p className="h5">$ {product.price * product.quantity}</p>
                </Col>
              </Row>
            ))}
          </Col>
          <Col className="col-12 col-sm-4">
            <h5>ORDER SUMMERY</h5>
            <p>Subtotal $ {cart.total}</p>
            <p>Estimated Shopping $ 5</p>
            <p>Shopping Discount $ 5</p>
            <p>Total $ {cart.total}</p>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;

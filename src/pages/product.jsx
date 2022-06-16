import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Col, Row } from "react-bootstrap";

import { publicRequest } from "../requestMothed";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
function Product() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [id]);

  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  // style
  const Color = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-top: 4px;
    background-color: ${(props) => props.color};
  `;
  const SizeSelect = styled.select``;
  const Size = styled.option``;
  return (
    <div>
      <NavBar />
      <Row className=" align-items-center mt-5">
        <Col className="col-12 col-md-5 col-sm-5">
          <img src={product.img} alt="" className=" img-fluid" />
        </Col>
        <Col>
          <h2 className="h2">Name and {product.title} </h2>
          <p>{product.desc}</p>
          <p className="h3">$ {product.price}</p>
          <div className="filter">
            <Row>
              <Col className=" col-12 col-md-6 col-sm-12 d-flex ">
                <h6>Color :</h6>
                <div className="d d-flex">
                  {product.color?.map((c) => (
                    <Color
                      color={c}
                      key={c}
                      className="mx-1"
                      onClick={() => setColor(c)}
                    />
                  ))}
                </div>
              </Col>

              <Col className=" d-flex">
                <h6>Size :</h6>
                <div className="d d-flex">
                  <SizeSelect onChange={(e) => setSize(e.target.value)}>
                    {product.size?.map((s) => (
                      <Size key={s} className="mx-1">
                        {s}
                      </Size>
                    ))}
                  </SizeSelect>
                </div>
              </Col>
              <Col className="col-12 mt-4 d-flex">
                <button
                  className=" btn-light"
                  onClick={() => handleQuantity("dec")}
                >
                  -
                </button>
                <input
                  type="text"
                  maxLength="2"
                  value={quantity}
                  style={{
                    width: "35px",
                    borderRadius: "25%",
                    borderBlockColor: "white",
                  }}
                  className="text-center mx-1"
                />
                <button
                  className=" btn-dark"
                  onClick={() => handleQuantity("inc")}
                >
                  +
                </button>
                <input type="hidden" name="id" />

                <div className="mx-5">
                  <button
                    className=" btn btn-outline-primary"
                    onClick={handleClick}
                  >
                    ADD TO CART
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default Product;

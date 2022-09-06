import React, { useState } from "react";

import NavBar from "../components/NavBar";
import Products from "../components/Products";
import Footer from "../components/Footer";

import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handelFilter = (e) => {
    const value = e.target.value;

    setFilter({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <NavBar />
      <h3 className="h1">{cat}</h3>
      <Row className="row mt-5  justify-space-around align-items-center">
        <Col className=" d-flex col-12 col-sm-6">
          <h6 className="">Filter Products:</h6>
          <select
            onChange={handelFilter}
            name="color"
            id="color"
            autoFocus
            required
            className="mx-2"
          >
            <option>Select</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
            <option value="gray">gray</option>
          </select>
          <select onChange={handelFilter} name="size" id="size" aria-required>
            <option>Select</option>
            <option value="M">M</option>
            <option value="S">S</option>
            <option value="L">L</option>
          </select>
        </Col>

        <Col className=" d-flex  col-12 col-sm-6">
          <h6> Sort Products:</h6>
          <select
            onChange={(e) => setSort(e.target.value)}
            name="sort"
            id="sort"
            aria-required
            className="mx-2"
          >
            <option value="newest">Newest</option>
            <option value="asc">Price(asc)</option>
            <option value="desc">Price(desc)</option>
          </select>
        </Col>
      </Row>
      <Products cat={cat} filters={filters} sort={sort} />
      <Footer />
    </div>
  );
}

export default ProductList;

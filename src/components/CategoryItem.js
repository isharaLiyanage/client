import React from "react";
import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CategoryItem({ item }) {
  return (
    <Col className=" col-md-4 col-sm-4 col-7 m-auto">
      <Link className="text-decoration-none" to={`/products/${item.cat}`}>
        <div className=" position-relative" key={item.title}>
          <img className=" img-fluid  " src={item.img} alt="" />
          <div className=" itemCenter">
            <h4 className=" h4Shadow">{item.title}</h4>
            <Button className=" btn-close-white ">SHOP NOW</Button>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default CategoryItem;

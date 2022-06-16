import React from "react";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { Row } from "react-bootstrap";

function Categories() {
  return (
    <Row className=" mt-5">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Row>
  );
}

export default Categories;

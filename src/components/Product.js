import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function Product({ item }) {
  return (
    <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center position-relative product-item my-3">
      <div className="hover">
        <img className=" img-fluid" src={item.img} alt="" />

        <div className=" itemCenter">
          <div className="alignItemHover">
            <div className="m-1">
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
            <div className="m-1">
              <Link to={`/product/${item._id}`}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Link>
            </div>
            <div className="m-1">
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
        </div>
        <div className=" card-body">
          <div className=" h5  position-relative">
            <div class="title pt-4 pb-1"> {item.title} </div>
            <h5 className=" text-black-50">{item.disc}</h5>
            <h5 className="text-black-50">{item.price}</h5>

            <Link to={`/product/${item._id}`}>
              <h5 className="text-black-50"></h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

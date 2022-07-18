import React from "react";
import { Container, Col, Row, Nav } from "react-bootstrap";

function Footer() {
  return (
    <footer className=" footer  bg-dark bg-opacity-10 ">
      <div>
        <Container>
          <Row className="">
            <Col className="col-12 col-md-4 mt-2">
              <h3 className="h5">Shopping Company</h3>
              <p className="p text-black-50 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                pariatur porro, nostrum dicta a sed exercitationem iusto
                sapiente voluptas expedita?
              </p>
            </Col>
            <Col className="col-6 col-sm-4 mt-2">
              <h3 className="h4">Quick Link</h3>
              <ul className=" nav d-block">
                <li>
                  <Nav.Link href={"/products/all"}>Products</Nav.Link>
                </li>
                <li>
                  <Nav.Link href={"/aboutUs"}>About Us</Nav.Link>
                </li>
                <li>
                  <Nav.Link href={"/products/all"}>Contact Us</Nav.Link>
                </li>
              </ul>
            </Col>
            <Col className="col-6 col-sm-4 mt-2">
              <h3 className="h3">FOLLOW US ON</h3>
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Youtube</li>
              </ul>
            </Col>
          </Row>
          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p>© 2021 Company, Inc. All rights reserved.</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;

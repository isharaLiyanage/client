import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer className=" position-relative ">
      <div>
        <Container>
          <Row className=" bg-light">
            <Col className="col-12 col-md-4 mt-2">
              <h3 className="h3">Company Name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                pariatur porro, nostrum dicta a sed exercitationem iusto
                sapiente voluptas expedita?
              </p>
            </Col>
            <Col className="col-6 col-sm-4 mt-2">
              <h3 className="h4">Quick Link</h3>
              <ul>
                <li>Products</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </Col>
            <Col className="col-6 col-sm-4 mt-2">
              <h3 className="h3">FOLLOW US ON</h3>
              <ul>
                <li>Products</li>
                <li>About Us</li>
                <li>Contact Us</li>
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

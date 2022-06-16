import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import img01 from "../img/01.jpg";
import img02 from "../img/02.jpg";
import img03 from "../img/03.jpg";

function Slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <Row style={{ backgroundColor: "rgb(161, 161, 161)" }}>
            <Col>
              <img className="d-block w-100" src={img01} alt="Second slide" />
            </Col>

            <Col className="m-auto p-4">
              <h3 className=" text-danger h1">15% OFFER</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <Row style={{ backgroundColor: "rgb(200, 200, 200)" }}>
            <Col className="m-auto p-4">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
            <Col>
              <img className="d-block w-100" src={img03} alt="Second slide" />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row style={{ backgroundColor: "rgba(71, 126, 150, 0.856)" }}>
            <Col>
              <img className="d-block w-100" src={img02} alt="Second slide" />
            </Col>

            <Col className="m-auto p-4">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;

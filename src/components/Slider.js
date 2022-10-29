import React from "react";
import { Carousel, Row, Col, Card } from "react-bootstrap";
import img01 from "../img/01.jpg";
import img02 from "../img/02.jpg";
import img03 from "../img/03.jpg";

function Slider() {
  return (
    <div>
      <Carousel className="d-none d-sm-block">
        <Carousel.Item interval={1000}>
          <Row style={{ backgroundColor: "rgb(161, 161, 161)" }}>
            <Col>
              <img className="d-block w-100" src={img01} alt="Second slide" />
            </Col>

            <Col className="m-auto p-4">
              <h3 className="  slider-text">
                {" "}
                <span>15%</span> OFFER
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <Row style={{ backgroundColor: "rgb(200, 200, 200)" }}>
            <Col className="m-auto p-4">
              <h3 className="  slider-text">
                {" "}
                <span>50%</span> OFFER
              </h3>
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
              {" "}
              <img
                className="d-block w-100"
                src={img02}
                alt="Second slide"
              />{" "}
            </Col>
            <Col className="m-auto p-4">
              <h3 className="  slider-text">
                {" "}
                <span>5%</span> OFFER
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>{" "}
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>

      <Carousel className=" d-sm-none">
        <Carousel.Item interval={1000}>
          <Card style={{ backgroundColor: "rgb(200, 200, 200)" }}>
            <Card.Img src={img01} alt="15% OFFER" />
            <Card.ImgOverlay className=" top-50  bg-dark bg-opacity-25 sliderBorder">
              <Card.Title>
                <div className=" text-danger h1  text-center">15% OFFER</div>
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </Card.Text>{" "}
            </Card.ImgOverlay>
          </Card>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <Card style={{ backgroundColor: "rgb(200, 200, 200)" }}>
            <Card.Img src={img03} alt="5% OFFER" />
            <Card.ImgOverlay className=" top-50  bg-dark bg-opacity-25 sliderBorder">
              <Card.Title>
                {" "}
                <div className=" text-danger h1  text-center">5% OFFER</div>
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </Card.Text>{" "}
            </Card.ImgOverlay>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ backgroundColor: "rgb(200, 200, 200)" }}>
            <Card.Img src={img02} alt="10% OFFER" />
            <Card.ImgOverlay className=" top-50 bg-dark bg-opacity-25 sliderBorder">
              <Card.Title>
                <div className=" text-danger h1  ">10% OFFER</div>
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </Card.Text>{" "}
            </Card.ImgOverlay>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;

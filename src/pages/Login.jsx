import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { Container, Form, FormControl, Alert, Row, Col } from "react-bootstrap";
import styled from "styled-components";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    console.log(password);
  };

  // style
  const ButtonSubmit = styled.button(`
    &::disabled {
      background-color: #5d9effe7;
      cursor: not-allowed;
      color: #5d9effe7;
    }
  `);
  return (
    <div className="">
      <Container className=" position-relative">
        <div className="formBackground"></div>
      </Container>
      <div className="form-signing">
        <div className=" d-flex align-items-center">
          <Form className="mt-auto mb-auto">
            <h2 className="h1">SIGN IN </h2>
            <Form.Floating>
              <FormControl
                type="text"
                placeholder="User Name"
                className="me-2"
                aria-label="user "
                onChange={(e) => setUsername(e.target.value)}
              ></FormControl>
              <label for="floatingInput">User Name</label>
            </Form.Floating>
            <Form.Floating>
              <FormControl
                type="Password"
                placeholder="Your Email..."
                className="me-2 mt-2"
                aria-label="Password"
                onChange={(e) => setPassword(e.target.value)}
              ></FormControl>

              <label for="floatingPassword">Password</label>
            </Form.Floating>
            <ButtonSubmit
              onClick={handleClick}
              disabled={isFetching}
              className="btn btn-lg  w-100 btn-primary mt-3"
            >
              Login in
            </ButtonSubmit>
            <Row>
              <Col>
                {error && (
                  <Alert variant="danger" className="mt-3">
                    Something Wrong...
                  </Alert>
                )}
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;

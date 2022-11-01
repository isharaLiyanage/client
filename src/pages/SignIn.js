import React, { useState } from "react";
import {
  Container,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sign } from "../redux/apiCalls";

function SignIn() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isFetching, errors } = useSelector((state) => state.user);

  const user = useSelector((state) => state.user.currentUser);
  if (user) {
    navigate("./");
  }

  const handleClick = (e) => {
    e.preventDefault();
    sign(dispatch, { username, email, password });
  };

  return (
    <div className="">
      <Container className=" position-relative">
        <div className="formBackground"></div>
      </Container>
      <div className="form-signing">
        <div className=" d-flex align-items-center">
          <Form className="mt-auto mb-auto">
            <Form.Floating>
              <FormControl
                type="text"
                placeholder="Your Name... "
                className="me-2"
                aria-label="Name"
                onChange={(e) => setUsername(e.target.value)}
              ></FormControl>
              <label className="" htmlFor="floatingInput">
                Name
              </label>
            </Form.Floating>
            <Form.Floating>
              <FormControl
                type="text"
                placeholder="Email address..."
                className="me-2 mt-1"
                aria-label="Email"
                onChange={(e) => setEmail(e.target.value)}
              ></FormControl>
              <label htmlFor="floatingInput">Email </label>
            </Form.Floating>
            <Form.Floating>
              <FormControl
                type="Password"
                placeholder="Your Email..."
                className="me-2 mt-1"
                aria-label="Password"
                onChange={(e) => setPassword(e.target.value)}
              ></FormControl>

              <label htmlFor="floatingPassword">Password</label>
            </Form.Floating>
            <Button
              disabled={isFetching}
              onClick={handleClick}
              className=" btn-lg  w-100 btn-primary mt-3"
            >
              Sign in
            </Button>
            <Row>
              <Col>
                {errors && (
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
export default SignIn;

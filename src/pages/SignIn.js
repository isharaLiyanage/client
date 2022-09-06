import React from "react";

import { Container, Form, FormControl, Button } from "react-bootstrap";

function SignIn() {
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
              ></FormControl>
              <label for="floatingInput">Name</label>
            </Form.Floating>
            <Form.Floating>
              <FormControl
                type="text"
                placeholder="Email address..."
                className="me-2 mt-1"
                aria-label="Email"
              ></FormControl>
              <label for="floatingInput">Email </label>
            </Form.Floating>
            <Form.Floating>
              <FormControl
                type="Password"
                placeholder="Your Email..."
                className="me-2 mt-1"
                aria-label="Password"
              ></FormControl>

              <label for="floatingPassword">Password</label>
            </Form.Floating>
            <Button type="submit" className=" btn-lg  w-100 btn-primary mt-3">
              Sign in
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

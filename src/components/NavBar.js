import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function NavBar() {
  const logUser = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);

  const userName = logUser ? `${logUser.username}` : "new";
  const userID = logUser ? `${logUser._id}` : "new";

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href={"./"}>Home</Nav.Link>
              <Nav.Link href={"./products/all"}>Products</Nav.Link>

              <Nav.Link href={"./aboutUs"}>About Us</Nav.Link>
            </Nav>
            <Link
              to="/cart"
              className="mx-md-0 mx-lg-4 mx-sm-0 position-relative text-decoration-none"
              style={{ cursor: "pointer" }}
            >
              <div className="  position-relative" style={{ width: "16px" }}>
                <FontAwesomeIcon icon={faCartShopping} />
                <p
                  style={{ position: "absolute", top: "-10px", right: "-10px" }}
                >
                  {quantity}
                </p>
              </div>
            </Link>
            {userName == null ? (
              <Link to="/login">Login</Link>
            ) : (
              <Nav.Link href={"./info/" + userID}>{userName}</Nav.Link>
            )}{" "}
            {/* {userName ? <Link>sdsdsd</Link> : <Link to="/login">Login</Link>} */}
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavBar = () => {
  const cartProducts = useSelector((state) => state.cart); //cart is acctually from cartSlice reducer where cart: cartSlice
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ position: "static" }}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <h2>Redux Shpping</h2>{" "}
        </Navbar.Brand>

        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link to="/" as={Link}>
            <h5>Products</h5>
          </Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav.Link to="/cart" as={Link}>
            <h5>{cartProducts.length} Items in the cart </h5>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

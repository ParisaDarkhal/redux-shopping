import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { remove } from "./store/cartSlice";
import { autoBatchEnhancer } from "@reduxjs/toolkit";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeItem = (id) => {
    //dispatch a remove action
    dispatch(remove(id));
  };
  return (
    <>
      <Container>
        <Row className=" justify-content-center">
          {products.map((product) => (
            <Col
              md={12}
              style={{ marginBottom: 10, marginLeft: 100 }}
              key={product.id}
              className=" justify-content-center"
            >
              <Card className="h-150 " style={{ width: "18rem" }}>
                <div className="text-center">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ width: "100px", height: "130px" }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text> UDS {product.price}</Card.Text>
                </Card.Body>
                <Card.Footer style={{ backgroundColor: "white" }}>
                  <Button
                    variant="danger"
                    onClick={() => removeItem(product.id)}
                  >
                    Delete
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Cart;

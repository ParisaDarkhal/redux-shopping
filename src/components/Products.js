import { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./store/cartSlice";
import { getProducts } from "./store/productSlice";
import StatusCode from "../utils/statusCode";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  //   const [products, setProducts] = useState([]);
  useEffect(() => {
    //call from expternal api
    //dispatch an acion for fetchproducts from productSlice (the action of getProducts)
    dispatch(getProducts());
  }, []);

  if (status === StatusCode.LOADING) {
    return <p> Loading ...</p>;
  }
  if (status === StatusCode.ERROR) {
    return (
      <Alert key="danger" variant="danger">
        Something went wrong, please try again later.
      </Alert>
    );
  }

  const addToCart = (product) => {
    //dispatch an add action
    dispatch(add(product));
  };
  return (
    <>
      <Container>
        <Row className="row justify-content-center">
          {products.map((product) => (
            <Col
              s={12}
              md={6}
              lg={3}
              style={{ marginBottom: 10 }}
              key={product.id}
            >
              <Card className="h-150" style={{ width: "18rem" }}>
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
                  <Button variant="primary" onClick={() => addToCart(product)}>
                    Add To Cart
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

export default Products;

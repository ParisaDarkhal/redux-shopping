import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "./store/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    //call from expternal api
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  const addToCart = (product) => {
    //dispatch an add action
    dispatch(add(product));
  };
  return (
    <>
      <div className="row ">
        {products.map((product) => (
          <div
            className="col-md-3 "
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
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;

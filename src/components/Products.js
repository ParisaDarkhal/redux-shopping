import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  return (
    <>
      <p>Products dashboard</p>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: "100px", height: "130px" }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text> UDS {product.price}</Card.Text>
                <Button variant="primary">Add To Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;

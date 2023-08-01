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
                <Button variant="primary">Add To Cart</Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;

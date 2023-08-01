import { useSelector, useDispatch } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { remove } from "./store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeItem = (id) => {
    //dispatch a remove action
    dispatch(remove(id));
  };
  return (
    <>
      <div className="row ">
        {products.map((product) => (
          <div
            className="col-md-12 "
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
                <Button variant="danger" onClick={() => removeItem(product.id)}>
                  Delete
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;

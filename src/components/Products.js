import { useEffect, useState } from "react";

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
      {JSON.stringify(products)}
    </>
  );
};

export default Products;

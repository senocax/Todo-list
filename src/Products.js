import React from "react";

const Products = () => {
  const products = ["React Hooks", "javascript", "nodejs"];
  const listProducts = products.map((product) => (
    <li key={product.toString()}> {product} </li>
  ));

  return (
    <div>
      <h1>Skills</h1>
      <ul>{listProducts}</ul>
    </div>
  );
};

export default Products;

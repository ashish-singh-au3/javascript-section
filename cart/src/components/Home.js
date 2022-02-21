import React from "react";

import { CartState } from "../context/context";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return (
    <div>
      Home
      {products.map((prod) => {
        return <span>{prod.title}</span>;
      })}
    </div>
  );
};

export default Home;

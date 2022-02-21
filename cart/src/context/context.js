import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./reducer";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [].map(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json));
  });

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;

{
  /* 


    import React, { createContext, useContext, useReducer } from "react";

import { cartReducer } from "./reducer";

const Cart = createContext();

const context = ({ children }) => {
  const products = fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => console.log(json));

  console.log(products);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default context;

export const CartState = () => {
  return useContext(Cart);
};
*/
}

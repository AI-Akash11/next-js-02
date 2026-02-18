"use client";

import { CartContext } from "@/contexts/CartProvider";
import { use } from "react";

const CartItems = () => {
  const { cart } = use(CartContext);
  return (
    <div>
      {cart.length} Items Added
      <hr />
      <ul>
        {cart.map((c) => (
          <li>{c.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;

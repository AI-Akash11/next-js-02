"use client"
import { CartContext } from "@/contexts/CartProvider";
import React, { use, useState } from "react";

const CartButton = ({food}) => {
    const [inCart, setInCart] = useState(false)
    const {cart, addToCart} = use(CartContext);
    const handleAddToCart = () => {
        addToCart(food);
        setInCart(true);
    }

  return (
    <button 
    onClick={handleAddToCart}
    disabled={inCart}
    className="flex-1 rounded-xl bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition disabled:bg-gray-100 disabled:text-gray-700">
        {inCart? "Added": "Add to Cart"}
      
    </button>
  );
};

export default CartButton;

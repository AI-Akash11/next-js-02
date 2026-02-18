"use client"

import { CartContext } from "@/contexts/CartProvider";
import { use } from "react";

const CartItems = () => {
    const {cart } = use(CartContext);
    return (
        <div>
            {cart.length} Items Added
        </div>
    );
};

export default CartItems;
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

function CartWidget() {
    return (
        <div className="cart-widget">
            <FaShoppingCart size={24} />
        </div>
    );
}

export default CartWidget;

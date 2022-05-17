import React from "react";
import { useCartContext } from "../../context/cart_context";
import { FaTimes } from "react-icons/fa";
import CartItem from "./CartItem";
import { formatPrice } from "../../utils";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, isCartOpen, total_amount, clearCart, closeCart } =
    useCartContext();
  return (
    <aside className={`cart-details ${isCartOpen ? "show" : ""}`}>
      <header className="header">
        <h1>Your Cart</h1>
        <button className="btn btn--icon" onClick={closeCart}>
          <FaTimes className="icon" />
        </button>
      </header>
      <div className="cart-items-container">
        {cart.length !== 0 &&
          cart.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
      </div>
      <div className="total">
        <div className="total__text">
          <span>Total:</span>
          <span>{formatPrice(total_amount)}</span>
        </div>
        <Link to="/checkout" onClick={closeCart} className="btn btn--secondary">
          Order
        </Link>
        <button type="button" className="btn btn--text" onClick={clearCart}>
          Remove all
        </button>
      </div>
    </aside>
  );
};

export default Cart;

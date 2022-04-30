import React from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, isCartOpen, total, clearCart, closeCart } = useGlobalContext();
  return (
    <aside className={`cart-details ${isCartOpen ? "show" : ""}`}>
      <header className="header">
        <h1>Your Cart</h1>
        <button className="btn btn--icon" onClick={closeCart}>
          <FaTimes className="icon" />
        </button>
      </header>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <div className="total">
        <div className="total__text">
          <span>Total:</span>
          <span>{`$${total}`}</span>
        </div>
        <a href="#" className="btn btn--secondary">
          Order
        </a>
        <button type="button" className="btn btn--text" onClick={clearCart}>
          Remove all
        </button>
      </div>
    </aside>
  );
};

export default Cart;

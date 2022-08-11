import React from "react";
import { useCartContext } from "../../context/cart_context";
import { FaTimes } from "../../utils/icons";
import CartItem from "./CartItem";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, isCartOpen, total_amount, clearCart, closeCart } =
    useCartContext();
  return (
    <aside
      data-testid="cart"
      className={`cart-details ${isCartOpen ? "show" : ""}`}
    >
      <header>
        <h1>Your Cart</h1>
        <button
          type="button"
          className="btn btn--icon"
          onClick={closeCart}
          aria-label="close"
          data-testid="close-cart-btn"
        >
          <FaTimes className="icon" />
        </button>
      </header>
      <div className="cart-items-container">
        {cart.length !== 0 &&
          cart.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
      </div>
      <footer className="total">
        <div className="total__text">
          <span>Total:</span>
          <span data-testid="total-price">{formatPrice(total_amount)}</span>
        </div>
        <Link to="/checkout" onClick={closeCart} className="btn btn--secondary">
          Order
        </Link>
        <button
          aria-label="remove all items"
          type="button"
          className="btn btn--text"
          onClick={clearCart}
        >
          Remove all
        </button>
      </footer>
    </aside>
  );
};

export default Cart;

import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import StripeCheckout from "../components/checkout/StripeCheckout";

const Checkout = () => {
  const { cart } = useCartContext();
  // If cart is empty
  if (cart.length < 1) {
    return (
      <div className="checkout-empty" data-testid="checkout-empty">
        <p>your cart is empty</p>
        <Link to="/" className="btn btn--secondary">
          Fill it
        </Link>
      </div>
    );
  }
  return <StripeCheckout />;
};

export default Checkout;

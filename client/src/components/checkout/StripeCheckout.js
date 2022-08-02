import React, { useState, useEffect } from "react";
import { useCartContext } from "../../context/cart_context";
import { formatPrice } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// Stripe imports
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
  const { cart, total_amount, clearCart } = useCartContext();
  const navigate = useNavigate();

  // Stripe Stuff
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  // Stripe checkout
  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post(
        "/.netlify/functions/create-payment-intent",

        JSON.stringify({ cart, total_amount })
      );
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    createPaymentIntent();
  }, []);

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      setTimeout(() => {
        clearCart();
        navigate("/");
      }, 3000);
    }
  };

  return (
    <div className="checkout">
      {succeeded ? (
        <article className="checkout-inner checkout-inner--success">
          <h1>Checkout Page</h1>
          <p>Thank you</p>
          <p>Your payment was successful!</p>
          <p>Redirecting to home page shortly</p>
        </article>
      ) : (
        <article className="checkout-inner">
          <h1>Checkout Page</h1>
          <p>
            Your total is <span>{formatPrice(total_amount)}</span>
          </p>
        </article>
      )}
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement id="card-element" onChange={handleChange} />
        <button
          className="btn btn--secondary"
          disabled={processing || disabled || succeeded}
          id="submit"
        >
          <span id="button">
            {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
          </span>
        </button>
        {/* Show any error when processing the payment */}
        {error && (
          <div id="card-error" role="alert">
            {error}
          </div>
        )}
        {/* Show a success message upon completion */}
        <p className={succeeded ? "result-message" : "result-message hidden "}>
          Payment succeeded, see the result in your{" "}
          <a
            className="btn btn--text"
            href={`https://dashboard.stripe.com/test/payments`}
          >
            Stripe Dashboard.
          </a>{" "}
          Refresh the page to pay again.
        </p>
      </form>
      <p className="test">Test Card Number: 4242 4242 4242 4242</p>
    </div>
  );
};

const StripeCheckout = () => {
  return (
    <Elements stripe={promise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeCheckout;

import React, { useState, useRef, useEffect } from "react";
import {
  FaShoppingCart,
  FaCaretUp,
  FaCaretDown,
  FaRegTimesCircle,
} from "react-icons/fa";
import { pasta, pizza, salad, drinks } from "./data";

const Cart = () => {
  return (
    <aside className="cart-details">
      <h1>Your Cart</h1>
      <article className="cart-item">
        <div className="cart-item__img">
          <img src="/img/pizza/0.png" alt="Roberto" />
        </div>
        <div className="cart-item__text">
          <h3>Roberto</h3>
          <p>$18.99</p>
        </div>
        <div className="cart-item__quantity">
          <button className="btn btn--small" type="button">
            <i className="fa-solid fa-caret-up"></i>
          </button>
          <p>1</p>
          <button className="btn btn--small" type="button">
            <i className="fa-solid fa-caret-down"></i>
          </button>
        </div>
        <button className="btn btn--icon">
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
      </article>
      <div className="total">
        <div className="total__text">
          <span>Total:</span>
          <span>$245</span>
        </div>
        <a href="#" className="btn btn--secondary">
          Order
        </a>
        <button type="button" className="btn btn--text">
          Remove all
        </button>
      </div>
    </aside>
  );
};

export default Cart;

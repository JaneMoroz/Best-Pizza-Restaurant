import React from "react";
import { useCartContext } from "../../context/cart_context";
import { FaCaretUp, FaCaretDown, FaRegTimesCircle } from "react-icons/fa";

const CartItem = ({ id, name, image, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  return (
    <article className="cart-item">
      <div className="cart-item__img">
        <img src={image} alt={name} />
      </div>
      <div className="cart-item__text">
        <h3>{name}</h3>
        <p>{`$${price}`}</p>
      </div>
      <div className="cart-item__quantity">
        <button
          className="btn btn--small"
          type="button"
          onClick={() => toggleAmount(id, "inc")}
        >
          <FaCaretUp className="icon" />
        </button>
        <p>{amount}</p>
        <button
          className="btn btn--small"
          type="button"
          onClick={() => toggleAmount(id, "dec")}
        >
          <FaCaretDown className="icon" />
        </button>
      </div>
      <button className="btn btn--icon" onClick={() => removeItem(id)}>
        <FaRegTimesCircle className="icon" />
      </button>
    </article>
  );
};

export default CartItem;

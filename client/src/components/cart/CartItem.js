import React from "react";
import { useCartContext } from "../../context/cart_context";
import { FaCaretUp, FaCaretDown, FaRegTimesCircle } from "../../utils/icons";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";
import Image from "../Image";

const CartItem = ({ item }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const {
    menuId,
    id,
    name,
    image,
    webpImg,
    price,
    amount,
    size,
    toppings,
    category,
  } = item;
  return (
    <article className="cart-item">
      <Link to={`menu/${menuId}`} className="cart-item__img">
        <Image src={webpImg} fallback={image} alt={name} />
        {/* <img src={image} alt={name} /> */}
      </Link>
      <div className="cart-item__text">
        <h3>{name}</h3>
        <p>{formatPrice(price)}</p>
        {(category === "pizza" || category === "drink") && (
          <p className="cart-item__details">{size}</p>
        )}
        {toppings.length > 0 && (
          <p className="cart-item__details">
            Add more {toppings.join(", ").toLowerCase()}
          </p>
        )}
      </div>
      <div className="cart-item__quantity">
        <button
          className="btn btn--small"
          type="button"
          onClick={() => toggleAmount(id, "inc")}
          aria-label="increase quantity"
        >
          <FaCaretUp className="icon" />
        </button>
        <p>{amount}</p>
        <button
          className="btn btn--small"
          type="button"
          onClick={() => toggleAmount(id, "dec")}
          aria-label="decrease quantity"
        >
          <FaCaretDown className="icon" />
        </button>
      </div>
      <button
        type="button"
        className="btn btn--icon"
        onClick={() => removeItem(id)}
        aria-label="delete from cart"
      >
        <FaRegTimesCircle className="icon" />
      </button>
    </article>
  );
};

export default CartItem;

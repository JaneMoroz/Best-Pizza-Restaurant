import React from "react";
import { useCartContext } from "../../context/cart_context";
import { FaCaretUp, FaCaretDown, FaRegTimesCircle } from "react-icons/fa";
import { formatPrice } from "../../utils";
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
          <p className="size">{size}</p>
        )}
        {toppings.length > 0 && (
          <p className="toppings">
            Add more {toppings.join(", ").toLowerCase()}
          </p>
        )}
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

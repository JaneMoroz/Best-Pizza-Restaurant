import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";
import { formatPrice } from "../../utils";

const MenuItem = ({ item }) => {
  const { id, name, image, price, description } = item;
  const { addToCart } = useCartContext();

  return (
    <article className="product">
      <Link to={`menu/${id}`}>
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <p>
          {description.join(", ").substring(0, 60)}
          ...
        </p>
      </Link>
      <div>
        <span>{formatPrice(price)}</span>
        <button
          type="button"
          className="btn btn--icon"
          onClick={() => addToCart({ id, name, image, price })}
        >
          <FaShoppingCart className="icon" />
        </button>
      </div>
    </article>
  );
};

export default MenuItem;

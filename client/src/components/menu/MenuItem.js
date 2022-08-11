import React from "react";
import { FaShoppingCart } from "../../utils/icons";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";
import { formatPrice } from "../../utils/helpers";
import Image from "../Image";
import { useNavContext } from "../../context/nav_context";

const MenuItem = ({ item }) => {
  const { id, name, image, webpImg, price, description, category } = item;
  const { addToCart } = useCartContext();
  const { closeSearch } = useNavContext();

  return (
    <article className="product" data-testid="menu-item">
      <Link
        to={`menu/${id}`}
        onClick={closeSearch}
        data-testid="go-to-menu-item-page"
      >
        <Image src={webpImg} fallback={image} alt={name} />
        {/* <img src={image} alt={name} /> */}
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
          onClick={() => addToCart({ id, name, image, price, category })}
          aria-label="add to cart"
          data-testid="add-to-cart-btn"
        >
          <FaShoppingCart className="icon" />
        </button>
      </div>
    </article>
  );
};

export default MenuItem;

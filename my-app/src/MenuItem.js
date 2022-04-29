import React, { useState, useRef, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const { name, image, id, price, description } = item;
  return (
    <article className="product">
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>
        {description.join(", ").substring(0, 60)}
        ...
      </p>
      <div>
        <span>{`$${price}`}</span>
        <button type="button" className="btn btn--icon">
          <FaShoppingCart className="icon" />
        </button>
      </div>
    </article>
  );
};

export default MenuItem;

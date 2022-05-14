import React from "react";
import { useParams } from "react-router-dom";
import { menu } from "../data";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

const SingleItem = () => {
  const { addToCart } = useCartContext();
  const { id } = useParams();
  const item = menu.find((item) => item.id === +id);
  return (
    <article className="single-product">
      <div className="container-center">
        <img src={item.image} alt={item.name} />
        <div className="single-product__text">
          <h1>{item.name}</h1>
          <p className="description">{item.description.join(", ")}</p>
          <p className="price">{`$${item.price}`}</p>
          <button
            type="button"
            className="btn btn--outlined"
            onClick={() =>
              addToCart({
                id: item.id,
                name: item.name,
                image: item.image,
                price: item.price,
              })
            }
          >
            Order
          </button>
          <Link type="button" to={"/"} className="btn btn--secondary">
            Back
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SingleItem;

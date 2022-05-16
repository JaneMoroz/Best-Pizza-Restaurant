import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { menu } from "../data";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { useMenuContext } from "../context/menu_context";
import { formatPrice } from "../utils";

const SingleItem = () => {
  const id = useParams().id;
  const { addToCart } = useCartContext();
  const {
    fetchMenuItem,
    single_menu_item_loading: loading,
    single_menu_item_error: error,
    single_menu_item: item,
    single_menu_item_options: options,
  } = useMenuContext();

  useEffect(() => {
    fetchMenuItem(+id);
  }, [id]);

  if (loading) {
    return <div className="loader"></div>;
  }
  if (error) {
    return (
      <div className="error">
        <h1>There is an error!</h1>
        <p>Try again later.</p>
      </div>
    );
  }

  return (
    <article className="single-product">
      <div className="container-center">
        <img src={item.image} alt={item.name} />
        <div className="single-product__text">
          <h1>{item.name}</h1>
          <p className="description">
            {item.description && item.description.join(", ")}
          </p>
          {options && (
            <div className="options">
              {options.map((option, index) => {
                return (
                  <div key={index} className="option">
                    <span>{option.name}:</span>
                    <div className="option__btns">
                      {option.values.map((value, index) => {
                        return (
                          <button
                            key={index}
                            className="btn btn--outlined btn--small"
                          >
                            {value}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <p className="price">{formatPrice(item.price)}</p>
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

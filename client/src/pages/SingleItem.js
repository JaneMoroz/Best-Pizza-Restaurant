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
    closeSubmenu,
    fetchMenuItem,
    single_menu_item_loading: loading,
    single_menu_item_error: error,
    single_menu_item: item,
    single_menu_item_options: options,
  } = useMenuContext();

  const [finalPrice, setFinalPrice] = useState("");
  const [size, setSize] = useState("Small");
  const [toppings, setToppings] = useState([]);

  useEffect(() => {
    fetchMenuItem(+id);
  }, [id]);

  useEffect(() => {
    if (item) setFinalPrice(item.price);
  }, [item]);

  useEffect(() => {
    var oldPrice = +item.price;
    var newPrice = "";
    if (size === "Small") newPrice = oldPrice;
    if (size === "Medium") newPrice = oldPrice + 300;
    if (size === "Large") newPrice = oldPrice + 500;
    if (toppings.length > 0) newPrice += 100 * toppings.length;
    setFinalPrice(newPrice);
  }, [size, toppings]);

  const handleOption = (e) => {
    let name = e.target.name;
    let value = e.target.textContent;
    if (name === "Size") {
      setSize(value);
    } else {
      let tempToppings = [...toppings];
      if (tempToppings.includes(value)) {
        const index = tempToppings.findIndex((item) => item === value);
        tempToppings.splice(index, 1);
      } else {
        tempToppings.push(value);
      }
      setToppings(tempToppings);
    }
  };

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      image: item.image,
      price: finalPrice,
      size,
      toppings,
      category: item.category,
    });
    setToppings([]);
    setSize("Small");
  };

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
    <article className="single-product" onMouseOver={closeSubmenu}>
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
                            name={option.name}
                            key={index}
                            className={`btn btn--outlined btn--small ${
                              toppings.includes(value) || size === value
                                ? "btn--active"
                                : ""
                            }`}
                            onClick={(e) => handleOption(e)}
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
          <p className="price">{formatPrice(finalPrice)}</p>
          <button
            type="button"
            className="btn btn--outlined"
            onClick={() => handleAddToCart(item)}
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

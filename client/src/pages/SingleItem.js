import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { useMenuContext } from "../context/menu_context";
import { formatPrice } from "../utils/helpers";
import Image from "../components/Image";
import { getPrice } from "../utils/helpers";

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
    setFinalPrice(getPrice(+item.price, size, toppings));
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
        <p className="status">404!</p>
        <h1>Page doesn't exist</h1>
        <img src="/img/best-pizza-error.svg" alt="Error" />
        <Link to="/" type="button" className="btn btn--secondary">
          Home
        </Link>
      </div>
    );
  }

  return (
    <article className="single-product" data-testid="single-item">
      <div className="container-center">
        <Image src={item.webpImg} fallback={item.image} alt={item.name} />
        {/* <img src={item.image} alt={item.name} /> */}
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
                            type="button"
                            name={option.name}
                            key={index}
                            className={`btn btn--outlined btn--small ${
                              toppings.includes(value) || size === value
                                ? "btn--active"
                                : ""
                            }`}
                            onClick={(e) => handleOption(e)}
                            data-testid={`${option.name}-item-option`}
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
            data-testid="order"
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

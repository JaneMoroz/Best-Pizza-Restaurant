import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
import { pasta, pizza, salad, drinks } from "./data";
import MenuItem from "./MenuItem";

const Menu = () => {
  const { closeSubmenu } = useGlobalContext();

  const [menuItems, setMenuItems] = useState(pizza);
  const [category, setCategory] = useState("pizza");
  const [filter, setFilter] = useState("all");

  const allTypes = ["all", ...new Set(menuItems.map((item) => item.type))];
  const [menuTypes, setMenuTypes] = useState(allTypes);

  const filterItems = (type) => {
    if (category === "pizza") {
      if (type === "all") {
        setMenuItems(pizza);
        setFilter("all");
        return;
      }
      const newItems = pizza.filter((item) => item.type === type);
      setMenuItems(newItems);
      setFilter(type);
    }

    if (category === "pasta") {
      if (type === "all") {
        setMenuItems(pasta);
        setFilter("all");
        return;
      }
      const newItems = pasta.filter((item) => item.type === type);
      setMenuItems(newItems);
      setFilter(type);
    }

    if (category === "salads") {
      if (type === "all") {
        setMenuItems(salad);
        setFilter("all");
        return;
      }
      const newItems = salad.filter((item) => item.type === type);
      setMenuItems(newItems);
      setFilter(type);
    }

    if (category === "drinks") {
      if (type === "all") {
        setMenuItems(drinks);
        setFilter("all");
        return;
      }
      const newItems = drinks.filter((item) => item.type === type);
      setMenuItems(newItems);
      setFilter(type);
    }
  };

  const handleClick = (category) => {
    setFilter("all");
    if (category === "pizza") {
      setCategory("pizza");
      setMenuItems(pizza);

      const allTypes = ["all", ...new Set(pizza.map((item) => item.type))];
      setMenuTypes(allTypes);
    }
    if (category === "pasta") {
      setCategory("pasta");
      setMenuItems(pasta);
      const allTypes = ["all", ...new Set(pasta.map((item) => item.type))];
      setMenuTypes(allTypes);
    }
    if (category === "salads") {
      setCategory("salads");
      setMenuItems(salad);
      const allTypes = ["all", ...new Set(salad.map((item) => item.type))];
      setMenuTypes(allTypes);
    }
    if (category === "drinks") {
      setCategory("drinks");
      setMenuItems(drinks);
      const allTypes = ["all", ...new Set(drinks.map((item) => item.type))];
      setMenuTypes(allTypes);
    }
  };

  return (
    <section className="menu" onMouseOver={closeSubmenu}>
      <nav className="menu__nav">
        <ul>
          <li>
            <button
              className={`btn ${category === "pizza" ? "btn--active" : ""}`}
              type="button"
              onClick={() => handleClick("pizza")}
            >
              Pizza
            </button>
          </li>
          <li>
            <button
              className={`btn ${category === "pasta" ? "btn--active" : ""}`}
              type="button"
              onClick={() => handleClick("pasta")}
            >
              Pasta
            </button>
          </li>
          <li>
            <button
              className={`btn ${category === "salads" ? "btn--active" : ""}`}
              type="button"
              onClick={() => handleClick("salads")}
            >
              Salads
            </button>
          </li>
          <li>
            <button
              className={`btn ${category === "drinks" ? "btn--active" : ""}`}
              type="button"
              onClick={() => handleClick("drinks")}
            >
              Drinks
            </button>
          </li>
        </ul>
      </nav>
      <div className="menu__products">
        <nav className="filters">
          <ul>
            {menuTypes.map((type, index) => {
              if (type) {
                return (
                  <li key={index}>
                    <button
                      className={`btn ${type === filter ? "btn--active" : ""}`}
                      type="button"
                      onClick={() => filterItems(type)}
                    >
                      {`${type === "all" ? "all" : `#${type}`}`}
                    </button>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
        <div className="products">
          {menuItems.map((item) => {
            return <MenuItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;

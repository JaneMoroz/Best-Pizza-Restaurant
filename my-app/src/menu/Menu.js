import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { menu, pasta, pizza, salad, drinks } from "../data";
import MenuItem from "./MenuItem";

const Menu = () => {
  const { closeSubmenu } = useGlobalContext();

  const [category, setCategory] = useState("pizza");
  const [filter, setFilter] = useState("all");
  const [menuItems, setMenuItems] = useState(
    menu.filter((menuItem) => menuItem.category === category)
  );

  const allTypes = ["all", ...new Set(menuItems.map((item) => item.type))];
  const [menuTypes, setMenuTypes] = useState(allTypes);

  const filterItems = (type) => {
    if (type === "all") {
      setMenuItems(menu.filter((menuItem) => menuItem.category === category));
      setFilter("all");
      return;
    }
    const newItems = menu.filter(
      (menuItem) => menuItem.category === category && menuItem.type === type
    );
    setMenuItems(newItems);
    setFilter(type);
  };

  const handleClick = (category) => {
    setCategory(category);
    setMenuItems(menu.filter((menuItem) => menuItem.category === category));
    const allTypes = [
      "all",
      ...new Set(
        menu
          .filter((item) => item.category === category)
          .map((item) => item.type)
      ),
    ];
    setMenuTypes(allTypes);
    setFilter("all");
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
              className={`btn ${category === "salad" ? "btn--active" : ""}`}
              type="button"
              onClick={() => handleClick("salad")}
            >
              Salads
            </button>
          </li>
          <li>
            <button
              className={`btn ${category === "drink" ? "btn--active" : ""}`}
              type="button"
              onClick={() => handleClick("drink")}
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

import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import { menu, pasta, pizza, salad, drinks } from "../data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import MenuItem from "./MenuItem";
import paginate from "../utils";

const Menu = () => {
  const { closeSubmenu, searchMode, setSearchMode, searchTerm } =
    useGlobalContext();

  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const [menuTypes, setMenuTypes] = useState([]);

  useEffect(() => {
    setCategory("pizza");
    setFilter("all");
    setMenuItems(menu.filter((menuItem) => menuItem.category === category));
    const allTypes = ["all", ...new Set(menuItems.map((item) => item.type))];
    setMenuTypes(allTypes);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (searchMode) {
      setCategory("");
      setMenuTypes([]);
      if (!searchTerm) {
        setMenuItems(menu);
      }
      if (searchTerm) {
        const newMenuItems = menu.filter((menuItem) =>
          menuItem.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setMenuItems(newMenuItems);
      }
    }
    if (!searchMode && category === "") {
      loadMenu("pizza");
    }
  }, [searchMode, searchTerm]);

  const filterItems = (type) => {
    setLoading(true);
    if (type === "all") {
      setMenuItems(menu.filter((menuItem) => menuItem.category === category));
      setFilter("all");
      setLoading(false);
      return;
    }
    const newItems = menu.filter(
      (menuItem) => menuItem.category === category && menuItem.type === type
    );
    setMenuItems(newItems);
    setFilter(type);
    setLoading(false);
  };

  const loadMenu = (category) => {
    setLoading(true);
    setSearchMode(false);
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
    setLoading(false);
  };

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <section className="menu" onMouseOver={closeSubmenu}>
      <nav className="menu__nav">
        <ul>
          <li>
            <button
              className={`btn ${category === "pizza" ? "btn--active" : ""}`}
              type="button"
              onClick={() => loadMenu("pizza")}
            >
              Pizza
            </button>
          </li>
          <li>
            <button
              className={`btn ${category === "pasta" ? "btn--active" : ""}`}
              type="button"
              onClick={() => loadMenu("pasta")}
            >
              Pasta
            </button>
          </li>
          <li>
            <button
              className={`btn ${category === "salad" ? "btn--active" : ""}`}
              type="button"
              onClick={() => loadMenu("salad")}
            >
              Salads
            </button>
          </li>
          <li>
            <button
              className={`btn ${category === "drink" ? "btn--active" : ""}`}
              type="button"
              onClick={() => loadMenu("drink")}
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
      <div className="pagination">
        <button className="btn btn--secondary">
          <FaArrowLeft />
        </button>
        <button className="btn btn--secondary">1</button>
        <button className="btn btn--secondary">2</button>
        <button className="btn btn--secondary">3</button>
        <button className="btn btn--secondary">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Menu;

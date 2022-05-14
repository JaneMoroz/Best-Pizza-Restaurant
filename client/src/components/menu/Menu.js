import React, { useState, useEffect } from "react";
import { useMenuContext } from "../../context/menu_context";
import { useFilterContext } from "../../context/filter_context";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getUniqueValues, paginate } from "../../utils";
import MenuItem from "./MenuItem";

const Menu = () => {
  const {
    closeSubmenu,
    menu_loading: loading,
    menu_error: error,
  } = useMenuContext();
  const {
    filtered_menu,
    filters: { text, category, type },
    updateFilters,
    menu,
  } = useFilterContext();

  const categories = getUniqueValues(menu, "category");
  const types = getUniqueValues(menu, "type");

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <section className="menu" onMouseOver={closeSubmenu}>
      {/* categories */}
      <nav className="menu__nav">
        <ul>
          {categories.map((c, index) => {
            return (
              <li key={index}>
                <button
                  name="category"
                  className={`btn ${
                    category === c.toLowerCase() ? "btn--active" : ""
                  }`}
                  type="button"
                  onClick={updateFilters}
                >
                  {c}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* end of categories */}
      <div className="menu__products">
        {/* types */}
        <nav className="filters">
          <ul>
            {types.map((t, index) => {
              return (
                <li key={index}>
                  <button
                    name="type"
                    className={`btn ${
                      type === t.toLowerCase() ? "btn--active" : ""
                    }`}
                    type="button"
                    onClick={updateFilters}
                  >
                    {t}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* end of types */}
        <div className="products">
          {filtered_menu.map((item) => {
            return <MenuItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;

import React from "react";
import { useFilterContext } from "../../context/filter_context";

const Categories = () => {
  const {
    filters: { category },
    updateFilters,
    menu,
  } = useFilterContext();

  let categories = menu
    .map((menuItem) => menuItem["category"])
    .filter((menuItem) => menuItem !== undefined);
  categories = [...new Set(categories), "all"];

  return (
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
  );
};

export default Categories;

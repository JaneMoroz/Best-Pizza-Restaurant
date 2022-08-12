import React from "react";
import { useFilterContext } from "../../context/filter_context";
import {
  FaSortAlphaDownAlt,
  FaSortAlphaDown,
  FaSortNumericDownAlt,
  FaSortNumericDown,
} from "../../utils/icons";

const Filters = () => {
  const {
    filters: { category, type },
    updateFilters,
    menu,
    sort,
    updateSort,
  } = useFilterContext();

  let types = menu
    .map((menuItem) => {
      if (category === "all") {
        return menuItem["type"];
      } else {
        if (menuItem.category === category) {
          return menuItem["type"];
        }
      }
    })
    .filter((menuItem) => menuItem !== undefined);
  types = ["all", ...new Set(types)];

  const handleSort = (value) => {
    let sorting = {};
    if (value === "sort-alphabetic") {
      if (sort === "name-a") {
        sorting = { sort: "name-z" };
      } else {
        sorting = { sort: "name-a" };
      }
    }
    if (value === "sort-numeric") {
      if (sort === "price-lowest") {
        sorting = { sort: "price-highest" };
      } else {
        sorting = { sort: "price-lowest" };
      }
    }
    updateSort(sorting);
  };

  return (
    <nav className="filters">
      {/* Start of Filters */}
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
                data-testid={`filter-${t}`}
              >
                {`${t === "all" ? "all" : `#${t}`}`}
              </button>
            </li>
          );
        })}
      </ul>
      {/* End of Filters */}
      {/* Start of Sorting */}
      <div className="sort-btns">
        <button
          type="button"
          className="btn btn--icon btn--sort"
          onClick={() => handleSort("sort-alphabetic")}
          aria-label="sort alphabetically"
          data-testid="sort-al"
        >
          {sort === "name-a" ? (
            <FaSortAlphaDownAlt className="icon" />
          ) : (
            <FaSortAlphaDown className="icon" />
          )}
        </button>
        <button
          type="button"
          className="btn btn--icon btn--sort"
          onClick={() => handleSort("sort-numeric")}
          aria-label="sort by price"
          data-testid="sort-num"
        >
          {sort === "price-lowest" ? (
            <FaSortNumericDownAlt className="icon" />
          ) : (
            <FaSortNumericDown className="icon" />
          )}
        </button>
      </div>
      {/* End of Sorting */}
    </nav>
  );
};

export default Filters;

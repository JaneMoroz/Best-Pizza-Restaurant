import React from "react";
import { useMenuContext } from "../../context/menu_context";
import { useFilterContext } from "../../context/filter_context";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  BsSortAlphaDown,
  BsSortAlphaUpAlt,
  BsSortNumericDownAlt,
  BsSortNumericDown,
} from "react-icons/bs";
import MenuItem from "./MenuItem";

const Menu = () => {
  const { menu_loading: loading, menu_error: error } = useMenuContext();
  const {
    paginated_menu,
    filters: { category, type },
    updateFilters,
    menu,
    page,
    updatePage,
    max_pages,
    sort,
    updateSort,
  } = useFilterContext();

  // Get categories and types corresponding to category
  let categories = menu
    .map((menuItem) => menuItem["category"])
    .filter((menuItem) => menuItem !== undefined);
  categories = [...new Set(categories), "all"];
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

  // Pagination buttons handlers
  const handlePage = (index) => {
    updatePage(index);
  };

  const nextPage = () => {
    let nextPage = page + 1;
    if (nextPage > max_pages - 1) {
      nextPage = 0;
    }
    updatePage(nextPage);
  };

  const prevPage = () => {
    let prevPage = page - 1;
    if (prevPage < 0) {
      prevPage = max_pages - 1;
    }
    updatePage(prevPage);
  };

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
    <section className="menu">
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
                    {`${t === "all" ? "all" : `#${t}`}`}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="sort-btns">
            <button
              type="button"
              className="btn btn--icon btn--sort"
              onClick={() => handleSort("sort-alphabetic")}
              aria-label="sort alphabetically"
            >
              {sort === "name-a" ? (
                <BsSortAlphaUpAlt className="icon" />
              ) : (
                <BsSortAlphaDown className="icon" />
              )}
            </button>
            <button
              type="button"
              className="btn btn--icon btn--sort"
              onClick={() => handleSort("sort-numeric")}
              aria-label="sort by price"
            >
              {sort === "price-lowest" ? (
                <BsSortNumericDownAlt className="icon" />
              ) : (
                <BsSortNumericDown className="icon" />
              )}
            </button>
          </div>
        </nav>
        {/* end of types */}
        {/* nothing found */}
        {paginated_menu === undefined && (
          <div className="error">
            <h1>Nothing found!</h1>
            <p>Try to search something else.</p>
          </div>
        )}
        {/* end of nothing found */}
        <div className="products">
          {paginated_menu &&
            paginated_menu.map((item) => {
              return <MenuItem key={item.id} item={item} />;
            })}
        </div>
        {paginated_menu !== undefined && (
          <div className="pagination">
            <button
              type="button"
              className="btn btn--outlined"
              onClick={prevPage}
              aria-label="previous page"
            >
              <FaArrowLeft />
            </button>
            {[...Array(max_pages)].map((x, index) => {
              return (
                <button
                  type="button"
                  key={index}
                  className={`btn btn--outlined ${
                    index === page ? "btn--active" : ""
                  }`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button
              type="button"
              className="btn btn--outlined"
              onClick={nextPage}
              aria-label="next page"
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;

import React, { useState, useEffect } from "react";
import { useMenuContext } from "../../context/menu_context";
import { useFilterContext } from "../../context/filter_context";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

const Menu = () => {
  const {
    closeSubmenu,
    menu_loading: loading,
    menu_error: error,
  } = useMenuContext();
  const {
    filtered_menu,
    paginated_menu,
    filters: { text, category, type },
    updateFilters,
    menu,
    page,
    updatePage,
    max_pages,
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
                    {`${t === "all" ? "all" : `#${t}`}`}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* end of types */}
        <div className="products">
          {paginated_menu &&
            paginated_menu.map((item) => {
              return <MenuItem key={item.id} item={item} />;
            })}
        </div>
        <div className="pagination">
          <button className="btn btn--outlined" onClick={prevPage}>
            <FaArrowLeft />
          </button>
          {[...Array(max_pages)].map((x, index) => {
            return (
              <button
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
          <button className="btn btn--outlined" onClick={nextPage}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
